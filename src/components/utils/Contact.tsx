import whatsapp from "../../assets/icons/WhatsApp.png";
import linkedin from "../../assets/icons/LinkedIn.png";
import { useState } from "react";

const Contact = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    const contacts = [
        {
            id: 1,
            url: "https://wa.me/+5491165557489?text=!Hola%20Juan!",
            text: "Escríbeme por WhatsApp",
            imgSrc: whatsapp,
            imgAlt: "WhatsApp Icon",
            bgColor: "bg-green-600"
        },
        {
            id: 2,
            url: "https://www.linkedin.com/in/juanbautista-dev/",
            text: "Conectemos en LinkedIn",
            imgSrc: linkedin,
            imgAlt: "LinkedIn Icon",
            bgColor: "bg-[#3198ff]"
        }
    ];

    return (
        <div className="absolute right-1 bottom-0">
            {isDisplay ?
                contacts.map(contact => (
                    <a
                        key={contact.id}
                        href={contact.url}
                        className={`flex justify-center  items-center h-14 w-14 text-white rounded-full ${contact.bgColor} cursor-pointer mb-2`}
                    >
                        <img src={contact.imgSrc} alt={contact.imgAlt} aria-hidden="true" />
                        {/* <span>{contact.text}</span> */}
                    </a>
                ))
                : <button
                    onClick={() => setIsDisplay(!isDisplay)}
                    className="text-[3rem] absolute right-1 bottom-4 font-bold z-50"
                    style={{
                        background: "linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    +
                </button>}
        </div>
    );
}

export default Contact;