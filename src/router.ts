import { Router } from 'express';
import ProductController from './controller/ProductController';

const product = new ProductController();

const router = Router();

router.post('/product', product.createProduct);

router.get('/products', product.getProducts);

export default router;