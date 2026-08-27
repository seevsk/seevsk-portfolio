import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

export type ProjectFilter = "all" | "web" | "movil";

export const FilterNav = ({
  active,
  onChange,
}: {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) => {
  const { language } = useLanguage();

  const filters: { value: ProjectFilter; prefix?: string; label: string }[] = [
    { value: "all", label: t(translations.filterNav.all, language) },
    {
      value: "web",
      prefix: "/ ",
      label: t(translations.filterNav.web, language),
    },
    {
      value: "movil",
      prefix: "/ ",
      label: t(translations.filterNav.mobile, language),
    },
  ];

  return (
    <nav
      className="flex items-center justify-start max-w-sm mx-left
      sm:max-w-[490px]
      md:max-w-2xl md:pt-25
      lg:max-w-[970px] lg:pt-30"
    >
      <ul
        className="flex flex-wrap font-mono font-bold text-[16.5px] text-left
        space-x-4 tracking-[0.9px] text-[#bcb8b1]
        sm:flex-nowrap sm:font-bold
        md:md:tracking-[0.7px] md:font-semibold
        lg:text-[17px] lg:tracking-[1.1px]"
      >
        {filters.map((filter) => (
          <li key={filter.value}>
            <button
              type="button"
              onClick={() => onChange(filter.value)}
              className="cursor-pointer"
            >
              {filter.prefix}
              <span
                className={`transition-colors duration-300 hover:text-[#ff206e]/90 ${
                  active === filter.value ? "text-[#ff206e]/90" : ""
                }`}
              >
                {filter.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
