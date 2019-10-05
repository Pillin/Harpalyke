const request = require("supertest");
const { assert } = require("chai");

const { app } = require("../../server");

const URL = "/api/divides";

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
        assert.equal(res.body.result, 0.5);
        assert.equal(res.body.status, "success");
        done();
      });
  });

  it("it shoud return status code 400 if we dosent send anything", done => {
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

        done();
      });
  });
});
