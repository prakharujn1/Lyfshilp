"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../libs/utils";

export const CardSpotlight = ({
  children,
  radius = 300,
  color = "#184802", // pan green
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-8 rounded-xl relative border bg-white border-green-800 dark:border-green-900 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Glow layer */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100 mix-blend-overlay"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          filter: "blur(60px) brightness(1.3)",
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [81, 121, 31],  // #51791F
              [42, 98, 12],   // #2A620C
              [24, 72, 2],    // #184802
            ]}
            dotSize={3}
          />
        )}
      </motion.div>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
