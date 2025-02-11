import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ModeToggle from "./mode-toggle";
import Search from "./search";

const Menu = () => {
  return (
    // Main Navigation Container

    // <div className="flex justify-end gap-3">
    //         <nav className="hidden md:flex w-full max-w-xs gap-1">

    <div className="flex justify-end items-center w-full p-4">
      <nav className="hidden md:flex items-center gap-3">
        <ModeToggle />

        <Link href="/sign-in" className="flex items-center gap-2">
          <User size={18} />
        </Link>

        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </nav>

      {/* Mobile Navigation - Only Logo & Menu Button */}
      <nav className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger className="ml-2">
            <EllipsisVertical size={28} />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">

            
            <div className="mt-10">
              <Search />
            </div>

            <SheetTitle>Menu</SheetTitle>

            <Link href="/">Home</Link>

            <Link href="/contact">Contact</Link>

            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>

            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;

// import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import ModeToggle from "./mode-toggle";

// const Menu = () => {
//   return (
//     // Main Nav
//     <div className="flex justify-end gap-3">
//       <nav className="hidden md:flex w-full max-w-xs gap-1">
//         <ModeToggle />
//         <Button asChild variant="ghost">
//           <Link href="/cart">
//             <ShoppingCart /> Cart
//           </Link>
//         </Button>
//         <Button asChild>
//           <Link href="/sign-in">
//             <UserIcon /> Sign In
//           </Link>
//         </Button>
//       </nav>

//       {/* Nav sheet */}
//       <nav className="md:hidden">
//         <Sheet>
//           <SheetTrigger className="align-middle">
//             <EllipsisVertical />
//           </SheetTrigger>
//           <SheetContent className="flex flex-col items-start">
//             <SheetTitle>Menu</SheetTitle>
//             <Button asChild variant="ghost">
//               <Link href="/cart">
//                 <ShoppingCart /> Cart
//               </Link>
//             </Button>
//             <Button asChild>
//               <Link href="/sign-in">
//                 <UserIcon /> Sign In
//               </Link>
//             </Button>
//             <SheetDescription></SheetDescription>
//           </SheetContent>
//         </Sheet>
//       </nav>
//     </div>
//   );
// };

// export default Menu;
