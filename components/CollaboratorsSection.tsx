"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CollaboratorsSection() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100 flex flex-col items-center text-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-12 block">
                        In Collaboration With
                    </span>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-500">
                        {/* Mulearn Logo */}
                        <div className="relative w-40 h-20 md:w-56 md:h-24 grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/collaborator-logo.png"
                                alt="Mulearn"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Future collaborators can be mapped here */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
