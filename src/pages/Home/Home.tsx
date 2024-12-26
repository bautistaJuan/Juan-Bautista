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
            <Title2 text={"Portfolio"} />
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 gap-2">
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
            <footer className="w-full text-center p-4 mt-12"><span className="text-white sm:text-[1.6rem]">By <b className="text-orange-600"> 🧑‍💻Juan.</b></span></footer>
        </div>
    )
}

export default Home