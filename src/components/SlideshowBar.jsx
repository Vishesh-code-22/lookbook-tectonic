import React from "react";
const SlideshowBar = ({ totalSlides = 0, currentSlide = 0, progress = 0 }) => {
    if (!totalSlides) return null;

    return (
        <div className="flex gap-2 items-center">
            {Array.from({ length: totalSlides }).map((_, i) => {
                const value =
                    i < currentSlide ? 1 : i === currentSlide ? progress : 0;
                const widthPercent = Math.max(0, Math.min(100, value * 100));
                return (
                    <div
                        key={i}
                        className="flex-1 h-1 rounded bg-white/30 overflow-hidden"
                    >
                        <div
                            className="h-full bg-white rounded transition-all duration-100 linear"
                            style={{ width: `${widthPercent}%` }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default SlideshowBar;
