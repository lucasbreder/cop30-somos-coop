import Image from "next/image";
import { useRouter } from "next/navigation";

export const NavItem = ({
  icon,
  label,
  url,
}: {
  icon?: string;
  label?: string;
  url?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="flex gap-3 cursor-pointer items-center z-99"
      onClick={() => {
        if (url) router.push(url);
        if (!url) router.back();
      }}
    >
      {icon && (
        <div className="w-5 h-5 fhd:w-8 fhd:h-8 fhdv:portrait:w-12 fhdv:portrait:h-12 relative">
          <Image sizes="80vw" src={icon} alt="Voltar" fill />
        </div>
      )}
      <div className="uppercase text-xs md:text-base font-light border-l border-primary pl-2">
        {label}
      </div>
    </div>
  );
};
