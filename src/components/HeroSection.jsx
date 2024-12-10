import { motion } from 'framer-motion';
import { variants } from './data/config';
import InteractiveButton from './InteractiveButtom'
import SocialButtons from './SocialButtom';
function HeroSection() {
    return (
        <>
        <section id='inicio' className="relative w-full">
            <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
            <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>

            <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg mx-auto relative">
                <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                    <section className='lg:py-6 flex justify-betweer'>
                        <SocialButtons/>
                        <section className="ml-0 md:ml-12">
                            <header className="text-center lg:text-left">
                                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                    Hola soy
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                                        Felix Mamani Aguilar
                                    </span>
                                </h1>
                            </header>
                            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
                                Estudiante de ingeniería informática con la mención en ingeniería de software,
                                así como un apasionado en la programación .
                            </p>
                            <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:mx-0">
                                <figure className="w-56">
                                    <InteractiveButton text='Contratame' />
                                </figure>
                                <motion.a
                                    href="/curriculum.pdf" // Asegúrate de que "curriculum.pdf" esté en la carpeta "public"
                                    download="Curriculum_Felix_Mamani_Aguilar.pdf"
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-3xl"
                                    aria-label="Download Resume"
                                >
                                    <svg viewBox="0 0 24 24" width={40} height={40}>
                                        <motion.path
                                            d="M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172l-2.536-2.536L8.464 9.636 9.05 11.05 12 15.586zm-7 2h14v2H5v-2z"
                                            fill="#FFC107"
                                            stroke="#FFC107"
                                            strokeWidth={0.5}
                                            variants={variants}
                                            initial="initial"
                                            animate="animate"
                                        />
                                    </svg>
                                    <span>Descargar Curriculum Vitae</span>
                                </motion.a>
                            </section>
                        </section>
                    </section>
                    <figure className="lg:h-full md:flex md:justify-end mt-20 md:mt-0">
                        <motion.div
                            className="w-[350px] h-[350px] md:w-[400px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
                            animate={{
                            backgroundColor: ["#FFC107", "#FF7556", "#FF6667", "#FFC107"],
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            }}
                        >
                            {/* Fondo animado */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6667] blur-3xl opacity-60 h-full w-full"></div>

                            {/* Imagen */}
                            <img
                            src="/image.png"
                            alt="samurai"
                            className="relative z-10 rounded-full max-h-full shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </motion.div>
                        </figure>
                </article>
            </section>
        </section>
        </>
    );
}

export default HeroSection;
