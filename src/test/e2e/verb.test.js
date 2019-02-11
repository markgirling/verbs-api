const supertest = require('supertest');
const app = require('../../app');
const hablar = require('./fixtures/hablar.json');
const ir = require('./fixtures/ir.json');

describe('/verb route', () => {
  let server;

  beforeAll(async () => {
    server = await app();
    server.listen();
  });

  afterAll(async () => {
    await server.close();
  });

  it('outputs info and conjugations for regular verbs', async () => {
    const response = await supertest(server).get('/verb/hablar');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(hablar);
  });

  it('outputs info and conjugations for irregular verbs', async () => {
    const response = await supertest(server).get('/verb/ir');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(ir);
  });
});
