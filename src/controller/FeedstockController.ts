import { NextFunction, Request, Response } from 'express';
import FeedstockService from "../service/FeedstockService";

export default class FeedstockController {
  private feedstockService = new FeedstockService();

  public createFeedstock = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { code, name, quantity } = req.body;

    try {
      const newFeedstock = await this.feedstockService.createFeedstock(
        code,
        name,
        quantity
      );

      return res.status(201).json(newFeedstock);
    } catch (error) {
      next(error);
    }
  };

  public getFeedstocks = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const feedstocks = await this.feedstockService.getFeedstocks();

      return res.status(200).json(feedstocks);
    } catch (error) {
      next(error);
    }
  };

  public getFeedstock = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const feedstock = await this.feedstockService.getFeedstock(+id);

      return res.status(200).json(feedstock);
    } catch (error) {
      next(error);
    }
  };

  public updateFeedstock = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;
    const { code, name, quantity } = req.body;

    try {
      const feedstock = await this.feedstockService.updateFeedstock(
        +id,
        code,
        name,
        quantity
      );

      return res.status(200).json(feedstock);
    } catch (error) {
      next(error);
    }
  };

  public deleteFeedstock = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const feedstock = await this.feedstockService.deleteFeedstock(+id);

      return res.status(200).json(feedstock);
    } catch (error) {
      next(error);
    }
  }
}