import avatar from "../../assets/icons/avataaars.svg";

const User = () => {
    return (
        <div className="text-white mb-5 flex flex-col items-center">
            <svg className="w-full h-auto" viewBox="0 0 500 120">
                <path id="curveTop" d="M 50 150 Q 250 50 450 150" fill="transparent" />
                <text width="100%" fill="white">
                    <textPath href="#curveTop" startOffset="50%" textAnchor="middle" className="font-bold  text-[3rem]">
                        Juan Vega
                    </textPath>
                </text>
            </svg>
            <img src={avatar} alt="avatar" className="w-60 h-60 rounded-full border" />
            <svg className="w-full h-auto" viewBox="0 55 500 100">
                <path id="curveBottom" d="M 50 50 Q 250 150 450 50" fill="transparent" />
                <text width="100%" fill="white">
                    <textPath href="#curveBottom" startOffset="50%" textAnchor="middle" className="font-bold text-[2rem]">
                        Frontend Developer
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default User;
