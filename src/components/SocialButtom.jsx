import React from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from './data/config';

export default function SocialButtons() {
    const animationDuration = 0.3; 
    const variants = {
        initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
        animate: {
            pathLength: 1,
            strokeOpacity: 0,
            fillOpacity: 1,
            transition: {
                duration: animationDuration,
                ease: 'easeInOut',
                strokeOpacity: {
                    delay: animationDuration
                },
                fillOpacity: {
                    delay: animationDuration
                }
            }
        },
        hover: {
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.3, type: 'spring', stiffness: 300 }
        },
        tap: {
            scale: 0.95, 
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
        <div className="md:flex flex-col items-center justify-center border border-primary bg-[#ffffff29] rounded-3xl space-y-6 p-6 max-h-[506px] md:max-h-[386px] hidden">
            {socialIcons.map((icon) => (
                <motion.button
                    key={icon.id}
                    aria-label={`Go to ${icon.name}`}
                    className="p-2 rounded-full hover:bg-yellow-400 focus:outline-none"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => window.open(icon.url, '_blank')} // Redirige al URL
                >
                    <svg viewBox={icon.viewBox} width={40} height={40}>
                        <motion.path
                            d={icon.path}
                            fill="#FFC107"
                            stroke="#FFC107"
                            strokeWidth={1}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                        />
                    </svg>
                </motion.button>
            ))}
        </div>
        </>
    );
}
