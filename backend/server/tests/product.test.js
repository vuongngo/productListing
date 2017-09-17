import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */
describe('## Product APIs', () => {
  describe('# GET /products', () => {
    it('should return error with invalid query (page or limit)', (done) => {
      request(app)
        .get('/products')
        .query({ limit: -1, page: 2 })
        .expect(422)
        .then((res) => {
          expect(res.body.errors).to.be.an('object');
          expect(JSON.stringify(res.body.errors)).to.contain('limit can not be negative');
          done();
        })
        .catch(done);
    });

    it('should get top ten products', (done) => {
      request(app)
        .get('/products')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('object');
          const list = res.body.list;
          expect(list).to.be.an('array');
          expect(list[0].id).to.equal(1);
          expect(list[list.length - 1].id).to.equal(10);
          done();
        })
        .catch(done);
    });

    it('should get all products (with limit and page)', (done) => {
      request(app)
        .get('/products')
        .query({ limit: 10, page: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('object');
          const list = res.body.list;
          expect(list).to.be.an('array');
          expect(list[0].id).to.equal(11);
          expect(list[list.length - 1].id).to.equal(20);
          done();
        })
        .catch(done);
    });
  });

});
