"use client";

// import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  const isDarkMode = theme === "dark";
  // const label = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
};

export default ModeToggle;

// "use client";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect} from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuContent,
//   DropdownMenuCheckboxItem
// } from "@/components/ui/dropdown-menu";
// import { useTheme } from "next-themes";
// import { SunIcon, MoonIcon, SunMoon} from "lucide-react";

// const ModeToggle = () => {
//   const { theme, setTheme } = useTheme();

//   // make sure the components is mounted before use the theme
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if(!mounted) {
//     return null;
//   }
// //   console.log(mounted)

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
//           {theme === "system" ? (
//             <SunMoon />
//           ) : theme === "dark" ? (
//             <MoonIcon />
//           ) : (
//             <SunIcon />
//           )}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuLabel>Appearance</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuCheckboxItem checked={ theme === "system"}
//         onClick={() => setTheme("system")}
//         >
//             System
//         </DropdownMenuCheckboxItem>
//         <DropdownMenuCheckboxItem checked={ theme === "dark"}
//         onClick={() => setTheme("dark")}
//         >
//             Dark
//         </DropdownMenuCheckboxItem>
//         <DropdownMenuCheckboxItem checked={ theme === "light"}
//         onClick={() => setTheme("light")}
//         >
//             Light
//         </DropdownMenuCheckboxItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default ModeToggle;
