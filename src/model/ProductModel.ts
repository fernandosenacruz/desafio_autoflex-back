import { PrismaClient } from '@prisma/client';
import IProduct from '../interface/IProduct';

const prisma = new PrismaClient();

export default class ProductModel {
  public createProduct = async (
    code: string,
    name: string,
    price: number
  ): Promise<IProduct> => {
    const newProduct = await prisma.product.create({
      data: {
        code,
        name,
        price,
      },
    });

    return newProduct;
  };

  public getProducts = async (): Promise<IProduct[]> => {
    const products = await prisma.product.findMany();

    return products;
  };

  public getProduct = async (id: number): Promise<IProduct | null> => {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  };

  public updateProduct = async (
    id: number,
    code: string,
    name: string,
    price: number
  ): Promise<IProduct | null> => {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        code,
        name,
        price,
      },
    });

    return product;
  };

  public deleteProduct = async (id: number): Promise<IProduct | null> => {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  };
}
