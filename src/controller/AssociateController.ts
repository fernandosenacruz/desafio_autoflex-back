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
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const associations = await this.associateService.getAssociations();

      return res.status(200).json(associations);
    } catch (error) {
      return next(error);
    }
  };

  public getProductAssociations = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { productId } = req.params;

    try {
      const product = await this.associateService.getProductAssociations(
        +productId
      );

      return res.status(200).json(product);
    } catch (error) {
      return next(error);
    }
  };

  public getFeedstockAssociations = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { feedstockId } = req.params;

    try {
      const feedstock = await this.associateService.getFeedstockAssociations(
        +feedstockId
      );

      return res.status(200).json(feedstock);
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
