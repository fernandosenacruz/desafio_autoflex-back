import IProductsFeedstocks from "./IProductsFeedstocks";

export default interface IFeedstock {
  id: number;
  code: string;
  name: string;
  quantity: number;
  product?: IProductsFeedstocks[];
}