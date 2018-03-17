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

  it('should return the age of the human in Venus years', function() {
    let earthYears = new Age(10);
    expect(earthYears.venusYears()).toEqual(16.129032258064516);
  });

  it('should return the age of the human in Mars years', function() {
    let earthYears = new Age(10);
    expect(earthYears.marsYears()).toEqual(5.319148936170213);
  });

  it('should return the age of the human in Jupiter years', function() {
    let earthYears = new Age(20);
    expect(earthYears.jupiterYears()).toEqual(1.6863406408094437);
  });

  it('should return the life expectancy on each planet [Mercury, Venus, Mars and Jupiter] for a US female or male', function() {
    let earthYears = new Age(45);
    expect(earthYears.yearsLeftMale()).toEqual([129.16666666666669, 50, 16.48936170212766, 2.6138279932546378]);
    expect(earthYears.yearsLeftFemale()).toEqual([150, 58.064516129032256, 19.148936170212767, 3.0354131534569984]);
  });

  it('should return surpassed years on each planet [Mercury, Venus, Mars and Jupiter] for a US female or male', function() {
    let earthYears = new Age(84);
    expect(earthYears.yearsLeftFemale()).toEqual([12.5, 4.838709677419355, 1.595744680851064, 0.25295109612141653]);
    expect(earthYears.yearsLeftMale()).toEqual([33.33, 12.90, 4.26, 0.67]);
  });

});

describe('Birthdate', function() {
  it('should compare two different dates and determine the difference, in seconds', function() {
    let birthDate = new Birthdate("03/16/2017");
    expect(birthDate.dateDifference()).toEqual(31536000);
  });

});
