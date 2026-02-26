"use client";

import { motion } from "framer-motion";

export default function WhatWeDoSection() {
    return (
        <section className="py-32 px-6 bg-white flex flex-col items-center text-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8 block">
                        What We Do
                    </span>
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                        We build confident communicators
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                        Our work focuses on clarity, confidence, and presence — the foundations of effective communication.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
