import User from "./User";
import Contact from "../Contact.tsx";
import Title2 from "../Titles/Title2.tsx";
const About = () => {
    return (
        <div className="lg:w-[97%]  sm:m-auto lg:mt-10 lg:p-4">
            <User />
            <div className="lg:w-full">
                <Title2 text={"Sobre mí"} />
                <p className="text-justify">
                    Soy Juan, desarrollador web con sólidos conocimientos en React/JavaScript. Me especializo en crear aplicaciones web eficientes y escalables, combinando código limpio con interfaces intuitivas. Mi enfoque se centra en desarrollar soluciones técnicas que cumplan tanto con los objetivos del negocio como con las necesidades del usuario final.
                </p>
            </div>
            <div className="hidden lg:block pt-4">
                <Contact />
            </div>
        </div>
    )
}
export default About;
