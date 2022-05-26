import AssociateModel from '../model/AssociateModel';

export default class AssociateService {
  constructor(private associateModel = new AssociateModel()) {}

  public createAssociation = async (
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<unknown> => {
    const newAssociate = await this.associateModel.createAssociation(
      productId,
      feedstockId,
      stock
    );

    return newAssociate;
  };

  public getAssociations = async (): Promise<unknown> => {
    const associates = await this.associateModel.getAssociations();

    return associates;
  };

  public getAssociation = async (id: number): Promise<unknown | null> => {
    const associate = await this.associateModel.getAssociation(id);

    return associate;
  };

  public updateAssociation = async (
    id: number,
    productId: number,
    feedstockId: number,
    stock: number
  ): Promise<unknown | null> => {
    const associate = await this.associateModel.updateAssociation(
      id,
      productId,
      feedstockId,
      stock
    );

    return associate;
  };

  public deleteAssociation = async (id: number): Promise<unknown | null> => {
    const associate = await this.associateModel.deleteAssociation(id);

    return associate;
  };
}
