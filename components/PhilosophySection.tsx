"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PhilosophySection() {
    return (
        <section className="pt-32 bg-zinc-50/50 flex flex-col items-center text-center overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                        Great leaders are not born<br />
                        they are built.
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                        At <strong className="font-bold text-zinc-900">THE BUILD</strong>, we focus on strengthening how individuals think, speak, and present themselves in academic, professional, and leadership environments.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] rounded-t-[2.5rem] overflow-hidden shadow-2xl mx-6"
            >
                <Image
                    src="/leadership_talk_2.png"
                    alt="Charismatic speaker"
                    fill
                    className="object-cover object-top"
                />
            </motion.div>
        </section>
    );
}
