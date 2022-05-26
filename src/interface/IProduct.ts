import IAssociate from "./IAssociate";

export default interface IProduct {
  id: number;
  code: string;
  name: string;
  price: number;
  feedstocks?: IAssociate[];
}
