import StackIcons from "../Skills/StackIcons";

const PortfolioCard = ({ img, title, description, stack, index, link }: { img: string, title: string, description: string, stack: string[], index: number, link: string }) => {
    return (
        <div className="border rounded-xl overflow-auto gap-1 sm:flex w-full mt-4" key={index}>
            <a href={link} className="lg:w-[22rem]">
                <img className="w-full h-full object-cover" src={img} alt={title} />
            </a>
            <div className="flex flex-col flex-grow  p-3 lg:w-[80%] sm:w-[100%] h-full">
                <h2 className="text-[2rem] -tracking-tight text-orange-500 font-semibold">{title}</h2>
                <p className="text-justify mt-1">
                    {description}
                </p>
                <div className="mt-auto grid grid-cols-3 lg:grid-cols-4 gap-2 p-1 w-full">
                    {stack.map((t, i) => (<StackIcons text={t} index={i} key={i} />))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
