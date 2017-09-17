import express from 'express';
import productCtrl from '../controllers/product.controller';
import validate from '../helpers/Validation';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/products?page=1&limit=20 - Get list of product */
  .get(validate(['page', 'limit']), productCtrl.list);

export default router;
