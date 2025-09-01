import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="bg-hero">
      <Navbar />
      <Hero />
    </header>
  );
};
