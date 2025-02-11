"use client"
import { useEffect, useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";

import { getRecentProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";

const RecentProducts =  () => {

  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const mounted = useIsClient(); // Using custom hook

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getRecentProducts();
      setRecentProducts(products);
    };

    fetchProducts();
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      
      <div className="grid grid-cols-1 gap-4">
        {recentProducts.map((product: Product) => (
          <div
            key={product.id}
            className="product-card flex items-center gap-4"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col">
            <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
