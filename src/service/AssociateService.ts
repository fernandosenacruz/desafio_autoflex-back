import AssociateModel from '../model/AssociateModel';
import { prisma } from '../model/ProductModel';
import IAssociate, { IAssociations } from '../interface/IAssociate';

export default class AssociateService {
  constructor(private associateModel = new AssociateModel()) {}

  public createAssociation = async (
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<IAssociate> => {
    const feedstock = await prisma.feedstock.findMany({
      where: {
        id: feedstockId,
      },
    });

    feedstock.map(async (f) => {
      if (f.quantity < stock) {
        throw new Error('Quantidade insuficiente');
      } else {
        await prisma.feedstock.update({
          where: {
            id: feedstockId,
          },
          data: {
            quantity: f.quantity - stock,
          },
        });
      }
    });

    const newAssociate = await this.associateModel.createAssociation(
      productId,
      feedstockId,
      stock
    );

    return newAssociate;
  };

  public getAssociations = async (
    productId: number,
    feedstockId: number
  ): Promise<IAssociations> => {
    const associates = await this.associateModel.getAssociations(
      productId,
      feedstockId
    );

    return associates;
  };

  public getAssociation = async (id: number): Promise<IAssociate | null> => {
    const associate = await this.associateModel.getAssociation(id);

    return associate;
  };

  public updateAssociation = async (
    id: number,
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<IAssociate | null> => {
    const feedstock = await prisma.feedstock.findMany({
      where: {
        id: feedstockId,
      },
    });

    feedstock.map(async (f) => {
      if (f.quantity < stock) {
        throw new Error('Quantidade insuficiente');
      } else {
        await prisma.feedstock.update({
          where: {
            id: feedstockId,
          },
          data: {
            quantity: f.quantity - stock,
          },
        });
      }
    });

    const associate = await this.associateModel.updateAssociation(
      id,
      productId,
      feedstockId,
      stock
    );

    return associate;
  };

  public deleteAssociation = async (id: number): Promise<IAssociate | null> => {
    const associate = await this.associateModel.deleteAssociation(id);

    return associate;
  };
}
