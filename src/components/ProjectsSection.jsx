import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { projects } from "./data/config";

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar a la siguiente diapositiva
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    // Cambiar a la diapositiva anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    // Variantes de Framer Motion para animaciones
    const slideVariants = {
        initial: { opacity: 0, scale: 0.8, x: 100 },
        animate: { opacity: 1, scale: 1, x: 0 },
        exit: { opacity: 0, scale: 0.8, x: -100 },
    };

    return (
        <>
        <section className="relative py-16" id="proyecto">
        {/* Fondo decorativo */}
        <header
            className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"
            aria-hidden="true"
        />
        <header
            className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
            aria-hidden="true"
        />

        {/* Título */}
        <CustomTitle title="Mis Proyectos" />

        {/* Contenedor principal */}
        <div className="relative flex flex-col items-center mt-16 px-4 md:px-10">
            {/* Botón anterior */}
            <button
            onClick={prevSlide}
            aria-label="Proyecto anterior"
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            >
            <img
                src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-left.png"
                alt="Flecha izquierda"
                className="w-8 h-8"
            />
            </button>

            {/* Carrusel de proyectos */}
            <div className="relative w-full max-w-5xl h-[450px] sm:h-[550px] flex justify-center items-center overflow-hidden">
            <AnimatePresence initial={false}>
                {projects.map(
                (project, index) =>
                    index === currentIndex && (
                    <motion.div
                        key={project.id}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3,
                        }}
                        className="absolute w-[90%] sm:w-[80%] h-full bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-md flex flex-col items-center text-center"
                    >
                        {/* Imagen del proyecto */}
                        <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-1/2 sm:h-[60%] object-cover rounded-lg"
                        />
                        {/* Título y descripción */}
                        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                        {project.title}
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-gray-300">
                        {project.description}
                        </p>
                    </motion.div>
                    )
                )}
            </AnimatePresence>
            </div>

            {/* Botón siguiente */}
            <button
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            >
            <img
                src="https://img.icons8.com/sf-black/100/FFC107/circled-chevron-right.png"
                alt="Flecha derecha"
                className="w-8 h-8"
            />
            </button>
        </div>
        </section>
        </>
    );
}
