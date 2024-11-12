import { Service } from "../components/types/types"

const ServicesCard = ({ service, index }: { service: Service, index: number }) => {
    return (
        <div key={index} className="border rounded-xl overflow-auto gap-1 sm:flex w-full lg:pr-2 ">
            <img className="w-full lg:w-[35rem] h-[20rem] lg:h-[13rem]" src={service.img} alt={service.title} />
            <div className="flex flex-col">
                <h2 className="text-[2rem] text-stroke text-transparent ">{service.title}</h2>
                <p className="flex flex-grow text-justify">
                    {service.description}
                </p>
                <div className="flex mb-2 ">
                    {service.starts.map((img: string, index: number) => <img className="h-[.9rem] sm:h-[1.2rem]" src={img} alt="Services Starts" key={index} />)}
                </div>
                <b className="text-[.9rem] sm:text-[1.1rem] text-gray-500">{service.price}</b>
            </div>
        </div>
    )
}
export default ServicesCard

