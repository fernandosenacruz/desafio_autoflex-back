import { NextFunction, Request, Response } from 'express';
import ProductService from '../service/ProductService';

export default class ProductController {
  private productService = new ProductService();

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
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
  }

  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const products = await this.productService.getProducts();

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}