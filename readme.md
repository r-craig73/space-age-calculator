# space_age_calculator

#### by Ron Craig (ron.craig@comcast.net)
##### started 03/16/2018

### GitHub repository: https://github.com/r-craig73/space-age-calculator.git

## Description
### An app calculating a user's age with respect to other planets in the solor system. Life expectancy left on other planets and (hopefully) years beyond life expectancy are calculated.

## Planning
1. Configuration/dependencies
  * JavaScript (object-oriented) and JavaScript Date object.
  * Node package manager (npm): a module bundler to combine several webpacks.
  * webpack and webpack-cli (command line interface): bundle JavaScript files (or other files) to use in a browser. Also capable of packaging any resource or asset.
  * Include a Description of what each dependency does for the programmer.

## Setup/Instructions
    * Install npm ($ npm install).
    * Update npm to version 5.7.1 ($ npm i npm).
    * Initialize npm ($ npm init -y).
    * Create a .gitignore file in the home folder (exclude unnecessary files/folders).
    * Install webpack packages ($ npm install webpack@4.0.1 --save-dev) ($ npm install webpack-cli@2.0.9 --save-dev).

2. Specs
  * Spec 1: Convert a person's name from years into seconds. input: 5 years, output: 157,680,000 seconds.
  * Spec 2: Take two dates and determine the difference, in seconds. input1: 03/14/1973, input2: 03/16/2018 (now-ish), output: ~1,426,896,000 seconds.
  * Spec 3: Return the age of a human in Mercury years (Mercury year = 0.24 Earth years). input: 10 years, output: 41.67 years (41 years, round down)
  * Spec 4: Return the age of a human in Venus years (1 Venus year = 0.62 Earth years). input: 10 years, output: 16.13 years (16 years round down)
  * Spec 5: Return the age of a human in Mars years (1 Mars year = 1.88 Earth years). input: 10 years, output: 5.32 years (5 years round down)
  * Spec 6: Return the age of a human in Jupiter years (1 Jupiter year = 11.86 Earth years). input: 10 years, output: 0.84 years (0 years round down)
  * Spec 7: Determine life expectancy a user has left to live on each planet. Have user input average life expectancy for US male/female. input: 82 years, outputs: You are expected to live 154.17 more years on Mercury; You are expected to live 59.68 more years on Venus; You are expected to live 19.68 more years on Mars; You are expected to live 3.12 more years on Jupiter;
  * Spec 8: If user has already surpassed the average life expectancy, return the number of years the user lived past the life expectancy. input: 84 years, outputs: Congrats, on Mercury you lived 8.33 years longer than average! Live long and prosper!; Congrats, on Venus you lived 3.23 years longer than average! Live long and prosper!; Congrats, on Mars you lived 1.06 years longer than average! Live long and prosper!; Congrats, on Jupiter you lived 0.17 years longer than average! Live long and prosper!;

3. Integration
* In the src folder...
  * space-age-calculator.js: require to code business specs.
  * index.html: require as a template to display the homepage.
  * main.js: require to merge bootstrap, css and javascript coding into the index.html page.
  * styles.css: require to style index.html file.
* In the spec folder...
  * space-age-calculator-spec.js: require to define business specs.
  * /support/jasmine.json: require to TBD

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Known Bugs
### TBD

## Technology Used
* TBD
* TBD

### MIT Licsnse

Copyright (c) 2018 **_RC productions_**
