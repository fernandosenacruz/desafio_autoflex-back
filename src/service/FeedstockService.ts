import IFeedstock from "../interface/IFeedstock";
import FeedstockModel from "../model/FeedstockModels";

export default class FeedstockService {
  constructor(private feedstockModel = new FeedstockModel()) {}

  public createFeedstock = async (
    code: string,
    name: string,
    quantity: number
  ): Promise<IFeedstock> => {
    const newFeedstock = await this.feedstockModel.createFeedstock(
      code,
      name,
      quantity
    );

    return newFeedstock;
  };

  public getFeedstocks = async (): Promise<IFeedstock[]> => {
    const feedstocks = await this.feedstockModel.getFeedstocks();

    return feedstocks;
  };

  public getFeedstock = async (id: number): Promise<IFeedstock | null> => {
    const feedstock = await this.feedstockModel.getFeedstock(id);

    return feedstock;
  };

  public updateFeedstock = async (
    id: number,
    code: string,
    name: string,
    quantity: number
  ): Promise<IFeedstock | null> => {
    const feedstock = await this.feedstockModel.updateFeedstock(
      id,
      code,
      name,
      quantity
    );

    return feedstock;
  };

  public deleteFeedstock = async (id: number): Promise<IFeedstock | null> => {
    const feedstock = await this.feedstockModel.deleteFeedstock(id);

    return feedstock;
  };
}