'use server';
// import { PrismaClient } from '@prisma/client';
import {prisma} from "@/components/db/prisma"
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// Get the latest products
export async function getLatestProducts() {

  // const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  // console.log(data);

//   return data;

  return convertToPlainObject(data);
 
}


// Get single product by slug
export async function getProductBySlug(slug: string) {
  // const prisma = new PrismaClient();
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}



export async function getAllCategories() {
  const data = await prisma.product.groupBy({
    by: ['category'],
    _count: true,
  });

  return convertToPlainObject(data);
}




// Get product categories
// export async function getAllCategories() {
//   const data = await prisma.product.groupBy({
//     by: ['category'],
//     _count: true,
//   });

//   // Convert each item to a plain object, ensuring no special Prisma properties are passed
//   const plainData = data.map(item => {
//     // Manually construct a plain object
//     return {
//       category: item.category,
//       count: item._count ? item._count : undefined,
//     };
//   });

//   return plainData;
// }


// Fetch recent products
export async function getRecentProducts() {
  const data = await prisma.product.findMany({
    where: {
      isRecent: true, // Only products that are recent
    },
    take: LATEST_PRODUCTS_LIMIT, // Limit the number of products fetched
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(data);
}



