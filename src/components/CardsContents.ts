import frontend from "../assets/services/frontend-card.png";
import starts1 from "../assets/icons/Vector-1.svg";
import designer from "../assets/services/designer.png";

export type Service = {
  title: string;
  img: string;
  description: string;
  price: string;
  starts: string[];
};
export type Project = {
  title: string;
  img: string;
  description: string;
  stack: string[];
};

const service: Service[] = [
  {
    title: "Image Web Designer Service",
    img: designer,
    description:
      "Me especializo en transformar ideas en experiencias visuales impactantes. Como diseñador web, creo interfaces elegantes y funcionales que conectan con tu audiencia desde el primer momento.",
    price: "$25",
    starts: [starts1, starts1, starts1, starts1],
  },
  {
    title: "Image Frontend Developer Service",
    img: frontend,
    description:
      "Me especializo en convertir diseños en aplicaciones funcionales. Como desarrollador web, construyo soluciones modernas y eficientes utilizando las últimas tecnologías del mercado.",
    price: "$35",
    starts: [starts1, starts1, starts1, starts1, starts1],
  },
];
// const projects: Project[] = [
//   {
//     title: "Bleach: Thousand Year Blood War",
//     img: "",
//     description:
//       "Desarrollé una SPA responsive que presenta contenido de Bleach en español, con información detallada de personajes, animaciones fluidas y diseño adaptativo multiplataforma.",
//     stack: [""],
//   },
// ];

export { service };
