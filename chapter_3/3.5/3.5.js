describe("Возводит 5 в степень 1", function() {
    let x = 5;
    let result = x;

    it("Возводит 5 в степень 1", function() {
        assert.equal(pow(x, 1), result);
    });

    it("Возводит 5 в степень 2", function() {
        result *= x;

        assert.equal(pow(x, 2), result);
    });

    it("Возводит 5 в степень 3", function() {
        result *= x;

        assert.equal(pow(x, 3), result);
    });
});


