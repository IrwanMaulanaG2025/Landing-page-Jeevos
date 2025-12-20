"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { clsx } from "clsx";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 200,
  threshold = 0.1,
  triggerOnce = true,
  className,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // On mobile, force horizontal slide animations to be a vertical one
  const effectiveAnimation = isMobile && (animation === 'slideInLeft' || animation === 'slideInRight') 
    ? 'fadeInUp' 
    : animation;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        "transition-all duration-700 ease-[cubic-bezier(0.2,0.9,0.2,1)]",
        className,
        {
          // Visible state
          "opacity-100 translate-x-0 translate-y-0": isVisible,
          // Hidden states based on effective animation
          "opacity-0": !isVisible,
          "translate-y-8": !isVisible && effectiveAnimation === "fadeInUp",
          "-translate-x-8": !isVisible && effectiveAnimation === "slideInLeft",
          "translate-x-8": !isVisible && effectiveAnimation === "slideInRight",
        }
      )}
    >
      {children}
    </div>
  );
}
