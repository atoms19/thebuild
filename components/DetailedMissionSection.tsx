"use client";

import { motion } from "framer-motion";

export default function DetailedMissionSection() {
    return (
        <section className="py-24 px-6 bg-white border-y border-zinc-100">
            <div className="max-w-4xl mx-auto text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6">
                            The true cost of poor communication.
                        </h2>
                        <p className="text-lg text-zinc-600 font-light leading-relaxed">
                            In today's fast-paced corporate environment, the inability to articulate a vision effectively is more than just a missed opportunity—it's a massive drain on productivity and morale. We've seen brilliant ideas get dismissed simply because they were not presented with the right frequency or conviction.
                        </p>
                    </div>

                    <div className="pl-6 border-l-2 border-black">
                        <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
                            Building a framework.
                        </h3>
                        <p className="text-lg text-zinc-600 font-light leading-relaxed">
                            We approach communication not as an inherent talent, but as an architectural discipline. We deconstruct how you speak, how you stand, and how you structure a narrative, and rebuild it using proven frameworks. Through rigorous practice and structured feedback, we forge communicators who command presence and drive action.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4">
                            Transforming the organizational DNA.
                        </h3>
                        <p className="text-lg text-zinc-600 font-light leading-relaxed">
                            Our ultimate outcome isn't just better speeches; it is a fundamental shift in how your entire organization operates. From tighter meetings to more decisive leadership interactions and unified corporate messaging, when communication thrives, the business thrives.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
