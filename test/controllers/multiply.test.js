const request = require("supertest");
const { assert } = require("chai");

const { app } = require("../../server");

const URL = "/api/multiplies";

describe(`POST ${URL}`, () => {
  it("it shoud return status code 200 and result", done => {
    request(app)
      .post(URL)
      .type("form")
      .set("Accept", "application/json")
      .send({ firstValue: 1, secondValue: 2 })
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) done(err);
        assert.exists(res.body);
        assert.equal(res.body.result, 2);
        assert.equal(res.body.status, "success");
        done();
      });
  });

  it("it shoud return status code 400 if we doesn't send anything", done => {
    request(app)
      .post(URL)
      .set("Accept", "application/json")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) done(err);
        assert.exists(res.body);

        assert.equal(res.body.status, "error");
        assert.exists(res.body.errors);
        assert.equal(res.body.errors.length, 2);
        assert.equal(res.body.errors[0].name, "firstValue");
        assert.equal(res.body.errors[0].message, "The value isn't a number");
        assert.equal(res.body.errors[1].name, "secondValue");
        assert.equal(res.body.errors[1].message, "The value isn't a number");

        done();
      });
  });

  it("it shoud return status code 200 if we send the second value equal zero", done => {
    request(app)
      .post(URL)
      .set("Accept", "application/json")
      .send({ firstValue: 1, secondValue: 0 })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        assert.exists(res.body);
        assert.equal(res.body.result, 0);
        assert.equal(res.body.status, "success");
        done();
      });
  });
});
