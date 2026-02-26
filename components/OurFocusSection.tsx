"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const focusAreas = [
    {
        title: "Clarity",
        description: "Distilling complex thoughts into clear, actionable, and impactful messages.",
        image: "/leadership_talk_3.png"
    },
    {
        title: "Confidence",
        description: "Building the internal fortitude to speak with authority in any room.",
        image: "/leadership_talk_4.png"
    },
    {
        title: "Purpose",
        description: "Aligning your delivery with your core objectives to drive real change.",
        image: "/leadership_talk_2.png"
    }
];

export default function OurFocusSection() {
    return (
        <section className="py-32 px-6 bg-zinc-50 flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-600 mb-6 block">
                        Our Focus
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6">
                        What we build, at the core
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed max-w-3xl mx-auto mb-20">
                        Our work centers around developing individuals who communicate with clarity, confidence, and purpose.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {focusAreas.map((area, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="flex flex-col text-left group cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-md">
                                <Image
                                    src={area.image}
                                    alt={area.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{area.title}</h3>
                            <p className="text-zinc-600 leading-relaxed font-light">{area.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
