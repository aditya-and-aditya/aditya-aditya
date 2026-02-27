'use client';

import React from 'react';

interface DemoShellProps {
  activePillar: string;
  children: React.ReactNode;
}

export default function DemoShell({ activePillar, children }: DemoShellProps) {
  return (
    <div className="h-[calc(100vh-12rem)] w-full overflow-hidden rounded-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] bg-[#f2ece0] border border-[#b5893a]/10 relative">
      <div className="h-full w-full relative">
        {children}
      </div>
    </div>
  );
}
