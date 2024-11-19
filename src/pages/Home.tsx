import About from "../components/About/About.tsx";
import Title from "../components/Titles/Title.tsx";
import Title2 from "../components/Titles/Title2.tsx";
import ServicesCard from "../components/utils/ServicesCard.tsx";
import PortfolioCard from "../components/Portfolio/PortfolioCard.tsx";
import { service, projects, skills } from "../components/utils/CardsContents.ts"
import SkillsContainer from "../components/StackIcons/SkillsContainer.tsx";
import Contact from "../components/utils/Contact.tsx";


const Home = () => {
    const SkillSection = () => {
        return (
            <>
                <section>
                    <Title text={"Habilidades tecnicas"} />
                    <SkillsContainer skills={skills.tecnicas} />
                </section>
                <section>
                    <Title text={"Habilidades blandas"} />
                    <SkillsContainer skills={skills.blandas} />
                </section>
                <section>
                    <Title text={"Herramientas"} />
                    <div className="grid grid-cols-3 md:grid-cols-6  sm:grid-rows-1 gap-1"></div>
                    <SkillsContainer skills={skills.tools} />
                </section>
            </>
        );
    }
    return (
        <div className="sm:w-[97%] m-auto">
            <div className="lg:hidden">
                <About />
            </div>
            <div className="flex flex-col gap-4 lg:hidden">
                <SkillSection />
            </div>
            <div className="my-9 ">
                <Title2 text={"Servicios"} />
                <section className="flex flex-col gap-4" key={2}>
                    {service.map((item, index) => <ServicesCard service={item} index={index} />)}
                </section>
            </div>
            <div className="hidden lg:flex flex-col gap-4 ">
                <Title2 text={"Skills"} />
                <SkillSection />
            </div>
            <div className="lg:hidden my-8">
                <Contact />
            </div>
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
        </div>
    )
}

export default Home