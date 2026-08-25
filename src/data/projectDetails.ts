export type ProjectDetail = {
  slug: string;
  category: string;
  title: string;
  breadcrumbTitle: string;
  description: string;
  fieldLabel: string;
  fieldValue: string;
  technologies: string[];
  projectUrl: string;
  images: { src: string; alt: string; width: number; height: number }[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "electoral-management-system",
    category: "Desarrollo web",
    title: "Sistema de Gestión Electoral (Lima Metropolitana)",
    breadcrumbTitle: "Sistema de Gestión Electoral",
    description:
      "Sistema de gestión electoral para Lima Metropolitana. Abarca el registro de votantes, la activación de cuentas, la emisión del voto presidencial y la visualización automática de los resultados en los 43 distritos.",
    fieldLabel: "Proyecto",
    fieldValue: "Instituto San Ignacio de Loyola | ISIL",
    technologies: ["Spring Boot", "Thymeleaf", "Spring Security"],
    projectUrl: "https://github.com/seevsk/electoral-management-system",
    images: [
      {
        src: "/projects/electoral-management-system/gallery/citizen-participation.png",
        alt: "Panel de participación ciudadana con resultados por distrito",
        width: 1903,
        height: 1913,
      },
      {
        src: "/projects/electoral-management-system/gallery/polling-station.png",
        alt: "Consulta de local de votación por DNI",
        width: 1900,
        height: 913,
      },
      {
        src: "/projects/electoral-management-system/gallery/presidential-results.png",
        alt: "Resultados de la votación presidencial",
        width: 1894,
        height: 920,
      },
      {
        src: "/projects/electoral-management-system/gallery/political-parties.png",
        alt: "Panel administrativo de gestión de partidos políticos",
        width: 1910,
        height: 925,
      },
    ],
  },
];
