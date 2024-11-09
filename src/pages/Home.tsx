import About from "../components/About/About.tsx";
import Title from "../components/Title.tsx";
import ServicesCard from "../components/ServicesCard.tsx";
import Portofio from "../components/Portfolio/Portofio.tsx";
import { service } from "../components/CardsContents.ts"
const Home = () => {
    return (
        <div className="sm:w-[90%] m-auto">
            <div className="lg:hidden">
                <About />
            </div>
            <div className="mt-9 mb-9">
                <Title text={"Servicios"} />
                <section className="flex flex-col gap-4 border-green-700  ">
                    {service.map((item, index) => <ServicesCard service={item} key={index} />)}
                </section>
            </div>
            <Title text={"Portfolio"} />
            <Portofio />
        </div>
    )
}

export default Home