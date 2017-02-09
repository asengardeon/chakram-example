var chakram = require('chakram'),
    expect = chakram.expect;

describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function () {
        chakram.get("http://httpbin.org/get?test=chakram").then(function (response) { //use the "then" to wait request response
            console.log(response);
            expect(response).to.have.status(200);
            expect(response).to.have.header("content-type", "application/json");
            expect(response).not.to.be.encoded.with.gzip;
            expect(response).to.comprise.of.json({
                args: {
                    test: "chakram"
                }
            });
            return chakram.wait();
        });

    });
});