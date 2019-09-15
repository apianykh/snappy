const request = require('supertest');
const app = require('../server');

describe('Get Products', () => {
  it('should get an array', async () => {
    const res = await request(app).get('/api/products').catch(err => null);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe('Get Vendors', () => {
  it('should get an array', async () => {
    const res = await request(app).get('/api/vendors').catch(err => null);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe('Get Promotion', () => {
  it('should get an object', async () => {
    const res = await request(app).get('/api/promotion').catch(err => null);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});