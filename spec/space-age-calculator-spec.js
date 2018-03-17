import { Age } from './../src/space-age-calculator.js';
import { Birthdate } from './../src/space-age-calculator.js';

describe('Age', function() {
  it('should calculate years into seconds', function() {
    let years = new Age(5);
    expect(years.intoSeconds()).toEqual(157680000);
  });

  it('should compare two different dates and determine the difference, in seconds', function() {
    let birthDate = new Birthdate("03/16/2017");
    expect(birthDate.dateDifference()).toEqual(31536000);
  });


});
