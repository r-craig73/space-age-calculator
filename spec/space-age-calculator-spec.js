import { Age } from './../src/space-age-calculator.js';

describe('Age', function() {
  it('should calculate years into seconds', function() {
    let years = new Age(5);
    expect(years.intoSeconds()).toEqual(157680000);
  });

  it('should compare two different dates and determine the difference, in seconds', function() {
    let date1 = new Age(6);
    let date2 = new Age(5);
    expect(dateDifference()).toEqual(31536000);
  });


});
