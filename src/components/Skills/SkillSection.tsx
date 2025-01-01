import Title from "../Title/Title.tsx";
import { skills } from "../../components/utils/CardsContents.ts"
import SkillsContainer from "../StackIcons/StackContainer.tsx";

const SkillSection = () => {
    return (
        <>
            <section>
                <Title text={"Habilidades tecnicas"} />
                <SkillsContainer skills={skills.tecnicas} />
            </section>
            <section>
                <Title text={"Habilidades blandas"} />
                <SkillsContainer skills={skills.blandas} />
            </section>
            <section>
                <Title text={"Herramientas"} />
                <SkillsContainer skills={skills.tools} />
            </section>
        </>
    );
}

export default SkillSection