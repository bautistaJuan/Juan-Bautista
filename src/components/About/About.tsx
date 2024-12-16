import User from "./User";
import Contact from "../utils/Contact.tsx";
const About = () => {
    return (
        <div className="w-full sm:m-auto">
            <User />
            <div className="text-justify text-white">
                <p>
                    Soy Desarrollador Front-End en Buenos Aires, AR.
                    Tengo una gran pasión por los efectos de interfaz de usuario, animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
                </p>
                <p>
                    ¿Listo para llevar tu proyecto web al siguiente nivel? Construyamos algo increíble juntos. ¡Contáctame hoy mismo!
                </p>
            </div>
            <div className="flex  justify-end">
                <Contact />
            </div>
        </div>
    )
}
export default About;
