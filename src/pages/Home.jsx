import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Media from "../components/Media";
import SlideshowBar from "../components/SlideshowBar";
import ProductCarousel from "../components/ProductCarousel";
import { looks } from "../data/mock";

export default function Home() {
    const [currentLookIndex, setCurrentLookIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
        setProgress(0);
    }, [currentLookIndex]);

    const handlers = useSwipeable({
        onSwipedUp: () => setCurrentLookIndex((i) => (i + 1) % looks.length),
        onSwipedDown: () =>
            setCurrentLookIndex((i) => (i - 1 + looks.length) % looks.length),
        preventScrollOnSwipe: true,
        trackTouch: true,
        delta: 10,
    });

    const curLook = looks[currentLookIndex];
    const isImageLook = curLook.type === "image";
    const totalSlides = isImageLook ? curLook.images.length : 0;

    return (
        <div
            {...handlers}
            className="relative h-screen w-screen bg-black text-white overflow-hidden"
        >
            <Media
                key={curLook.id}
                look={curLook}
                onSlideChange={setCurrentImageIndex}
                onProgress={setProgress}
                slideDuration={5000}
            />

            {isImageLook && (
                <div className="absolute top-3 left-3 right-3 z-40 pointer-events-none">
                    <SlideshowBar
                        totalSlides={totalSlides}
                        currentSlide={currentImageIndex}
                        progress={progress}
                    />
                </div>
            )}

            {curLook.products && curLook.products.length > 0 && (
                <div className="absolute bottom-0 left-0 right-0 z-50 bg-black/30">
                    <ProductCarousel productRefs={curLook.products} />
                </div>
            )}
        </div>
    );
}
