const request = require('supertest');
const app = require('../../app');

// Test Check Name available, note: user 12131456456446 shouldn't exist
describe("GET /user/name-available/testing", () => {
    it('respond with available', done => {
        request(app)
            .get('/user/name-available/12131456456446')
            .expect(200)
            .expect({
                "name": "12131456456446",
                "available": true
            }, done);
    });
    it('respond with unavailable', done => {
        request(app)
            .get('/user/name-available/admin')
            .expect(200)
            .expect({
                "name": "admin",
                "available": false
            }, done);
    });
});