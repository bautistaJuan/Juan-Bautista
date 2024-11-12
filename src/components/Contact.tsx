import whatsapp from "../assets/icons/WhatsApp.png";
import linkedin from "../assets/icons/LinkedIn.png";
const Contact = () => {
    return (
        <>
            <a href="https://wa.me/+5491165557489?text=!Hola%20Juan!" className="flex justify-center items-center font-semibold tracking-widest h-[3rem] border  bg-black  text-white rounded-md hover:bg-green-600 cursor-pointer mb-2">
                <img src={whatsapp} alt="" aria-hidden="true" className="w-6 h-6 ml-3 mr-2" />
                <span>Escríbeme por WhatsApp</span>
            </a>

            <a href="https://www.linkedin.com/in/juanbautista-dev/" className="flex justify-center items-center font-semibold tracking-widest h-[3rem] border bg-[#0a66c2] text-white rounded-md hover:bg-[#3198ff] cursor-pointer">
                <img src={linkedin} alt="" aria-hidden="true" className="w-6 h-6 ml-3 mr-2" />
                <span>Conectemos en LinkedIn</span>
            </a>
        </>
    )
}

export default Contact