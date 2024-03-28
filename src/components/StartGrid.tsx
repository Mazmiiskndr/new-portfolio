"use client";
// src/components/StarGrid.tsx

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useTheme } from "next-themes";

export default function StarGrid() {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);
  const { theme } = useTheme();

  const grid = [20, 30] as const;

  const [viewBoxSize, setViewBoxSize] = useState('0 0 935 700');

  useEffect(() => {
    // Fungsi untuk mengecek lebar layar dan mengupdate state viewBoxSize
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) { // 1024px sebagai contoh breakpoint untuk 'lg'
        setViewBoxSize('0 0 935 435');
      } else {
        setViewBoxSize('0 0 935 700');
      }
    };

    // Panggil fungsi ketika komponen di-mount
    checkScreenSize();

    // Tambahkan event listener ketika ukuran window berubah
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener ketika komponen di-unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { opacity: 1 });
        gsap.set(".star-grid-item", {
          opacity: 0.7,
          scale: 1,
        });
        return;
      }

      gsap.set(".star-grid-item", {
        opacity: 0.6,
        transformOrigin: "center",
        color: theme === "light" ? "#020D19" : "#fff",
      });
      gsap.set(container.current, { opacity: 1 });

      const tl = gsap.timeline();

      // Entrance animation
      tl.to(".star-grid-item", {
        keyframes: [
          {
            opacity: 0.6,
            duration: 0,
          },
          {
            opacity: 0.6,
            rotate: "+=180",
            color: "#ffd057",
            scale: 3,
            duration: 0.6,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.6,
            rotate: "+=180",
            color: theme === "light" ? "#020D19" : "#fff",
            scale: 1,
            delay: -2,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });

      // Loop animation
      tl.to(".star-grid-item", {
        delay: 8,
        repeat: -1,
        repeatDelay: 8,
        keyframes: [
          {
            opacity: 0.6,
            rotate: "+=180",
            color: "#ffd057",
            scale: 3,
            duration: 0.6,
            stagger: {
              amount: 2,
              grid: grid,
              from: "center",
            },
          },
          {
            opacity: 0.5,
            rotate: "+=180",
            color: theme === "light" ? "#020D19" : "#fff",
            scale: 1,
            delay: -2,
            duration: 0.6,
            stagger: {
              amount: 3,
              grid: grid,
              from: "center",
            },
          },
        ],
      });
    },[theme, prefersReducedMotion, grid, container]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={viewBoxSize}
      className="absolute -top-16 -z-10"
      id="star-grid"
      ref={container}
      opacity={0.6}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <path
                key={i + j}
                fill="currentColor"
                opacity=".2"
                className="star-grid-item"
                d={`M${j * 32 + 2},${i * 32 + 6}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
