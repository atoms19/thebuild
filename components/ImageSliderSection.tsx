"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/leadership_talk_1.png",
    "/leadership_talk_2.png",
    "/leadership_talk_3.png",
    "/leadership_talk_4.png",
];

export default function ImageSliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pb-32 px-6 bg-white overflow-hidden text-center">
            <div className="max-w-6xl mx-auto">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`Brand Visual ${currentIndex + 1}`}
                                fill
                                className="object-cover object-center"
                                priority={currentIndex === 0}
                            />
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Subtle dots indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${currentIndex === idx
                                    ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    : "bg-white/40 hover:bg-white/70 w-2"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
