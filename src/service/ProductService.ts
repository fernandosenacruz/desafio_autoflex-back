import ProductModel from '../model/ProductModel';
import IProduct from '../interface/IProduct';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  public createProduct = async (
    code: string,
    name: string,
    price: number
  ): Promise<IProduct> => {
    const newProduct = await this.productModel.createProduct(code, name, price);

    return newProduct;
  };

  public getProducts = async (): Promise<IProduct[]> => {
    const products = await this.productModel.getProducts();

    return products;
  };

  public getProduct = async (id: number): Promise<IProduct | null> => {
    const product = await this.productModel.getProduct(id);

    return product;
  };

  public updateProduct = async (
    id: number,
    code: string,
    name: string,
    price: number
  ): Promise<IProduct | null> => {
    const product = await this.productModel.updateProduct(
      id,
      code,
      name,
      price
    );

    return product;
  };

  public deleteProduct = async (id: number): Promise<IProduct | null> => {
    const product = await this.productModel.deleteProduct(id);

    return product;
  };
}
