import Image from "next/image";
import Link from "next/link";
import siteLogo from "@/assets/images/site-logo.png";

const SiteLogo: React.FC = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image className="size-8" src={siteLogo} alt="site logo" />
      <span className="text-lg font-semibold">Code Template</span>
    </Link>
  );
};

export default SiteLogo;
