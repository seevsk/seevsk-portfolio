import Link from "next/link";

export const FilterNav = () => {
  return (
    <>
      <nav
        className="flex items-center justify-start max-w-sm mx-left
      sm:max-w-[490px]
      md:max-w-2xl
      lg:max-w-[970px]"
      >
        <ul
          className="flex flex-wrap font-mono font-bold text-[16.5px] text-left
        space-x-4 tracking-[0.9px] text-[#bcb8b1]
        sm:flex-nowrap sm:font-bold
        md:md:tracking-[0.7px] md:font-semibold
        lg:text-[17px] lg:tracking-[1.1px]"
        >
          <li>
            <Link href="#">Todo</Link>
          </li>
          <li>
            <Link href="#">{"/ Desarrollo Web"}</Link>
          </li>
          <li>
            <Link href="#">{"/ Desarrollo Movil"}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
