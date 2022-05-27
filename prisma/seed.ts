import { products } from './product';
import { feedstocks } from './feedstock';
import { productFeedstocks } from './productFeedstock';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  for (const feedstock of feedstocks) {
    await prisma.feedstock.create({
      data: feedstock,
    });
  }

  for (const productFeedstock of productFeedstocks) {
    await prisma.productsFeedstocks.create({
      data: productFeedstock,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
