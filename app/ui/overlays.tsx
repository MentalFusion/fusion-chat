"use client";

export const ClickToCloseOverlay = ({ onClick }: { onClick: () => void }) => (
    <div
        className="fixed inset-0 bg-black opacity-50 z-40 h-full w-full fade-in fade-out"
        onClick={onClick}
    />
);
