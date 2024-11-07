import React from "react";

type Stack = string[];
interface StackIconsProps {
    stack: Stack;
}

const StackIcons: React.FC<StackIconsProps> = ({ stack }) => {
    return (
        <>
            {stack.map((icon, index) => (
                <b className="border border-[#E4E5E7] h-[3rem] text-[.9rem] text-[#222325] sm:text-[1.2rem]  rounded-full flex flex-col justify-center items-center text-center" key={index}>
                    {icon}
                </b>
            ))}
        </>
    );
}

export default StackIcons;