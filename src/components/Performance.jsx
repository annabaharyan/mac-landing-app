import { useRef } from "react";

import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  performanceImages,
  performanceImgPositionsDesktop,
  performanceImgPositionsMobile,
} from "@/constants";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 728px)" });
  const sectionRef = useRef(null);

  let positions = performanceImgPositionsDesktop;
  if (isMobile) positions = performanceImgPositionsMobile;

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Position Each Performance Image
      positions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const toVars = {};

        if (typeof item.left === "number") toVars.left = `${item.left}%`;
        if (typeof item.right === "number") toVars.right = `${item.right}%`;
        if (typeof item.bottom === "number") toVars.bottom = `${item.bottom}%`;

        if (item.transform) toVars.transform = item.transform;

        tl.to(selector, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );
  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.id}
            className={image.id}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever
          </span>
          .
        </p>
        <p>
          {" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
