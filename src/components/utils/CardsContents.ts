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
    title: "Todoo App | Firebase",
    img: todoapp,
    description:
      "Desarrolle una aplicacion de tareas que permite a los usuarios registrarse, iniciar sesión, agregar tareas, marcarlas como completadas y eliminarlas. Utilice Firebase para almacenar datos de usuarios y tareas, y Firebase Authentication para autenticar usuarios. Es completamente responsive y se puede utilizar en cualquier dispositivo. Esta aplicación es una solución completa para gestionar tareas de manera eficiente y segura. La aplicación esta desplegada en Vercel y se puede acceder desde cualquier dispositivo.",
    stack: [
      "JavaScript",
      "HTML5",
      "React",
      "react-dom",
      "react-icons",
      "Taiwnd CSS",
      "Context API",
      "Firebase",
    ],
    link: "https://my-todo-list-with-firebase.vercel.app/",
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
