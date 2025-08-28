import React, { useEffect, useRef, useState } from "react";

export default function Media({
    look,
    onSlideChange = () => {},
    onProgress = () => {},
}) {
    const [index, setIndex] = useState(0);
    const rafRef = useRef(null);
    const timeoutRef = useRef(null);
    const startTsRef = useRef(null);

    useEffect(() => {
        setIndex(0);
        onSlideChange(0);
        onProgress(0);
    }, [look.id]);

    useEffect(() => {
        onSlideChange(index);
        onProgress(0);
    }, [index, onSlideChange, onProgress]);

    useEffect(() => {
        if (look.type !== "image" || !look.images || look.images.length === 0)
            return;

        const DURATION = 5000;
        cancelAnimationFrame(rafRef.current);
        clearTimeout(timeoutRef.current);

        startTsRef.current = performance.now();

        const tick = (now) => {
            const t = Math.min(1, (now - startTsRef.current) / DURATION);
            onProgress(t);
            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);

        timeoutRef.current = setTimeout(() => {
            setIndex((i) => (i + 1) % look.images.length);
        }, DURATION);

        return () => {
            cancelAnimationFrame(rafRef.current);
            clearTimeout(timeoutRef.current);
        };
    }, [look, index, onProgress]);

    const goPrev = () => {
        if (look.type !== "image") return;
        setIndex((i) => (i - 1 + look.images.length) % look.images.length);
    };

    const goNext = () => {
        if (look.type !== "image") return;
        setIndex((i) => (i + 1) % look.images.length);
    };

    const videoRef = useRef(null);
    useEffect(() => {
        if (look.type !== "video") return;

        const v = videoRef.current;
        if (!v) return;
        const onTime = () => {
            if (v.duration && v.duration > 0) {
                onProgress(v.currentTime / v.duration);
            }
        };
        const onEnded = () => {
            onProgress(1);
        };
        v.addEventListener("timeupdate", onTime);
        v.addEventListener("ended", onEnded);
        return () => {
            v.removeEventListener("timeupdate", onTime);
            v.removeEventListener("ended", onEnded);
        };
    }, [look, onProgress]);

    return (
        <div className="w-full h-full relative bg-black">
            {look.type === "image" ? (
                <>
                    <img
                        src={look.images[index]}
                        alt={look.title || `Look ${look.id}`}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.currentTarget.style.opacity = 0.6)}
                    />

                    <div className="absolute inset-0 z-30 flex">
                        <button
                            onClick={goPrev}
                            className="flex-1 h-full bg-transparent"
                            aria-label="Previous image"
                        />
                        <button
                            onClick={goNext}
                            className="flex-1 h-full bg-transparent"
                            aria-label="Next image"
                        />
                    </div>
                </>
            ) : (
                <video
                    ref={videoRef}
                    src={look.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted
                    controls
                />
            )}
        </div>
    );
}
