// import { useState } from "react";
import StackIcons from "../StackIcons/StackIcons";

const PortfolioCard = ({ img, title, description, stack, index, link }: { img: string, title: string, description: string, stack: string[], index: number, link: string }) => {
    return (
        <div className="border text-white rounded-xl  mt-4 pb-3" key={index}>
            <a href={link} className="relative">
                <img className="object-center rounded-t-xl" src={img} alt={title} />
                <span className="text-[2.2rem] absolute bottom-0 right-1">👁️</span>
            </a>
            <div className="flex flex-col flex-grow p-4 w-[100%]">
                <h2 className="text-2xl pb-2 text-white text-transparent">
                    {title}
                </h2>
                <p className={`hidden transition-all text-justify mt-1 text-sm 2xl:text-lg`}>
                    {description}
                </p>
                <div className="mt-1 grid grid-cols-3 gap-1">
                    {stack.map((t, i) => (<StackIcons text={t} key={i} />))}
                </div>
            </div>

        </div>
    );
};

export default PortfolioCard;