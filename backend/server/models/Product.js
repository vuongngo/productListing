import request from 'request';
import NodeCache from 'node-cache';
import config from '../../config/config';

// Simple cache to fetch whole products
// In case of rate limit in consuming external API
// Or mapping complex model
// External cache with Redis, etc... is advisable for production
class Product {
  constructor() {
    this.productCache = new NodeCache({sdtTTL: 120, checkPeriod: 120});
    //precache
    this.cache()
      .then(console.log)
      .catch(console.log);
  }

  list(page, limit) {
    const begin = page * limit; // Skip number of records
    const end = begin + limit;
    return new Promise((resolve, reject) => {
      this.productCache.get('products', (err, products) => {
        // Recache if there is error or exprire
        if (err || typeof products === 'undefined') {
          this.cache()
            .then(() => {
              const list = this.productCache.get('products');
              if (typeof list === 'undefined') {
                resolve([]);
              }
              resolve(list.slice(begin, end));
            })
            .catch(reject);
        } else {
          resolve(products.slice(begin, end));
        }
      });
    });
  }

  meta(limit) {
    const totalProducts = this.productCache.get('productsCount');
    if (typeof totalProducts === 'undefined') {
      throw new Error('Fail to get products');
    }
    const totalPages = Math.ceil(totalProducts / limit);
    return { totalProducts, totalPages };
  }

  cache = () => {
    return new Promise((resolve, reject) => {
      // Use json file for test
      if (config.env === 'test') {
        const products = require('../mock/products.json');
        this.setCache(products, resolve, reject);
      } else {
        request(config.productUri, (error, response, body) => {
          if (error) reject(error);
          if (response.statusCode !== 200) reject('Failed to fetch products');
          try {
            const products = JSON.parse(body);
            this.setCache(products, resolve, reject);
          } catch(err) {
            reject(err);
          }
        });
      }
    });
  }

  setCache = (products, resolve, reject) => {
    this.productCache.set('products', products, (err, success) => {
      if (err) reject(err);
      this.productCache.set('productsCount', products.length);
      resolve(success);
    });
  }
};

export default Product;
