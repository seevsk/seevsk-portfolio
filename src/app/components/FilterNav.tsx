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
          className="flex flex-wrap font-sans font-extrabold text-[16.5px] text-left
        space-x-4 tracking-[0.5px]
        sm:flex-nowrap 
        md:text-[17px] md:tracking-[0.7px]
        lg:text-lg lg:tracking-[0.9px]
        "
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
