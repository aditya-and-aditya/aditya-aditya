'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DemoShellProps {
  children: React.ReactNode;
  title?: string;
}

export default function DemoShell({ children, title }: DemoShellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="scene w-full h-full flex items-center justify-center p-4"
      style={{ perspective: '1400px', perspectiveOrigin: '50% 40%' }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="demo-window w-full h-full bg-[#0e0c13] border border-[rgba(201,168,76,0.2)] rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(201,168,76,0.06),0_40px_80px_rgba(0,0,0,0.5),0_80px_160px_rgba(0,0,0,0.3)] transition-transform duration-[0.8s] ease-out"
      >
        <div className="demo-window__bar flex items-center gap-2 px-4 py-3 border-b border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.03)]">
          <div className="flex gap-1.5 opacity-30 text-[0.45rem] tracking-[0.3em] text-[#c9a84c]">
            ● ● ●
          </div>
          {title && (
            <span className="ml-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a84c]/50 font-mono">
              {title}
            </span>
          )}
        </div>
        <div className="demo-window__body h-[calc(100%-41px)] relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
