import { Feedback } from "./Feedback";
import { InfoContact } from "./InfoContact";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#101010] max-w-[1580px]
        md:flex md:flex-col md:items-center md:justify-center
        lg:flex-row lg:items-center"
    >
      <div className="lg:basis-[60%] ">
        <Feedback />
      </div>
      <div className="lg:basis-[40%] lg:order-first">
        <InfoContact />
      </div>
    </section>
  );
};
