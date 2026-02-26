"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarketingHero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Text Content - Left Side */}
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-black tracking-tight leading-[1.05] mb-8"
                    >
                        Build your voice.<br />
                        Build your<br />
                        presence.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6 text-zinc-700 text-lg md:text-xl font-light leading-relaxed max-w-lg"
                    >
                        <p>
                            <strong className="font-bold text-black">THE BUILD</strong> is a public speaking and communication platform dedicated to helping individuals develop clarity, confidence, and presence through intentional communication.
                        </p>
                        <p>
                            We believe communication is not talent — it is a skill that can be built. Leaders are shaped through structure, practice, and the courage to speak.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image - Right Side */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/hero.png"
                            alt="The Build Seminar Auditorium"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
