import User from "./User";
import Contact from "../utils/Contact.tsx";
import Title2 from "../Titles/Title2.tsx";
const About = () => {
    return (
        <div className="lg:max-w-lg w-full sm:m-auto lg:mt-10 lg:p-4">
            <User />
            <div className="lg:w-full text-justify text-white">
                <Title2 text={"Sobre mí"} />
                <p>
                    Soy Desarrollador Front-End en Buenos Aires, AR.
                    Tengo una gran pasión por los efectos de interfaz de usuario, animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
                </p>
                <p>
                    ¿Listo para llevar tu proyecto web al siguiente nivel? Construyamos algo increíble juntos. ¡Contáctame hoy mismo!
                </p>
            </div>
            <div className="hidden lg:block pt-4">
                <Contact />
            </div>
        </div>
    )
}
export default About;
