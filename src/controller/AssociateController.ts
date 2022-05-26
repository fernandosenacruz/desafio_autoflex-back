import { Request, Response, NextFunction } from 'express';
import AssociateService from '../service/AssociateService';

export default class AssociateController {
  private associateService = new AssociateService();

  public createAssociation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { productId, feedstockId, stock } = req.body;

    try {
      const newAssociate = await this.associateService.createAssociation(
        productId,
        feedstockId,
        stock
      );

      return res.status(201).json(newAssociate);
    } catch (error) {
      return next(error);
    }
  };

  public getAssociations = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { productId, feedstockId } = req.query;

      console.log(productId, feedstockId);
      const associates = await this.associateService.getAssociations(+productId, +feedstockId);

      return res.status(200).json(associates);
    } catch (error) {
      return next(error);
    }
  };

  public getAssociation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    try {
      const associate = await this.associateService.getAssociation(+id);

      return res.status(200).json(associate);
    } catch (error) {
      return next(error);
    }
  };

  public updateAssociation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const { productId, feedstockId, stock } = req.body;

    try {
      const associate = await this.associateService.updateAssociation(
        +id,
        productId,
        feedstockId,
        stock
      );

      return res.status(200).json(associate);
    } catch (error) {
      return next(error);
    }
  };

  public deleteAssociation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;

    try {
      const associate = await this.associateService.deleteAssociation(+id);

      return res.status(200).json(associate);
    } catch (error) {
      return next(error);
    }
  };
}
