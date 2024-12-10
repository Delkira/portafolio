import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger } from "framer-motion";

const Path = ({ className, ...props }) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    className={className}
    {...props}
  />
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const navRef = useRef(null); // Referencia al contenedor del menú

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú si se hace clic fuera de él
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const NavItems = [
    { id: "inicio", text: "Quien Soy" },
    { id: "habilidades", text: "Mis Habilidades" },
    { id: "proyecto", text: "Mis Proyectos" },
    { id: "contacto", text: "Contactame" },
  ];

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <ul className="hidden md:flex gap-8">
          {NavItems.map((item) => (
            <li key={item.id} className="text-white text-lg font-semibold">
              <a
                href={`#${item.id}`}
                className="hover:text-secondary transition-colors"
                onClick={() => handleNavItemClick(item.id)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div ref={scope} className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center"
          >
            <svg width={23} height={18} viewBox="0 0 23 18">
              <Path d="M 2 2.5 L 20 2.5" className="top" />
              <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
              <Path d="M 2 16.346 L 20 16.346" className="bottom" />
            </svg>
          </button>
          <nav
            ref={navRef} // Aplica la referencia al contenedor del menú
            className={`fixed top-0 left-0 h-full w-72 z-40 flex items-center bg-gradient-to-br from-primary to-secondary transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
          >
            <ul className="flex flex-col p-6">
              {NavItems.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-2xl font-bold mt-10"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavItemClick(item.id)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-white">Mi portafolio</h1>
      </div>
    </div>
    </>
  );
}
