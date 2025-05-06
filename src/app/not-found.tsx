"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#347ead] to-[#ffffff] flex flex-col justify-center items-center px-6 text-center">

            <motion.h1
                className="text-8xl font-bold mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.h1>

            <motion.p
                className="text-2xl md:text-3xl mb-6 text-center max-w-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Oops! The page you’re looking for doesn’t exist.
            </motion.p>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
            >
                <Link
                    href="/"
                    className="bg-white text-[#004a78] px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition"
                >
                    Back to Homepage
                </Link>
            </motion.div>

            <motion.div
                className="mt-16 text-sm opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                University Council for Educational Administration (UCEA)
            </motion.div>
        </div>
    );
}
