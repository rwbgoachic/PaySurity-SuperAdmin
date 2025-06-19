import request from 'supertest';
import handler from '../src/pages/api/admin/roles';
describe('GET /api/admin/roles', () => {
  it('should return an array of roles', async () => {
    const res = await request(handler).get('/api/admin/roles');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
