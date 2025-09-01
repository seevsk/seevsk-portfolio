import Image from "next/image";
import { svgs } from "../assets";
import { inspirations } from "@/data/inspirations";

export const Feedback = () => {
  const jensenHuang = inspirations[0];
  const ferHerrera = inspirations[1];
  const alvaroFelipe = inspirations[2];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="bg-[#65A700] py-3 px-4 md:row-span-2
        md:flex md:flex-col 
        lg:col-span-1"
        >
          <div className="flex justify-between items-start pb-4 w-[90%] mx-auto">
            <Image src={svgs.marks} alt="marks-svg" width={60} height={60} />
            <Image
              src={svgs.jensenHuang}
              alt="jensenHuang"
              width={100}
              height={100}
              className="object-cover aspect-square rounded-full border-3 border-white"
            />
          </div>
          <div className="font-sans tracking-[-0.2px] w-[90%] mx-auto">
            <p className="pb-4 text-[16.5px]">{jensenHuang.description}</p>
            <h3 className="text-[17px]">{jensenHuang.name}</h3>
            <h4 className="font-normal text-[16.5px]">
              {jensenHuang.occupation}
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:col-span-2">
          <div
            className="bg-[#891AD5] py-3 px-4
           "
          >
            <div className="flex justify-between items-start pb-4 w-[90%] mx-auto">
              <Image src={svgs.marks} alt="marks-svg" width={60} height={60} />
              <Image
                src={svgs.ferHerrera}
                alt="ferHerrera"
                width={100}
                height={100}
                className="object-cover aspect-square rounded-full border-3 border-white"
              />
            </div>
            <div className="font-sans tracking-[-0.2px] w-[90%] mx-auto">
              <p className="pb-4 text-[16.5px]">{ferHerrera.description}</p>
              <h3 className="text-[17px]">{ferHerrera.name}</h3>
              <h4 className="font-normal text-[16.5px]">
                {ferHerrera.occupation}
              </h4>
            </div>
          </div>
          <div className="grid bg-[#0653AC] py-3 px-4">
            <div className="flex justify-between items-start pb-4 w-[90%] mx-auto">
              <Image src={svgs.marks} alt="marks-svg" width={60} height={60} />
              <Image
                src={svgs.alvaroFelipe}
                alt="alvaroFelipe"
                width={100}
                height={100}
                className="object-cover aspect-square rounded-full border-3 border-white"
              />
            </div>
            <div className="font-sans tracking-[-0.2px] w-[90%] mx-auto">
              <p className="pb-4 text-[16.5px]">{alvaroFelipe.description}</p>
              <h3 className="text-[17px]">{alvaroFelipe.name}</h3>
              <h4 className="font-normal text-[16.5px]">
                {alvaroFelipe.occupation}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
