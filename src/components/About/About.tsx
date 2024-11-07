import StackIcons from "../StackIcons";
import User from "./User";
import Title from "../Title.tsx";
import {ReactNode} from "react";

const tecnicas = [
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "Figma",
    "Vite",
    "GitHub"
];
const blandas = [
    "Pensamiento analítico",
    "Gestión de proyectos",
    "Responsabilidad",
    "Flexibilidad",
    "Escucha activa",
    "Atención al detalle"
];
const tools: string[] = ["Git/GitHub", "Figma", "Bash", "NPM", "Vite"];

const About = () => {
    const StackIconsContainer = ({children}: {children: ReactNode })=> (
        <div className="grid grid-cols-3 md:grid-cols-3  sm:grid-rows-1 gap-1">{children}</div>
    );
    return (
        <div className=" lg:h-full lg:p-4">
            <User/>
            <div className=" py-4 lg:w-full">
                <Title text={"Sobre mí"} />
                <p className="text-justify sm:text-[1.2rem]">
                    Soy Juan, desarrollador web con sólidos conocimientos en React/JavaScript. Me especializo en crear aplicaciones web eficientes y escalables, combinando código limpio con interfaces intuitivas. Mi enfoque se centra en desarrollar soluciones técnicas que cumplan tanto con los objetivos del negocio como con las necesidades del usuario final.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <section>
                   <Title text={"Habilidades tecnicas"}/>
                    <StackIconsContainer children={<StackIcons stack={tecnicas} />} />
                </section>
                <section>
                   <Title text={"Habilidades blandas"}/>
                    <StackIconsContainer children={<StackIcons stack={blandas} />} />
                </section>
                <section>
                    <Title text={"Herramientas"}/>
                    <StackIconsContainer children={<StackIcons stack={tools} />} />
                </section>
            </div>
        </div>
    )
}
export default About;
