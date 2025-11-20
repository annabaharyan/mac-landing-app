import { useRef } from "react";
import gsap from "gsap";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "@/components/models/Macbook-16";
import MacbookModel14 from "@/components/models/Macbook-14";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { duration: ANIMATION_DURATION, opacity });
    }
  });
};
const moveGroup = (group, distance) => {
  if (!group) return;
  gsap.to(group.position, { duration: ANIMATION_DURATION, x: distance });
};
const ModelSwitcher = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_SMALL_DESKTOP = 0.05;
  const smallMacRef = useRef();
  const largeMacRef = useRef();
  const showLargeMac =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_SMALL_DESKTOP;

  useGSAP(() => {
    if (showLargeMac) {
      moveGroup(smallMacRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacRef.current, 0);
      fadeMeshes(smallMacRef.current, 0);
      fadeMeshes(largeMacRef.current, 1);
    } else {
      moveGroup(smallMacRef.current, 0);
      moveGroup(largeMacRef.current, OFFSET_DISTANCE);
      fadeMeshes(smallMacRef.current, 1);
      fadeMeshes(largeMacRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };
  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
