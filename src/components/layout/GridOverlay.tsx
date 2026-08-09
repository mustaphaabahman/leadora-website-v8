"use client";

export default function GridOverlay() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}
