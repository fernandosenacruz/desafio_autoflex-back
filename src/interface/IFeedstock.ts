import IAssociate from "./IAssociate";

export default interface IFeedstock {
  id: number;
  code: string;
  name: string;
  quantity: number;
  products?: IAssociate[];
}