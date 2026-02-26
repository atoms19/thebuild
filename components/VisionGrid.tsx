"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function VisionGrid() {
    return (
        <section id="vision" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariant}
                    className="mb-20 max-w-3xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
                        The architecture of modern leadership.
                    </h2>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed">
                        We don't just teach communication; we re-engineer how you are perceived.
                        Our framework strips away the noise, leaving only impact.
                    </p>
                </motion.div>

                {/* Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                    {/* Main Visual - Left Large */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="md:col-span-8 group cursor-pointer"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm">
                            <Image
                                src="/leadership_talk_3.png"
                                alt="Executive Presence"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">Executive Presence</h3>
                                <p className="text-zinc-500 mt-2">Commanding the room with quiet confidence.</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all transform group-hover:rotate-45">
                                <ArrowUpRight className="w-5 h-5 text-current" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-4 flex flex-col gap-12">

                        {/* Visual 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUpVariant}
                            className="group cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-sm">
                                <Image
                                    src="/leader.avif"
                                    alt="Strategic Clarity"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">Strategic Clarity</h3>
                            <p className="text-zinc-500 mt-2 text-sm">Distilling complex ideas into pure impact.</p>
                        </motion.div>

                        {/* Visual 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUpVariant}
                            className="group cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-zinc-100 shadow-sm">
                                {/* For reference 4, applying a subtle mix blend to fit the brand */}
                                <Image
                                    src="/leadership_talk_2.png"
                                    alt="Authentic Voice"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-90"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">Authentic Voice</h3>
                            <p className="text-zinc-500 mt-2 text-sm">Finding the frequency that resonates.</p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
