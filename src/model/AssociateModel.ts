import { prisma } from './ProductModel';

export default class AssociateModel {
  public createAssociation = async (
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<unknown> => {
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

    return newAssociate;
  };

  public getAssociations = async (): Promise<unknown> => {
    const associates = await prisma.productsFeedstocks.findMany();

    return associates;
  };

  public getAssociation = async (id: number): Promise<unknown | null> => {
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
  ): Promise<unknown | null> => {
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

  public deleteAssociation = async (id: number): Promise<unknown | null> => {
    const associate = await prisma.productsFeedstocks.delete({
      where: {
        id,
      },
    });

    return associate;
  };
}
