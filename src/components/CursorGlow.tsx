import { useMousePosition } from '../hooks/useAnimations';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{ left: x, top: y }}
    />
  );
}
