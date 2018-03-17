import { Age } from './../src/space-age-calculator.js';
import { Birthdate } from './../src/space-age-calculator.js';

describe('Age', function() {
  it('should calculate years into seconds', function() {
    let years = new Age(5);
    expect(years.intoSeconds()).toEqual(157680000);
  });

  it('should return the age of the human in Mercury years', function() {
    let earthYears = new Age(10);
    expect(earthYears.mercuryYears()).toEqual(41.66666666666667);
  });

});

describe('Birthdate', function() {
  it('should compare two different dates and determine the difference, in seconds', function() {
    let birthDate = new Birthdate("03/16/2017");
    expect(birthDate.dateDifference()).toEqual(31536000);
  });

});
