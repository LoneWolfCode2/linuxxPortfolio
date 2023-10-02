import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Car } from "./Car";
import { Overlay } from "./Overlay";
export const Experience = () => {
  return (
    <>
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <ScrollControls pages={4} damping={0.25}>
        {/* <Office />       */}
        <Overlay />
        <Car />
      </ScrollControls>
    </>
  );
};
