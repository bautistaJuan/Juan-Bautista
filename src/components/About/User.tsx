import user from "../../assets/icons/user.png"
import location from "../../assets/icons/loaction.png"
const User = () => {
    return (
        <>
            <div className="flex">
                <div className="h-[4rem] w-[5rem] rounded-full overflow-hidden flex-grow">
                    <img className="w-full h-full" src={user} alt="Juan Vega" />
                </div>
                <div className="tracking-[.4px] w-full pl-2">
                    <h2 className="font-black text-[1.2rem]">Juan Vega</h2>
                    <h3 className="font-semibold text-[.9rem]">Frontend Developer</h3>
                    <div className="flex gap-1 mt-2 items-center text-[.9rem] ">
                        <img className="w-4" src={location} alt="Location Icon" />
                        <span>Argentina, Buenos Aires.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;