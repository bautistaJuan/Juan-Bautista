import About from "../../components/About/About.tsx";
import Title from "../../components/Title/Title.tsx";
import PortfolioCard from "../../components/Portfolio/PortfolioCard.tsx";
import SkillSection from "../../components/Skills/SkillSection.tsx"
import { projects } from "../../components/utils/CardsContents.ts"
import ContactIcon from "../../components/About/ContactIcon.tsx";

const Home = () => {
    return (
        <div className="sm:w-[97%] m-auto">
            <About />
            <div className="flex flex-col gap-4 mb-6">
                <SkillSection />
            </div>
            <Title text={"Proyectos"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
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
            <ContactIcon />
            <footer className="w-full text-center p-4 mt-12"><span className="text-white sm:text-[1.6rem]">By <b className="text-orange-600"> 🧑‍💻Juan.</b></span></footer>
        </div>
    )
}

export default Home