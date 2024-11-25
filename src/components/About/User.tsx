import user from "../../assets/icons/user.png"
const User = () => {
    return (
        <>
            <div className="flex text-white">
                <div className="h-[5rem] sm:h-[6rem] sm:w-[7rem] w-[6rem] rounded-lg overflow-hidden flex-grow">
                    <img className="w-full h-full" src={user} alt="Juan Vega" />
                </div>
                <div className="tracking-[.4px] w-full pl-2">
                    <h2 className="font-bold text-[1.7rem]">Juan Vega</h2>
                    <h3 className="text-[.9rem]">Frontend Developer</h3>
                    <div className="flex gap-1 mt-2 items-center text-[.9rem] ">
                        <span>🌎</span>
                        <span>Buenos Aires, Argentina</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;