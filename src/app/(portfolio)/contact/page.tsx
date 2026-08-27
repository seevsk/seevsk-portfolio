import { InfoContact } from "./ui/InfoContact";
import { ContactForm } from "./ui/ContactForm";
import { Footer } from "../ui/Footer";
import { PageTransition } from "@/components/page-transition/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-[#101010] w-full overflow-hidden">
        <div
          className="max-w-[1580px] mx-auto
            md:flex md:flex-col md:items-center md:justify-center md:min-h-dvh md:py-16
            lg:grid lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-12 lg:pt-8 lg:pb-0"
        >
          <div>
            <ContactForm />
          </div>
          <div className="w-full lg:order-first">
            <InfoContact />
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
}
