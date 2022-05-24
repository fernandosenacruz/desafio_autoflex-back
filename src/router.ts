import { Router } from 'express';
import ProductController from './controller/ProductController';

const product = new ProductController();

const router = Router();

router.post('/product', product.createProduct);

router.get('/products', product.getProducts);
router.get('/product/:id', product.getProduct);

router.put('/product/:id', product.updateProduct);

router.delete('/product/:id', product.deleteProduct);

export default router;