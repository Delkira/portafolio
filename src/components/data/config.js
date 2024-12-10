const animationDuration = 2;

export const variants = {
    initial: {
        pathLength: 0, 
        strokeOpacity: 1, 
        fillOpacity: 0,
    },
    animate: {
        pathLength: 1,
        strokeOpacity: 0,
        fillOpacity: 1,
        transition: {
            duration: animationDuration,
            ease: "easeInOut",
            strokeOpacity: {
                delay: animationDuration * 0.2, 
            },
            fillOpacity: {
                delay: animationDuration * 0.10,
            },
        },
    },
};

//iconos
export const socialIcons=[
    {

        id: 1,
        path: "M12 0C5.372 0 0 5.372 0 12c0 5.285 3.438 9.795 8.207 11.387.6.111.827-.261.827-.583v-2.124c-3.338.726-4.04-1.607-4.04-1.607-.547-1.391-1.335-1.762-1.335-1.762-1.091-.743.083-.728.083-.728 1.206.085 1.838 1.274 1.838 1.274 1.07 1.835 2.808 1.302 3.492.998.108-.776.418-1.303.76-1.604-2.665-.305-5.465-1.33-5.465-5.94 0-1.312.468-2.383 1.235-3.221-.125-.305-.534-1.527.116-3.177 0 0 1.008-.323 3.309 1.235.96-.267 2-.399 3.035-.405 1.035.006 2.075.138 3.035.405 2.303-1.558 3.309-1.235 3.309-1.235.651 1.65.241 2.872.116 3.177.767.838 1.235 1.909 1.235 3.221 0 4.614-2.806 5.635-5.477 5.94.43.313.821.93.821 1.876v2.783c0 .325.23.697.832.583C20.563 21.795 24 17.285 24 12c0-6.628-5.372-12-12-12z",
        viewBox: "0 0 24 24",
        url:'https://github.com/'
    },
    {
        id: 2,
        path: "M22.38 10.47L20.07 2.36c-.12-.43-.5-.72-.94-.72-.46 0-.85.31-.97.75l-1.48 5.51H7.32L5.84 2.39c-.12-.44-.51-.75-.97-.75-.44 0-.82.29-.94.72L1.62 10.47c-.1.34.01.72.29.94l9.5 7.4c.36.28.87.28 1.23 0l9.5-7.4c.3-.23.4-.61.29-.94zM6.31 10.39l1.05-3.89 1.87 3.89H6.31zm11.37 0h-2.91l1.87-3.89 1.04 3.89zm-5.68 7.43l-7.01-5.45h3.2l2.44 5.09c.25.53.96.53 1.21 0l2.44-5.09h3.2l-7.01 5.45z",
        viewBox: "0 0 24 24",
        url:'https://gitlab.com/'
    },    
    {
        id: 5,
        path: "M20 0H4C2.89 0 2 .89 2 2v20c0 1.1.89 2 2 2h16c1.1 0 2-.89 2-2V2c0-1.1-.89-2-2-2zM7.5 17H5v-9h2.5v9zm-1.25-10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.75 10.5h-2.5v-4.5c0-1.17-.42-1.97-1.46-1.97-.8 0-1.29.54-1.5 1.07-.08.2-.1.48-.1.76v4.64h-2.5v-9h2.5v1.2c.64-1.17 1.81-1.99 3.28-1.99 2.4 0 4.22 1.6 4.22 4.5v5.3z",
        viewBox: "0 0 24 24",
        url:'https://linkedin.com'
    },    
]

//habilidades

export const skills =[
    {
        skill: "React",
        percentage: 30,
        icon: 'https://img.icons8.com/office/40/react.png'
    },
    {
        skill: "Node.js",
        percentage: 25,
        icon: 'https://img.icons8.com/fluency/40/node-js.png'
    },
    {
        skill: "Tailwindcss",
        percentage: 10,
        icon: 'https://img.icons8.com/color/40/tailwindcss.png'
    },
    {
        skill: "Figma",
        percentage: 45,
        icon: 'https://img.icons8.com/office/40/figma.png'
    },
    {
        skill: "HTML",
        percentage: 50,
        icon: 'https://img.icons8.com/office/40/html.png',
        description: "Markup language for creating web pages and web applications."
    },
    {
        skill: "CSS",
        percentage: 40,
        icon: 'https://img.icons8.com/office/40/css.png',
        description: "Stylesheet language for designing the look and feel of websites."
    },
]


//Proyectos
export const projects =[
    {
        id:1,
        title:'Proyecto 1',
        description:'Este proyecto se realizo con Html y Css',
        imageUrl:'/proyecto1.png'
    },
    {
        id:2,
        title:'Proyecto 2',
        description:'Este proyecto se realizo con react',
        imageUrl:'/proyecto2.png'
    },
    {
        id:3,
        title:'Proyecto 3',
        description:'Este proyecto se realizo con react + tailwind + vite ',
        imageUrl:'/proyecto3.png'
    },
]

//contacto
export const contactData = [
    {
        id: 1,
        title: 'DIRECCIÓN',
        description: 'Zona Alto Potosi',
        icon: 'https://img.icons8.com/ios-filled/50/ffffff/address--v1.png'
    },
    {
        id: 2,
        title: 'Número de teléfono',
        description: '78635534',
        icon: 'https://img.icons8.com/ios-filled/50/ffffff/phone.png'
    },
    {
        id: 3,
        title: 'Email',
        description: 'felixmamaniaguilar1@gmail.com',
        icon: 'https://img.icons8.com/pastel-glyph/50/ffffff/new-post--v1.png'
    }
  ];
  