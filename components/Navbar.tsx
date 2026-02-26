"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-zinc-200/50"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo container */}
                    <div className="relative w-10 h-10 overflow-hidden rounded-md bg-zinc-100 flex items-center justify-center">
                        <Image
                            src="/logo.jpeg"
                            alt="BUILD Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-zinc-900 uppercase">
                        Build
                    </span>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
                    <Link href="#purpose" className="hover:text-zinc-900 transition-colors">Purpose</Link>
                    <Link href="#vision" className="hover:text-zinc-900 transition-colors">Vision</Link>
                    <Link href="#contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
                </div>
                <button className="md:hidden p-2 text-zinc-900">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.nav>
    );
}
