import supertest from 'supertest';
import app from '../src/index';

describe('GET /convert', () => {
  it('tests the functionality of the /convert endpoint', async () => {
    const request = supertest(app);
    const response = await request.get('/convert');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.error).toBe(false);
    expect(response.redirect).toBe(false);
    expect(response.headers['content-type']).toEqual(
      'application/json; charset=utf-8'
    );
  });
});
