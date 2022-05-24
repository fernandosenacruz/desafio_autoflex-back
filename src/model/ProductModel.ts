import { PrismaClient } from '@prisma/client';
import IProduct from '../interface/IProduct';

const prisma = new PrismaClient();

export default class ProductModel {
  public createProduct = async (
    code: string,
    name: string,
    price: number,
  ): Promise<IProduct> => {
    const newProduct = await prisma.product.create({
      data: {
        code,
        name,
        price,
      },
    });

    return newProduct;
  }

  public getProducts = async (): Promise<IProduct[]> => {
    const products = await prisma.product.findMany();

    return products;
  }
}