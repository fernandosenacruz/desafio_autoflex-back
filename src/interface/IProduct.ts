import IProductsFeedstocks from "./IProductsFeedstocks";

export default interface IProduct {
  id: number;
  code: string;
  name: string;
  price: number;
  feedstocks?: IProductsFeedstocks[];
}
