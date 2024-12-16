import About from "../../components/About/About.tsx";
import Title2 from "../../components/Titles/Title2.tsx";
import PortfolioCard from "../../components/Portfolio/PortfolioCard.tsx";
import SkillSection from "../../components/Skills/SkillSection.tsx"
import { projects } from "../../components/utils/CardsContents.ts"

const Home = () => {
    return (
        <div className="sm:w-[97%] m-auto">
            <About />
            <div className="flex flex-col gap-4">
                <SkillSection />
            </div>
            {/* <div className="my-9 ">
                <Title2 text={"¿Que hago?"} />
                <section className="flex flex-col gap-4" key={2}>
                    {service.map((item, index) => <ServicesCard service={item} index={index} />)}
                </section>
            </div> */}
            <div className="my-9">
                <Title2 text={"Portfolio"} />
                {projects && projects.length > 0 ? (
                    projects.map((item, index) => (
                        <PortfolioCard
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            stack={item.stack}
                            index={index}
                            link={item.link}
                            key={index}
                        />
                    ))
                ) : (
                    <p>No hay proyectos disponibles.</p>
                )}
            </div>
            <footer className="w-full text-center p-4"><span className="text-white sm:text-[1.6rem]">By <b className="text-orange-600"> 🧑‍💻Juan.</b></span></footer>
        </div>
    )
}

export default Home