import Box from "./components/box";
import Cylinder from "./components/cylinder";

export default function Scene() {
  return (
    <>
      <Box
        position={[1.3425115025968148,0.6809262494583636,-0.025155228667973206]}
        rotation={[
          1.6614940569065706, -0.19592501759947428, -0.7104461304064015,
        ]}
      />

      <Cylinder position={[-0.232795849248139,1.557271743120519,-0.08281187151653047]} />

      <group>
        <mesh
          castShadow
          receiveShadow
          rotation={[-0.1575415617624684,0,0]}
          position={[
            -1.7000954418256176, -0.3994618954064393, -0.5055619920950951,
          ]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#fdfd96" />
        </mesh>
      </group>

      <mesh
        receiveShadow
        rotation={[-1.5556753578613916, 0, 0]}
        position={[-0.1972523957972513, -0.9736325976858, -0.7306790064207817]}
      >
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#eae0da" />
      </mesh>
    <spotLight position={[0,5.108747543854432,0]} /></>
  );
}
