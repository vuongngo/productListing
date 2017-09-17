import { query } from 'express-validator/check';
import config from '../../config/config';

const Validation = {
  page() {
    return query('page')
      .custom(value => {
        if (typeof value === 'undefined') {
          value = 1;
        }
        if (isNaN(value)) {
          throw new Error('page is not a number');
        }
        if (parseInt(value) < 0) {
          throw new Error('page can not be negative');
        }
        return value;
      });
  },

  limit() {
    return query('limit')
      .custom(value => {
        if (typeof value === 'undefined') {
          value = config.defaultLimit;
        }
        if (isNaN(value)) {
          throw new Error('result limit is not a number');
        }
        if (typeof parseInt(value) < config.maxLimit) {
          throw new Error('result limit is too large');
        }
        if (parseInt(value) < 1) {
          throw new Error('limit can not be negative or 0');
        }
        return value;
      });
  }
};

export default function validate(params) {
  return params.map(x => Validation[x]());
}
