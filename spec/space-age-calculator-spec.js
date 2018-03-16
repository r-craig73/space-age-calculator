import { Age } from './../src/space-age-calculator.js';

describe('Age', function() {

  it('should calculate years into seconds', function() {
    let years = new Age(5);
    expect(years.intoSeconds()).toEqual(157680000);
  });



});
