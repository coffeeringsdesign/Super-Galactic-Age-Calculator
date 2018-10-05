import Visitor from './userObject.js';

describe ('interstellar age calculator', function() {
  it('should test if a visitor enters their date of birth it should return their age in earth years') {
    let userAge = new Visitor(36);
    expect(visitor1.earthAge).toEqual(36);
  });

})
