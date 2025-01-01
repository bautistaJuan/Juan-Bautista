import ContactIcon from "./ContactIcon";
import User from "./User";
const About = () => {
    return (
        <div className="w-full sm:m-auto">
            <User />
            <p className="text-justify  text-[1.1rem] sm:text-[1.5rem] text-white">
                Soy desarrollador web full-stack con experiencia en el desarrollo de aplicaciones web modernas y funcionales.
            </p>
            <p className="text-justify text-[1.1rem]  sm:text-[1.5rem] text-white">
                Actualmente curso la carrera de Desarrollo Web Full-Stack en  <a href="https://apx.school" className="text-yellow-500 border-b">apx.school</a> y complemento mis estudios con proyectos freelance, donde brindo soluciones adaptadas a las necesidades de los clientes.
            </p>
            <p className="text-justify text-[1.1rem]  sm:text-[1.5rem] text-white">
                Me especializo en Javascript, React, Node.js, Express, Firebase, HTML, CSS, TailwindCSS, Git y GitHub.
            </p>
            <ContactIcon />
        </div>
    )
}
export default About;
