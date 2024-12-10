import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    const sentence = 'Todos los derechos reservados @Felix Mamani';
    const letters = sentence.split('');

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <footer className="relative z-10 text-white border-t-2 border-t-white mt-20 bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary">
            <div className="container mx-auto p-8 flex flex-wrap items-center justify-center space-y-4">
                <motion.nav
                    aria-label="Footer Rights"
                    className="flex flex-wrap justify-center items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className={`inline-block ${letter === ' ' ? 'mr-4' : 'mr-1'}`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.nav>
            </div>
        </footer>
        </>
    );
}
