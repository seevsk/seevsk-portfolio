import { Hero } from "./ui/Hero";
import { Main } from "./ui/Main";
import { Footer } from "./ui/Footer";
import { PageTransition } from "@/components/page-transition/PageTransition";
import { ScrollToTopButton } from "@/components/scroll-to-top-button/ScrollToTopButton";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Main />
      <Footer />
      <ScrollToTopButton desktopVisible />
    </PageTransition>
  );
}
