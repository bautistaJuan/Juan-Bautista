import whatsapp from "../../assets/icons/WhatsApp.png";
import linkedin from "../../assets/icons/LinkedIn.png";

const Contact = () => {
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
        <>
            {contacts.map(contact => (
                <a
                    key={contact.id}
                    href={contact.url}
                    className={`flex justify-center items-center font-semibold tracking-widest h-[3rem] text-white rounded-md ${contact.bgColor} cursor-pointer mb-2`}
                >
                    <img src={contact.imgSrc} alt={contact.imgAlt} aria-hidden="true" className="w-6 h-6 ml-3 mr-2" />
                    <span>{contact.text}</span>
                </a>
            ))}
        </>
    );
}

export default Contact;