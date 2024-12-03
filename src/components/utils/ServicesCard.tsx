import { Service } from "../types/types"

const ServicesCard = ({ service, index }: { service: Service, index: number }) => {
    return (
        <div key={index} className="border border-[#d6d9de5d] rounded-xl overflow-auto gap-1 sm:flex w-full lg:pr-2 ">
            <img className="max-w-sm" src={service.img} alt={service.title} />
            <div className="flex flex-col p-2">
                <h2 className="text-[2rem] lg:text-[3rem] text-white font-bold  shadow-orange-600">{service.title}</h2>
                <p className="flex flex-grow text-justify text-[#d6d9ded8] 2xl:text-[1.4rem]">
                    {service.description}
                </p>

            </div>
        </div>
    )
}
export default ServicesCard

