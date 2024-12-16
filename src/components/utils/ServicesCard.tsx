import { Service } from "../types/types"

const ServicesCard = ({ service, index }: { service: Service, index: number }) => {
    return (
        <div key={index} className="">
            <img className="w-[25rem]  rounded-t-md" src={service.img} alt={service.title} />
            <div className="flex flex-col p-2">
                <h2 className="text-[2rem] text-white font-bold  shadow-orange-600">{service.title}</h2>
                <p className="flex flex-grow text-justify text-[#d6d9ded8] ">
                    {service.description}
                </p>

            </div>
        </div>
    )
}
export default ServicesCard

