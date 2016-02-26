var spaced = require('../spaced');

describe("Utilities", function() {
  it("getUserInput provided", function() {
    expect(typeof spaced.getUserInput).toBe('function');
  });
  it("calcIntervalEF provided", function() {
    expect(typeof spaced.calcIntervalEF).toBe('function');
  });
  it("writeCardFile provided", function() {
    expect(typeof spaced.writeCardFile).toBe('function');
  });

});
