import User from "./User";
import Contact from "../utils/Contact.tsx";
const About = () => {
    return (
        <div className="w-full sm:m-auto">
            <User />
            <div className="text-justify text-white">
                <p>
                    De operario a desarrollador frontend: mi viaje de transformación profesional comenzó cuando comprendí que mis habilidades creativas merecían más que una línea de producción.
                    Después de 3 años en una Pyme, decidí estudiar programación, desarrollo web, para mejorar mi estilo de vida y poder trabajar de lo que me gusta, es por eso que sigo aprendiendo y capacitandome para poder algún día lograr este sueño 💙                </p>
            </div>
            <div className="flex  justify-end">
                <Contact />
            </div>
        </div>
    )
}
export default About;
