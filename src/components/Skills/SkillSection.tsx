import Title from "../../components/Titles/Title.tsx";
import { skills } from "../../components/utils/CardsContents.ts"
import SkillsContainer from "../../components/StackIcons/SkillsContainer.tsx";

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
                <div className="grid grid-cols-3 md:grid-cols-6  sm:grid-rows-1 gap-1"></div>
                <SkillsContainer skills={skills.tools} />
            </section>
        </>
    );
}

export default SkillSection