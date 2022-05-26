import { Router } from 'express';
import ProductController from './controller/ProductController';
import FeedstockController from './controller/FeedstockController';
import AssociateController from './controller/AssociateController';

const product = new ProductController();
const feedstock = new FeedstockController();
const associate = new AssociateController();

const router = Router();

// Product routes
router.post('/product', product.createProduct);

router.get('/products', product.getProducts);
router.get('/product/:id', product.getProduct);

router.put('/product/:id', product.updateProduct);

router.delete('/product/:id', product.deleteProduct);

// Feedstock routes
router.post('/feedstock', feedstock.createFeedstock);

router.get('/feedstocks', feedstock.getFeedstocks);

router.get('/feedstock/:id', feedstock.getFeedstock);

router.put('/feedstock/:id', feedstock.updateFeedstock);

router.delete('/feedstock/:id', feedstock.deleteFeedstock);

// Associate routes
router.post('/associate', associate.createAssociation);

router.get('/associations', associate.getAssociations);

router.get('/associate/:id', associate.getAssociation);

router.put('/associate/:id', associate.updateAssociation);

router.delete('/associate/:id', associate.deleteAssociation);

export default router;