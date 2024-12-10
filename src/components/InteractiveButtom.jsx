import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CYCLE_PER_LETTER = 2; // Número de ciclos por letra para el efecto
const SHUFFLE_TIME = 50; // Tiempo entre cada cambio de letra
const CHARS = '!@#$%^&*(){}[]|,./?<>'; // Caracteres aleatorios para el efecto

export default function InteractiveButton({ text }) {
    return (
        <div className='flex justify-center items-center min-h-[200px] p-4'>
            <CustomButton text={text} />
        </div>
    );
}

const CustomButton = ({ text }) => {
    const intervalRef = useRef(null);
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    const scramble = () => {
        let pos = 0;
        intervalRef.current = setInterval(() => {
            const scrambled = text.split('').map((char, index) => {
                if (pos / CYCLE_PER_LETTER > index) {
                    return char; // Mantener las letras cuando se haya llegado a su posición
                }
                const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)]; // Seleccionar carácter aleatorio
                return randomChar;
            }).join('');
            setDisplayText(scrambled);
            pos++;
            if (pos >= text.length * CYCLE_PER_LETTER) {
                stopScramble(); // Detener la animación cuando todas las letras han sido alteradas
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current); // Detener el intervalo
        setDisplayText(text); // Restaurar el texto original
    };

    return (
        <>
        <motion.button
            whileTap={{ scale: 0.95 }} // Efecto de escala cuando se hace clic
            onMouseEnter={() => {
                setIsHovered(true); // Activa el hover
                scramble(); // Comienza a hacer el scramble del texto
            }}
            onMouseLeave={() => {
                setIsHovered(false); // Desactiva el hover
                stopScramble(); // Detiene el efecto de scramble
            }}
            aria-label={`Interactuar con ${text}`} // Mejora de accesibilidad
            className='relative group w-full px-8 py-4 text-lg font-bold text-white rounded-lg overflow-hidden bg-primary'
        >
            <span
                className={`absolute inset-0 w-full h-full bg-[#ff5c72] rounded-lg transform transition-transform duration-300 ease-out ${
                    isHovered ? 'scale-100' : 'scale-0'
                }`}
            ></span>
            <span className='relative z-10'>{displayText}</span>
        </motion.button>
        </>
    );
};
