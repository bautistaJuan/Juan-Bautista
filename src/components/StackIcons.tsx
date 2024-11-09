import React from "react";

type Stack = string[];
interface StackIconsProps {
    stack: Stack;
}

const StackIcons: React.FC<StackIconsProps> = ({ stack }) => {
    return (
        <>
            {stack.map((icon, index) => (
                <p className="border border-[#E4E5E7] bg-[#222325] text-white h-[2.3rem] text-[.9rem] leading-none rounded-md flex flex-col justify-center items-center text-center" key={index}>
                    {icon}
                </p>
            ))}
        </>
    );
}

export default StackIcons;