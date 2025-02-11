// components/categories-drawer.tsx (Client Component)

"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getAllCategories } from "@/lib/actions/product.actions";

// import { Product } from "@/types";

const CategoriesDrawer = () => {
  interface Category {
    category: string;
    _count: number;
  }

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);

      // console.log(data);
    };

    fetchCategories();
  }, []);
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="h-full max-w-sm"
        aria-describedby="drawer-description"
      >
        <DrawerHeader>
          <DrawerTitle>Select a category</DrawerTitle>
          <DrawerDescription >
            Choose a category from the list below.
          </DrawerDescription>
          <div className="space-y-1 mt-4">
            {categories.map((x) => (
              <Button
                className="w-full justify-start"
                variant="ghost"
                key={x.category}
                asChild
              >
                <DrawerClose asChild>
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoriesDrawer;

