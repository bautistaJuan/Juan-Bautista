import user from "../../assets/icons/user.png"
import location from "../../assets/icons/loaction.png"
const User = () => {
    return (
        <>
            <div className="flex">
                <div className="max-w-[7rem] sm:max-w-[8rem] rounded-full overflow-hidden flex-grow">
                    <img className="w-full h-full" src={user} alt="Juan Vega" />
                </div>
                <div className="tracking-[.4px] w-full ml-2">
                    <h2 className="font-black text-[1.6rem] sm:text-[1.8rem]">Juan Vega</h2>
                    <h3 className="font-semibold text-[1.1rem] sm:text-[1.2rem]">Frontend Developer</h3>
                    <div className="flex gap-1 mt-2 items-center text-[1.1rem] ">
                        <img className="w-5" src={location} alt="Location Icon" />
                        <span>Argentina, Buenos Aires.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;