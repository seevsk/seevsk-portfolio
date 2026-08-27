export type ProjectDetail = {
  slug: string;
  category: string;
  title: string;
  breadcrumbTitle: string;
  description: string;
  fieldLabel: string;
  fieldValue: string | { text: string; url?: string }[];
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
        alt: "citizen-participation-dashboard-results-by-district",
        width: 1903,
        height: 1913,
      },
      {
        src: "/projects/electoral-management-system/gallery/polling-station.png",
        alt: "polling-station-lookup-national-id-search",
        width: 1900,
        height: 913,
      },
      {
        src: "/projects/electoral-management-system/gallery/presidential-results.png",
        alt: "presidential-election-results-vote-count-by-candidate",
        width: 1894,
        height: 920,
      },
      {
        src: "/projects/electoral-management-system/gallery/political-parties.png",
        alt: "admin-panel-political-parties-management",
        width: 1910,
        height: 925,
      },
    ],
  },
  {
    slug: "nownews-app",
    category: "Desarrollo Móvil",
    title: "Now News – Aplicación de Noticias por el Mundo",
    breadcrumbTitle: "Now News",
    description:
      "Aplicación móvil de noticias del mundo, segmentadas por país y categoría (deportes, cultura, política, negocios, entre otras). También incluye un directorio de sedes centrales de medios de noticias, como The New York Times, Toronto Star y Los Angeles Times, con descripción de cada una y su ubicación exacta mediante integración con Google Maps.",
    fieldLabel: "Proyecto",
    fieldValue: [
      { text: "ISIL" },
      {
        text: "Behance",
        url: "https://www.behance.net/gallery/222712151/Now-News-",
      },
    ],
    technologies: ["Kotlin", "PHP", "MySQL"],
    projectUrl: "https://github.com/seevsk/kotlin-nownews",
    images: [
      {
        src: "/projects/nownews-app/gallery/home-feed.png",
        alt: "news-feed-home-screen-category-filters",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/nownews-app/gallery/article-list.png",
        alt: "article-list-screen-category-grid",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/nownews-app/gallery/category-pages.png",
        alt: "sports-category-culture-category-politics-category",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/nownews-app/gallery/newspaper-locations.png",
        alt: "newspaper-headquarters-directory-map-view-detail-screen",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    slug: "kawsay-cross-platform",
    category: "Windows Desktop & Desarrollo Web",
    title: "Kawsay – Sistema de Gestión Multiplataforma",
    breadcrumbTitle: "Kawsay",
    description:
      "Sistema de gestión con dos frentes de cliente sobre un modelo de datos compartido en SQL Server. Una aplicación de escritorio (WinForms) para el CRUD de clientes y técnicos, y una capa web (ASP.NET Web Forms) para consultas y transacciones.",
    fieldLabel: "Proyecto",
    fieldValue: "Instituto San Ignacio de Loyola | ISIL",
    technologies: ["C#", "ASP.NET Web Forms", "SQL Server"],
    projectUrl: "https://github.com/seevsk/kawsay-desktop",
    images: [
      {
        src: "/projects/kawsay-cross-platform/gallery/desktop-login-and-info.png",
        alt: "desktop-app-login-screen-project-info-panel",
        width: 1920,
        height: 1029,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/desktop-main-menu.png",
        alt: "desktop-app-main-menu-dashboard",
        width: 1920,
        height: 1029,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/desktop-client-list.png",
        alt: "desktop-app-client-list-crud",
        width: 1920,
        height: 1030,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/desktop-client-edit-form.png",
        alt: "desktop-app-edit-client-form",
        width: 1920,
        height: 1029,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/web-login.png",
        alt: "web-app-login-screen",
        width: 1890,
        height: 1080,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/web-dashboard.png",
        alt: "web-app-dashboard-stats-and-charts",
        width: 1899,
        height: 1080,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/web-client-history-query.png",
        alt: "web-app-client-installation-history-query",
        width: 1900,
        height: 1080,
      },
      {
        src: "/projects/kawsay-cross-platform/gallery/web-technician-scheduling.png",
        alt: "web-app-technician-visit-scheduling",
        width: 1899,
        height: 1080,
      },
    ],
  },
  {
    slug: "teslo-shop-platform",
    category: "Desarrollo Web",
    title: "TesloShop – Plataforma E-commerce",
    breadcrumbTitle: "TesloShop",
    description:
      "Tienda online que replica la experiencia de compra de un e-commerce real. Desde explorar el catálogo y armar el carrito, hasta completar el pedido con pago integrado a través de PayPal.",
    fieldLabel: "Proyecto",
    fieldValue: "Udemy | DevTalles",
    technologies: ["Next.js", "TypeScript", "Zustand"],
    projectUrl: "https://github.com/seevsk/e-commerce-nextcart",
    images: [
      {
        src: "/projects/teslo-shop/gallery/men-category-listing.png",
        alt: "men-category-product-listing",
        width: 1890,
        height: 925,
      },
      {
        src: "/projects/teslo-shop/gallery/product-detail-page.png",
        alt: "product-detail-page-sizes-and-add-to-cart",
        width: 1890,
        height: 1704,
      },
      {
        src: "/projects/teslo-shop/gallery/shopping-cart-summary.png",
        alt: "shopping-cart-order-summary",
        width: 1890,
        height: 924,
      },
      {
        src: "/projects/teslo-shop/gallery/checkout-shipping-address.png",
        alt: "checkout-shipping-address-form",
        width: 1891,
        height: 923,
      },
      {
        src: "/projects/teslo-shop/gallery/account-and-admin-menu.png",
        alt: "account-menu-admin-products-and-users",
        width: 1890,
        height: 924,
      },
    ],
  },
  {
    slug: "newshub-app",
    category: "Desarrollo Movil",
    title: "NewsHub - Aplicación de Noticias, Eventos y Estilo de Vida",
    breadcrumbTitle: "NewsHub",
    description:
      "Aplicación de noticias que centraliza la actualidad global y contenido local de Lima en un solo lugar. Desde titulares internacionales hasta eventos, seminarios y espacios de la ciudad, con un directorio de instalaciones que incluye ubicación en mapa mediante Google Maps. Cliente iOS nativo desarrollado en SwiftUI, consumiendo una API REST propia construida en PHP.",
    fieldLabel: "Proyecto",
    fieldValue: "Instituto San Ignacio de Loyola | ISIL",
    technologies: ["SwiftUI", "PHP", "MySQL"],
    projectUrl: "https://github.com/inewshub/ios",
    images: [
      {
        src: "/projects/newshub-app/gallery/onboarding-and-lima-feed.png",
        alt: "onboarding-screen-life-at-lima-feed",
        width: 1920,
        height: 1080,
      },
      {
        src: "/projects/newshub-app/gallery/events-feed-and-article-detail.png",
        alt: "events-feed-and-article-detail-screen",
        width: 1920,
        height: 1080,
      },
    ],
  },
];
