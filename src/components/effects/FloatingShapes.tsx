import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  type: 'cube' | 'sphere' | 'pyramid' | 'ring';
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  floatOffset: number;
  floatSpeed: number;
  opacity: number;
  gradient: string;
}

const gradients = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-cyan-500/20 to-green-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-indigo-500/20 to-purple-500/20',
];

interface FloatingShapesProps {
  shapeCount?: number;
  className?: string;
}

const FloatingShapes = ({ shapeCount = 8, className = '' }: FloatingShapesProps) => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const types: Shape['type'][] = ['cube', 'sphere', 'pyramid', 'ring'];
    const newShapes: Shape[] = [];

    for (let i = 0; i < shapeCount; i++) {
      newShapes.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 40,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 40,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
      });
    }

    setShapes(newShapes);
  }, [shapeCount]);

  const renderShape = (shape: Shape) => {
    const baseStyle = {
      width: shape.size,
      height: shape.size,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      opacity: shape.opacity,
      animationDuration: `${20 / shape.floatSpeed}s`,
      animationDelay: `${-shape.floatOffset}s`,
    };

    switch (shape.type) {
      case 'cube':
        return (
          <div
            key={shape.id}
            className={`absolute bg-gradient-to-br ${shape.gradient} backdrop-blur-sm rounded-lg border border-white/10 animate-float-rotate`}
            style={{
              ...baseStyle,
              transform: `rotate(${shape.rotation}deg) rotateX(15deg) rotateY(15deg)`,
            }}
          />
        );
      case 'sphere':
        return (
          <div
            key={shape.id}
            className={`absolute bg-gradient-to-br ${shape.gradient} backdrop-blur-sm rounded-full border border-white/10 animate-float`}
            style={baseStyle}
          />
        );
      case 'pyramid':
        return (
          <div
            key={shape.id}
            className={`absolute animate-float-rotate`}
            style={{
              ...baseStyle,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))`,
            }}
          />
        );
      case 'ring':
        return (
          <div
            key={shape.id}
            className={`absolute rounded-full border-4 border-primary/20 animate-float-rotate`}
            style={{
              ...baseStyle,
              background: 'transparent',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;
