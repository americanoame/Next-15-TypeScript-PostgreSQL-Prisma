"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div style={{ position: "relative", width: "120px", height: "48px" }}>
        <Image
          src="/images/logo.svg"
          alt={APP_NAME}
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="mt-2 text-lg">Could not find the requested page.</p>

      <Link href="/">
        <Button className="mt-4 px-6 py-2 bg-primary rounded hover:bg-primary-dark">
          Take me back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
