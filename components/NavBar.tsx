import Image from "next/image";
import Link from "next/link";

const links = ["home" , "events" , "create events"]

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src={"/icons/logo.png"} width={24} height={24} alt="logo"></Image>
          <p>Dev Event</p>
        </Link>
        <ul className="">
          {links.map((link , index) => (
            <Link href={"/"} className="capitalize cursor-pointer" key={index}>{link}</Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;