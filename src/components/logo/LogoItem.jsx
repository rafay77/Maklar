import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Maklar_logo2 from "../../../public/assets/imgs/logo/Maklar_logo_white_new3-cropped.svg";
import Maklar_logo from "../../../public/assets/imgs/logo/Maklar_logo_black_new3-cropped.svg";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/digital-marketing"} className="logo-dark">
          <Image
            priority
            width={120}
            height={30}
            src={Maklar_logo}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/digital-marketing"} className="logo-light">
        <Image
            priority
            width={120}
            height={30}
            src={Maklar_logo2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
