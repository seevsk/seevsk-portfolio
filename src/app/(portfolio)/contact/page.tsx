import { InfoContact } from "./ui/InfoContact";
import { ContactForm } from "./ui/ContactForm";
import { PageTransition } from "@/components/page-transition/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-[#101010] w-full overflow-hidden">
        <div
          className="max-w-[1580px] mx-auto
            md:flex md:flex-col md:items-center md:justify-center md:min-h-screen md:py-16
            lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:pt-36 lg:pb-16"
        >
          <div className="lg:basis-[60%]">
            <ContactForm />
          </div>
          <div className="mt-14 md:mt-16 lg:mt-0 w-full lg:basis-[40%] lg:order-first">
            <InfoContact />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
