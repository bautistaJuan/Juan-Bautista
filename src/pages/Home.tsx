import About from "../components/About/About.tsx";
import Title from "../components/Title.tsx";
import ServicesCard from "../components/Cards/ServicesCard.tsx";

const Home = () => {
    return (
        <>
            <div className="lg:hidden sm:w-[80%] m-auto">
                <About />
            </div>
            <div className="mt-9">
            <Title text={"Servicios"} />
             <ServicesCard />
            </div>
        </>
    )
}

export default Home