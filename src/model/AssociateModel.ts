import { prisma } from './ProductModel';
import IAssociate, { IAssociations } from '../interface/IAssociate';

export default class AssociateModel {
  public createAssociation = async (
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<IAssociate> => {
    const newAssociate = await prisma.productsFeedstocks.create({
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        feedstock: {
          connect: {
            id: feedstockId,
          },
        },
        stock,
      },
    });
    console.log(newAssociate);
    return newAssociate;
  };

  public getAssociations = async (
    productId: number,
    feedstockId: number
  ): Promise<IAssociations> => {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
      include: {
        feedstocks: true,
      },
    });

    const feedstock = await prisma.feedstock.findFirst({
      where: {
        id: feedstockId,
      },
      include: {
        products: true,
      },
    });

    return { data: { product, feedstock } };
  };

  public getAssociation = async (id: number): Promise<IAssociate | null> => {
    const associate = await prisma.productsFeedstocks.findFirst({
      where: {
        id,
      },
    });

    return associate;
  };

  public updateAssociation = async (
    id: number,
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<IAssociate | null> => {
    const associate = await prisma.productsFeedstocks.update({
      where: {
        id,
      },
      data: {
        product: {
          connect: {
            id: productId,
          },
        },
        feedstock: {
          connect: {
            id: feedstockId,
          },
        },
        stock,
      },
    });

    return associate;
  };

  public deleteAssociation = async (id: number): Promise<IAssociate | null> => {
    const associate = await prisma.productsFeedstocks.delete({
      where: {
        id,
      },
    });

    return associate;
  };
}
