import IProductsFeedstocks from "./IProductsFeedstocks";

export default interface IFeedstock {
  id: number;
  code: string;
  name: string;
  qantity: number;
  product?: IProductsFeedstocks[];
}