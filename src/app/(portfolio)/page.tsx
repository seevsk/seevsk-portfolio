import { Hero } from "./ui/Hero";
import { Main } from "./ui/Main";
import { PageTransition } from "@/components/page-transition/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Main />
    </PageTransition>
  );
}
