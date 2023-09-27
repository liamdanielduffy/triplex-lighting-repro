export default function Cylinder({
  position,
}: {
  position?: [number, number, number];
}) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <cylinderGeometry args={[1, 1, 2, 10, 1]} />
      <meshStandardMaterial color={"#ff0000"} roughness={0.4} metalness={0.8} transparent={true} opacity={0.86} />
    </mesh>
  );
}
