import IProduct from './IProduct';
import IFeedstock from './IFeedstock';

export default interface IAssociate {
  id: number;
  productId: number;
  feedstockId: number;
  stock: number;
}

export interface IAssociations {
  product?: IProduct[];
  feedstock?: IFeedstock[];
}
