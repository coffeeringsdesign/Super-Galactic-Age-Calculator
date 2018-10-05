import Visitor from './../src/userObject.js';

describe ('AgeCalculator', function() {
  it('should test if a visitor enters their date of birth it should return their age in earth years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.earthAge).toEqual(24);
  });
});
