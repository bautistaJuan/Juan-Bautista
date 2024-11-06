import StackIcons from "../StackIcons";
import User from "./User"
const About = () => {
    return (
        <div className="h-[30rem] lg:h-full lg:p-4  border-black">
            <User />
            <div className="ml-2 py-4 lg:w-[90%]">
                <h4 className="font-bold text-[1.2rem]">Sobre mí</h4>
                <p className="text-justify ">
                    Soy Juan, desarrollador web con sólidos conocimientos en React/JavaScript. Me especializo en crear aplicaciones web eficientes y escalables, combinando código limpio con interfaces intuitivas. Mi enfoque se centra en desarrollar soluciones técnicas que cumplan tanto con los objetivos del negocio como con las necesidades del usuario final.
                </p>
            </div>
            <h5>Habilidades blandas</h5>
            <StackIcons />
        </div>
    )
}
export default About;
