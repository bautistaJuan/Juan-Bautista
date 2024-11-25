import StackIcons from "../StackIcons/StackIcons";

const PortfolioCard = ({ img, title, description, stack, index, link }: { img: string, title: string, description: string, stack: string[], index: number, link: string }) => {
    return (
        <div className="border text-white rounded-xl overflow-auto gap-1 sm:flex w-full  mt-4  mx-auto" key={index}>
            <a href={link} className="lg:w-[22rem] relative">
                <img className="w-full max-w-lg h-full object-cover" src={img} alt={title} />
                <span className="text-[2.2rem] absolute bottom-0 left-4">👁️</span>
            </a>
            <div className="flex flex-col flex-grow  p-3 lg:w-[80%] sm:w-[100%] h-full">
                <h2 className="text-[2rem] text-stroke text-transparent">{title}</h2>
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
