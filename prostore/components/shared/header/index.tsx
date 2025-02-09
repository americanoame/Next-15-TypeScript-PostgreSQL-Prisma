"use client"
import { useIsClient } from "@/hooks/useIsClient";

// import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";



const Header = () => {

// Ensure styles are applied only after the component mounts

const mounted = useIsClient(); // Using the custom hook

if (!mounted) {
  return null; // Return nothing until the component has mounted
}



  return (
    <header className="w-full ">
       
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            {/* <Image
              src="/images/logo.svg"
              alt={` ${APP_NAME}  logo`}
              height={48}
              width={48}
              priority={true}
            /> */}

            {/* <span className="span hidden lg:block font-size text2xl ml-3">
              {APP_NAME}
            </span> */}
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
