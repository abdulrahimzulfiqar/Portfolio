import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/rahimmm.jpeg"}
        width={737}
        height={678}
        priority={true}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
