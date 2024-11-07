import frontend from "../../assets/services/frontend-card.png";
import designer from "../../assets/services/designer.png";
import starts1 from "../../assets/icons/Vector-1.svg";
type Service = {
    title: string;
    img: string;
    description: string;
    price: string;
    starts: string[] | string;
};
const service: Service[] = [{
    title: "Image Frontend Developer Service",
    img: frontend,
    description: "Soy un desarrollador Frontend especializado en React.js y TypeScript, con sólidos conocimientos en arquitectura de software y mejores prácticas de desarrollo. Comprometido con la entrega de código limpio y soluciones escalables.",
    price: "$25",
    starts: [starts1, starts1, starts1, starts1, starts1]
},{
    title: "Image Web Designer Service",
    img: designer,
    description: "Soy un diseñador web especializado en la creación de interfaces modernas y responsivas, con dominio de Figma para el diseño UX/UI y sólidos conocimientos en HTML y CSS para implementaciones precisas. Enfocado en desarrollar experiencias de usuario intuitivas y visualmente atractivas que se adaptan a todos los dispositivos.",
    price: "$25",
    starts: [starts1, starts1, starts1, ]
}]
const ServicesCard = () => {
    return (
        <>
            {service.map((item: Service, index: number)=> (
                <div key={index}>
                    <img src={item.img} alt={item.title}/>
                    <p>
                        {item.description}
                    </p>
                    <div className="flex">
                        {item.starts.map((img: string)=><img src={img} alt="Services Starts"/>)}
                    </div>
                    <b> A partir de {item.price}</b>
                </div>
            ))}
        </>
    )
}

export default ServicesCard