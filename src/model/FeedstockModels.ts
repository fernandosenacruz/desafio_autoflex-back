import { prisma } from './ProductModel';
import IFeedstock from '../interface/IFeedstock';

export default class FeedstockModel {
  public createFeedstock = async (
    code: string,
    name: string,
    quantity: number
  ): Promise<IFeedstock> => {
    const newFeedstock = await prisma.feedstock.create({
      data: {
        code,
        name,
        quantity,
      },
    });

    return newFeedstock;
  };

  public getFeedstocks = async (): Promise<IFeedstock[]> => {
    const feedstocks = await prisma.feedstock.findMany();

    return feedstocks;
  };

  public getFeedstock = async (id: number): Promise<IFeedstock | null> => {
    const feedstock = await prisma.feedstock.findFirst({
      where: {
        id,
      },
    });

    return feedstock;
  };

  public updateFeedstock = async (
    id: number,
    code: string,
    name: string,
    quantity: number
  ): Promise<IFeedstock | null> => {
    const feedstock = await prisma.feedstock.update({
      where: {
        id,
      },
      data: {
        code,
        name,
        quantity,
      },
    });

    return feedstock;
  };

  public deleteFeedstock = async (id: number): Promise<IFeedstock | null> => {
    const feedstock = await prisma.feedstock.delete({
      where: {
        id,
      },
    });

    return feedstock;
  };
}
