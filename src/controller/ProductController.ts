import { NextFunction, Request, Response } from 'express';
import ProductService from '../service/ProductService';

export default class ProductController {
  private productService = new ProductService();

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { code, name, price } = req.body;

    try {
      const newProduct = await this.productService.createProduct(
        code,
        name,
        price,
      );

      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  public getProducts = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const products = await this.productService.getProducts();

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  public getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const product = await this.productService.getProduct(+id);

      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;
    const { code, name, price } = req.body;

    try {
      const product = await this.productService.updateProduct(
        +id,
        code,
        name,
        price,
      );

      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params;

    try {
      const product = await this.productService.deleteProduct(+id);

      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };
}
