import Visitor from './../src/userObject.js';

describe ('AgeCalculator', function() {
  it('should test if a visitor enters their age it should return their age in earth years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.earthAge).toEqual(24);
  });

  it('should test if a visitor enters their age it should return their age in mercury years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.mercuryAge).toEqual(visitor1.earthAge/.24);
  });

  it('should test if a visitor enters their age it should return their age in venus years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.venusAge).toEqual(visitor1.earthAge/.62);
  });

  it('should test if a visitor enters their age it should return their age in mars years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.marsAge).toEqual(visitor1.earthAge/1.88);
  });

  it('should test if a visitor enters their age it should return their age in jupiter years', function() {
    let visitor1 = new Visitor(24);
    expect(visitor1.jupiterAge).toEqual(visitor1.earthAge/11.86);
  });

  it('should test if a visitor enters their age and life expectancy it determines how many earth years left they left', function() {
    let visitor1 = new Visitor(24, 99);
    expect(visitor1.earthLifeRemaining).toEqual(75);
  });

  it('should test if a visitor enters their age and life expectancy it determines how many mercury years left they left', function() {
    let visitor1 = new Visitor(24, 99);
    expect(visitor1.mercuryLifeRemaining).toEqual(75);
  });

  it('should test if a visitor enters their age and life expectancy it determines how many earth years left they left', function() {
    let visitor1 = new Visitor(24, 99);
    expect(visitor1.venusLifeRemaining).toEqual(75);
  });

  it('should test if a visitor enters their age and life expectancy it determines how many earth years left they left', function() {
    let visitor1 = new Visitor(24, 99);
    expect(visitor1.marsLifeRemaining).toEqual(75);
  });

  it('should test if a visitor enters their age and life expectancy it determines how many earth years left they left', function() {
    let visitor1 = new Visitor(24, 99);
    expect(visitor1.jupiterLifeRemaining).toEqual(75);
  });


});
