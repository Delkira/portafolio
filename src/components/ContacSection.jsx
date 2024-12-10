import React from "react";
import { motion } from "framer-motion";
import InteractiveButton from "./InteractiveButtom";
import CustomTitle from "./CustomTitle";
import { contactData } from "./data/config";

// Variantes para animaciones
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        },
    },
    };

    const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    };

    // Componente para tarjetas de contacto
    const ContactInfoCard = ({ icon, title, description }) => (
        <motion.div
            variants={itemVariants}
            className="bg-black text-white rounded-xl border border-primary bg-opacity-20 p-4 flex items-center"
        >
            <img
                src={icon}
                alt={title}
                width={64}
                height={64}
                className="mr-4 flex-shrink-0"
            />
            <div className="flex-1 overflow-hidden">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-sm md:text-base break-words overflow-hidden text-ellipsis">
                {description}
                </p>
            </div>
        </motion.div>
    );  

    // Componente para el formulario de contacto
    const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    return (
        <>
        <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="space-y-6 max-w-lg mx-auto"
        >
        {[
            { id: "name", type: "text", placeholder: "Tu Nombre" },
            { id: "email", type: "email", placeholder: "Tu Email" },
            { id: "phone", type: "tel", placeholder: "Tu Número Telefónico" },
        ].map((field) => (
            <label
            key={field.id}
            htmlFor={field.id}
            className="block border-b focus-within:border-primary"
            >
            <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                required
                className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"
            />
            </label>
        ))}

        <label htmlFor="message" className="block border-b focus-within:border-primary">
            <textarea
            id="message"
            rows="4"
            placeholder="¡Mensaje!"
            value={formData.message}
            onChange={handleChange}
            required
            className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"
            ></textarea>
        </label>

        <div className="text-center">
            <InteractiveButton text="Enviar mensaje" className="w-full py-3 text-lg" />
        </div>
        </motion.form>
        </>
    );
    };

    // Componente principal de la sección de contacto
    export default function ContactSection() {
    return (
        <>
        <article className="relative font-sans text-white p-10 md:p-16" id="contacto">
        {/* Fondo decorativo */}
        <header
            className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"
            aria-hidden="true"
        ></header>
        <header
            className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
            aria-hidden="true"
        ></header>

        {/* Título */}
        <CustomTitle title="Contactame" />

        {/* Contenido principal */}
        <motion.section
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {/* Información de contacto */}
            <div>
            {contactData.map(({ id, icon, title, description }) => (
                <ContactInfoCard
                key={id}
                icon={icon}
                title={title}
                description={description}
                />
            ))}
            </div>

            {/* Formulario de contacto */}
            <ContactForm />
        </motion.section>
        </article>
        </>
    );
}
