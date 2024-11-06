import json from "../assets/text/es.json";
const StackIcons = () => {
    const Frontend = () => {
        return (
            <div>
                {json.skills.technicalSkills.frontend.map((item) => (
                    <span>{item}</span>
                ))}
            </div>
        )
    }

    return (
        <div>
            <Frontend />
        </div>
    )
}

export default StackIcons