import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from "@/lib/actions/product.actions";


const HomePage = async () => {


  const latestProducts = await getLatestProducts()

  // console.log(latestProducts)


  return (
    <div className='space-y-8'>
      {/* <h2 className='h2-bold'>Latest Products</h2> */}
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </div>
  );
};
export default HomePage;





// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// await delay(2000)