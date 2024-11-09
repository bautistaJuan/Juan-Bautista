import { Service } from "./CardsContents"

const ServicesCard = ({ service, key }: { service: Service, key: number }) => {
    return (
        <div className="border rounded-xl overflow-auto gap-1 sm:flex w-full ">
            <img className="w-full h-[12rem]" src={service.img} alt={service.title} />
            <div className="mt-1 flex flex-col justify-between p-1" key={key}>
                <p className="flex flex-grow">
                    {service.description}
                </p>
                <div className="flex mt-2 mb-2">
                    {service.starts.map((img: string) => <img className="h-[.9rem]" src={img} alt="Services Starts" />)}
                </div>
                <b className="text-[.9rem]"> A partir de {service.price}</b>
            </div>
        </div>
    )
}
export default ServicesCard

