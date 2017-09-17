import Product from '../models/Product';
import { getPageLimit } from '../helpers/query';
import { validationResult } from 'express-validator/check';

const product = new Product();

/**
 * Create product and append to req.
 */
function list(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  let { page, limit } = getPageLimit(req.query);
  return product.list(page, limit)
    .then((products) => {
      const { totalProducts, totalPages } = product.meta(limit);
      res.json({
        list: products,
        meta: {
          page,
          limit,
          totalProducts,
          totalPages,
        }
      });
    })
    .catch(err => res.status(500));
}

export default { list };
