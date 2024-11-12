import StackIcons from "./StackIcons";

const SkillsContainer = ({ skills }: { skills: string[] }) => (
    <div className="grid grid-cols-3 md:grid-cols-6  sm:grid-rows-1 gap-1">
        {skills.map((text, index) => (<StackIcons text={text} index={index} />))}
    </div>
);
export default SkillsContainer;