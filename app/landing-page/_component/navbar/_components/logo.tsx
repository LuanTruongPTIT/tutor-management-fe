import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={150}
          className="
                    w-24
                  "
        />
      </Link>
    </>
  );
};

export default Logo;
