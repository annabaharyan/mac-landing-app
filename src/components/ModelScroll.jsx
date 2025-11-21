import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import MacbookModel from "@/components/models/Macbook";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "@/store";
import { featureSequence } from "@/constants";
import { useGSAP } from "@gsap/react";

const ModelScroll = () => {
  const groupRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { setTexture } = useMacbookStore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const virtualElement = document.createElement("video");
      Object.assign(virtualElement, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      virtualElement.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-1.mp4`),
      )
      .to(".box1", { opacity: 1, y: 0, delay: 1 })

      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-2.mp4`),
      )
      .to(".box2", { opacity: 1, y: 0 })

      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-3.mp4`),
      )
      .to(".box3", { opacity: 1, y: 0 })

      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-4.mp4`),
      )
      .to(".box4", { opacity: 1, y: 0 })

      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-5.mp4`),
      )
      .call(() =>
        setTexture(`${import.meta.env.BASE_URL}/videos/feature-5.mp4`),
      )
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};
export default ModelScroll;
