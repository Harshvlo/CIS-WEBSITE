import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
}

const vertexShader = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor;
  uniform float uAmplitude;
  uniform float uDistance;
  uniform vec2 uMouse;
  uniform float uMouseInfluence;
  
  varying vec2 vUv;
  
  #define PI 3.14159265359
  #define NUM_LINES 30.0
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }
  
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  
  float line(vec2 uv, float offset, float speed, float amp) {
    float y = uv.y;
    float x = uv.x;
    
    // Add mouse influence
    float mouseEffect = 0.0;
    if (uMouseInfluence > 0.0) {
      float distToMouse = distance(uv, uMouse);
      mouseEffect = smoothstep(0.4, 0.0, distToMouse) * 0.25 * uMouseInfluence;
    }
    
    // Wave pattern - more intense
    float wave = sin(x * 5.0 + uTime * speed + offset * PI) * amp * 0.12;
    wave += sin(x * 3.0 - uTime * speed * 0.7 + offset) * amp * 0.08;
    wave += noise(vec2(x * 4.0 + uTime * 0.3, offset)) * amp * 0.05;
    wave += mouseEffect;
    
    // Line position
    float linePos = offset / NUM_LINES + uDistance * 0.1;
    linePos = fract(linePos);
    
    // Draw line - thicker lines
    float thickness = 0.004 + 0.002 * sin(uTime + offset);
    float dist = abs(y - linePos - wave);
    float line = smoothstep(thickness, 0.0, dist);
    
    // Add glow around lines
    float glow = smoothstep(thickness * 4.0, 0.0, dist) * 0.4;
    line += glow;
    
    // Fade at edges
    float fade = smoothstep(0.0, 0.15, x) * smoothstep(1.0, 0.85, x);
    fade *= smoothstep(0.0, 0.08, y) * smoothstep(1.0, 0.92, y);
    
    return line * fade;
  }
  
  void main() {
    vec2 uv = vUv;
    
    float lines = 0.0;
    for (float i = 0.0; i < NUM_LINES; i++) {
      float speed = 0.4 + i * 0.03;
      float amp = uAmplitude * (0.6 + 0.4 * sin(i * 0.4));
      lines += line(uv, i, speed, amp) * (0.4 + 0.6 * (i / NUM_LINES));
    }
    
    vec3 color = uColor * lines * 1.5;
    
    // Add bloom/glow effect
    color += uColor * lines * 0.8;
    
    // Background - subtle gradient
    vec3 bg = vec3(0.0);
    
    gl_FragColor = vec4(bg + color, 1.0);
  }
`;

const Threads = ({
  color = [0.4, 0.6, 1.0],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  className = "",
}: ThreadsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, influence: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({
      alpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(container.offsetWidth, container.offsetHeight) },
        uColor: { value: color },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Vec2(0.5, 0.5) },
        uMouseInfluence: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      program.uniforms.uResolution.value.set(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = 1 - (e.clientY - rect.top) / rect.height;
      mouseRef.current.influence = 1;
    };

    const handleMouseLeave = () => {
      mouseRef.current.influence = 0;
    };

    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    let startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      program.uniforms.uTime.value = elapsed;
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uDistance.value = distance;
      program.uniforms.uColor.value = color;

      // Smooth mouse influence
      const targetInfluence = mouseRef.current.influence;
      const currentInfluence = program.uniforms.uMouseInfluence.value;
      program.uniforms.uMouseInfluence.value += (targetInfluence - currentInfluence) * 0.05;
      program.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render({ scene: mesh });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: enableMouseInteraction ? "auto" : "none" }}
    />
  );
};

export default Threads;
