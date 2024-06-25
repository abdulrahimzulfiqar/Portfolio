import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="Rounded Text"
          className="animate-spin-slow w-[141px] h-[148px] max-w-full max-h-full"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 pointer-events-none" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
