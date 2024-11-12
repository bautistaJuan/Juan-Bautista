import frontend from "../assets/icons/developer.png";
import designer from "../assets/icons/design.png";
import starts1 from "../assets/icons/Vector-1.svg";
import bleach from "../assets/portfolio/bleach-appp.png";
import chat from "../assets/portfolio/chat-app.jpg";
import ppt from "../assets/portfolio/ppt.jpg";
import { Skills, Service, Project } from "../components/types/types.ts";

const service: Service[] = [
  {
    title: "Diseño web",
    img: designer,
    description:
      "Soy diseñador web, especializado en crear experiencias visuales únicas y memorables. Me enfoco en transformar conceptos en interfaces intuitivas, usando principios de diseño UX/UI y herramientas modernas para crear sitios que no solo impacten visualmente, sino que también sean fáciles de usar.",
    price: "$25",
    starts: [starts1, starts1, starts1, starts1],
  },
  {
    title: "Desarrollo web",
    img: frontend,
    description:
      "Soy desarrollador web, especializado en crear aplicaciones modernas y funcionales. Me enfoco en transformar diseños en experiencias digitales fluidas, usando React.js y tecnologías modernas para construir soluciones que no solo se vean bien, sino que funcionen impecablemente.",
    price: "$35",
    starts: [starts1, starts1, starts1, starts1, starts1],
  },
];
const projects: Project[] = [
  {
    title: "Bleach: Thousand Year Blood War",
    img: bleach,
    description:
      "Desarrollé una SPA en React y TypeScript, traduciendo contenido para más de 50 personajes de anime. La aplicación incluye animaciones fluidas con Framer Motion para mejorar la experiencia de usuario, y un diseño responsive con TailwindCSS adaptable a dispositivos móviles, tablets y escritorio. Optimicé el rendimiento usando lazy loading y creé un sistema de componentes reutilizables que simplifica la gestión y el mantenimiento del código. Además, incorporé traducciones al español para hacer el contenido accesible a una audiencia hispanohablante.",
    stack: ["React", "TypeScript", "Tailwind", "CSS", "Framer Motion"],
    link: "https://bleach-personajes.vercel.app/",
  },
  {
    title: "Chat App | Firebase",
    img: chat,
    description:
      "Desarrollé una webapp de registro optimizada con TypeScript y Web Components, simplificando el onboarding a solo dos campos requeridos. Implementé autenticación avanzada, reduciendo en un 90% los registros incorrectos, y diseñé una arquitectura de base de datos en Firestore y Firebase RealTime para almacenamiento y actualizaciones en tiempo real. También creé una API RESTful para la comunicación entre frontend y Firebase, y configuré un pipeline de CI/CD en Vercel para despliegues automáticos. Además, integré validación de correos electrónicos en tiempo real, mejorando la precisión de los datos.",
    stack: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "Web Components",
      "Firestore",
      "RESTful API",
      "Node.js",
      "Express.js",
    ],
    link: "https://app-chat-topaz.vercel.app/",
  },
  {
    title: "Juego: Piedra Papel Tijera",
    img: ppt,
    description:
      "Desarrollé una SPA del clásico juego de piedra, papel o tijera con JavaScript, HTML5 y CSS. La aplicación permite jugar contra la computadora en una experiencia interactiva con pantallas de inicio, juego y resultados. Implementé un manejador de estados y un router personalizado para facilitar la navegación entre vistas y el control de flujo del juego. La app utiliza Custom Elements para una estructura modular y un diseño responsive que asegura una experiencia óptima en dispositivos móviles y de escritorio.",
    stack: [
      "TypeScript",
      "HTML5",
      "DOM",
      "CSS3",
      "Web Components",
      "State Managment",
      "Router",
    ],
    link: "https://ppt-dwf.vercel.app/",
  },
];

const skills: Skills = {
  tecnicas: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Framer Motion",
  ],
  blandas: [
    "Pensamiento analítico",
    "Gestión de proyectos",
    "Responsabilidad",
    "Flexibilidad",
    "Escucha activa",
    "Atención al detalle",
  ],
  tools: ["Git/GitHub", "Figma", "Bash", "NPM", "Vite"],
};

export { service, projects, skills };
