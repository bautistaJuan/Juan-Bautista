import frontend from "../../assets/services/frontend-card.png";
import designer from "../../assets/services/designer.png";
import starts1 from "../../assets/icons/Vector-1.svg";
import bleach from "../../assets/portfolio/bleach_dektop.png";
import chat from "../../assets/portfolio/chat-app.png";
import ppt from "../../assets/portfolio/ppt.png";
import todoapp from "../../assets/portfolio/tasks.png";
import { Skills, Service, Project } from "../types/types.ts";

const service: Service[] = [
  {
    title: "Diseño web",
    img: designer,
    description:
      "Transformo visiones en realidades digitales cautivadoras. Como diseñador web experto, no solo creo sitios; esculpo experiencias visuales que dejan huella. Mi enfoque fusiona la estética con la funcionalidad, utilizando principios avanzados de UX/UI y las últimas herramientas del diseño digital. El resultado: interfaces intuitivas que no solo deslumbran a primera vista, sino que también guían a los usuarios en un viaje fluido y memorable a través de tu marca. Conmigo, tu presencia en línea no solo será vista, será recordada y admirada",
    price: "$25",
    starts: [starts1, starts1, starts1, starts1],
  },
  {
    title: "Desarrollo web",
    img: frontend,
    description:
      "Doy vida a tus ideas en el mundo digital. Como desarrollador web especializado, no me limito a escribir código; construyo experiencias interactivas que cautivan y funcionan a la perfección. Domino React.js y las tecnologías de vanguardia para crear aplicaciones web que no solo cumplen, sino que superan expectativas. Mi expertise transforma diseños estáticos en interfaces dinámicas y responsivas, garantizando que tu sitio no solo se vea impresionante, sino que también ofrezca un rendimiento excepcional en cualquier dispositivo. Conmigo, tu visión se convierte en una realidad digital robusta y escalable.",
    price: "$35",
    starts: [starts1, starts1, starts1, starts1, starts1],
  },
];
const projects: Project[] = [
  {
    title: "Bleach: Thousand Year Blood War",
    img: bleach,
    description:
      "Aplicación web para vizualizar información de los personajes de la serie de anime Bleach. La aplicación incluye animaciones fluidas con Framer Motion para mejorar la experiencia de usuario, y un diseño responsive con TailwindCSS adaptable a dispositivos móviles, tablets y escritorio.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    link: "https://bleach-personajes.vercel.app/",
  },
  {
    title: "Aplicaión de mensajes con Firebase",
    img: chat,
    description:
      "Aplicación de chat en tiempo real con Firebase. La aplicación permite a los usuarios registrarse, iniciar sesión, crear salas de chat, enviar mensajes y ver mensajes anteriores. Utilicé Firebase para almacenar datos de usuarios y mensajes, y Firebase Authentication para autenticar usuarios. La aplicación es completamente responsive y se puede utilizar en cualquier dispositivo.",
    stack: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "Web Components",
      "Firestore",
      "API RESTful",
      "Node.js",
      "Express.js",
    ],
    link: "https://app-chat-topaz.vercel.app/",
  },
  {
    title: "Aplicacion Tareas con Firebase",
    img: todoapp,
    description:
      "Aplicación de lista de tareas con Firebase. La aplicación permite a los usuarios registrarse, iniciar sesión, crear tareas, marcar tareas como completadas y eliminar tareas. Utilicé Firebase para almacenar datos de usuarios y tareas, y Firebase Authentication para autenticar usuarios. La aplicación es completamente responsive y se puede utilizar en cualquier dispositivo.",
    stack: [
      "JavaScript",
      "HTML5",
      "React",
      "react-dom",
      "react-icons",
      "Tailwind CSS",
      "Context API",
      "Firebase",
    ],
    link: "https://my-todo-list-with-firebase.vercel.app/",
  },
  {
    title: "Juego: Piedra Papel Tijera",
    img: ppt,
    description:
      "Aplicación web del juego de piedra, papel o tijera. La aplicación permite a los usuarios jugar contra la computadora y ver el historial de partidas. Utilicé TypeScript para el desarrollo y Web Components para crear la interfaz de usuario. La aplicación es completamente responsive y se puede utilizar en cualquier dispositivo.",
    stack: [
      "TypeScript",
      "HTML5",
      "DOM",
      "CSS3",
      "Web Components",
      "State Managment",
      "Routing",
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
