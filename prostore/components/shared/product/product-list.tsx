import ProductCard from "./product-card";
import { Product } from "@/types";

import UploadVideo from "../video/uploadVideo";

import RecentProduct from "@/components/shared/recent-products/recentProduct";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  // Apply limit if provided, otherwise show all products
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="">
      <h2 className="h2-bold ">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {/* Left side with the product grid (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-6 lg:col-span-5 mt-10">
            {data.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Right side with two sections (top and bottom) */}
          <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
            {/* Top Section with Category Buttons */}
            <div className=" rounded-md h-[300px] flex flex-col">
              {/* Category buttons at the top */}
              <div className="flex ">
                <button className="px-3 py-2 bg-yellow-400 text-white rounded-t-md">
                  Recent
                </button>
                <span className="px-4 py-2  text-gray-500">Popular</span>
              </div>

              {/* Content below the buttons */}
              <div className="p-4 flex-1 bg-yellow-400">
                <RecentProduct />
              </div>
            </div>

            {/* Bottom Section */}

            <UploadVideo />
          </div>
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;


