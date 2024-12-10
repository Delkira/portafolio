import React from "react";
import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { skills } from "./data/config";

// Subcomponente reutilizable: Círculo animado para una habilidad
const SkillCircle = ({ skill, percentage, icon }) => {
  const radius = 50; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Perímetro
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Calcular el offset

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center"
      aria-label={`Habilidad: ${skill}, Dominio: ${percentage}%`}
    >
      {/* SVG para el círculo animado */}
      <svg
        width={120}
        height={120}
        className="rotate-[-90deg]"
        role="img"
        aria-hidden="true"
      >
        {/* Círculo base (fondo) */}
        <circle
          cx={60}
          cy={60}
          r={radius}
          fill="transparent"
          stroke="#ffffff29"
          strokeWidth={10}
        />
        {/* Círculo animado (progreso) */}
        <motion.circle
          cx={60}
          cy={60}
          r={radius}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth={10}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Gradiente para el círculo */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>
        </defs>
      </svg>

      {/* Contenido central del círculo */}
      <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={icon}
          alt={`${skill} icon`}
          className="w-12 h-12 mb-2"
        />
        <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          {percentage}%
        </p>
      </div>
    </motion.div>
    </>
  );
};

// Sección principal de habilidades
export default function SkillsSection() {
  return (
    <>
    <section
      className="relative py-16"
      id="habilidades"
      aria-labelledby="skills-title"
    >
      {/* Fondo decorativo */}
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] left-10 top-0 hidden md:block"
        aria-hidden="true"
      />
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
        aria-hidden="true"
      />

      {/* Título personalizado */}
      <CustomTitle title="Mis habilidades" id="skills-title" />

      {/* Contenedor de habilidades (grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 p-6 md:p-12 text-white mt-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <SkillCircle
              skill={skill.skill}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}
