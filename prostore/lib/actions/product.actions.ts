'use server';
// import { PrismaClient } from '@prisma/client';
import {prisma} from "@/db/prisma"
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// Get the latest products
export async function getLatestProducts() {

  // const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

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

