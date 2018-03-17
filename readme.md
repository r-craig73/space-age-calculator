# space_age_calculator

#### by Ron Craig (ron.craig@comcast.net)
##### started 03/16/2018

### GitHub repository: https://github.com/r-craig73/space-age-calculator.git

## Description
### An app calculating a user's age with respect to other planets in the solor system. Life expectancy left on other planets and (hopefully) years beyond life expectancy are calculated.

## Business Specifications
  * Spec 1: Convert a person's name from years into seconds.
    * Input: 5 years
    * Output: 157680000 seconds
  * Spec 2: Take two dates and determine the difference, in seconds.
    * Input #1: 03/16/2018 (midnight)
    * Input #2: 03/16/2017 (midnight)
    * Output: 31536000 seconds.
  * Spec 3: Return the age of a human in Mercury years (Mercury year = 0.24 Earth years).
    * Input: 10 years
    * Output: 41.67 years
  * Spec 4: Return the age of a human in Venus years (1 Venus year = 0.62 Earth years).
    * Input: 10 years
    * Output: 16.13 years
  * Spec 5: Return the age of a human in Mars years (1 Mars year = 1.88 Earth years).
    * Input: 10 years
    * Output: 5.32 years
  * Spec 6: Return the age of a human in Jupiter years (1 Jupiter year = 11.86 Earth years).
    * Input: 10 years
    * Output: 0.84 years
  * Spec 7: Determine life expectancy a user has left to live on each planet. Have user input average life expectancy for US male (76 years)/female (81 years) [source: https://www.statista.com/statistics/274513/life-expectancy-in-north-america/ ].
    * Input #1: 45 year old US male
    * Input #2: 45 year old US female
    * Outputs #1: As a US male, you are expected to live 129.17 more years on Mercury.; As a US male, you are expected to live 50.00 more years on Venus.; As a US male, you are expected to live 16.49 more years on Mars.; As a US male, you are expected to live 2.61 more years on Jupiter.
    * Outputs #2: As a US female, you are expected to live 150.00 more years on Mercury.; As a US female, you are expected to live 58.06 more years on Venus.; As a US female, you are expected to live 19.15 more years on Mars.; As a US female, you are expected to live 3.04 more years on Jupiter.
  * Spec 8: If user has already surpassed the average life expectancy, return the number of years the user lived past the life expectancy.
    * Input #1: 84 year old US female
    * Input #2: 84 year old US male
    * Outputs #1: Congrats, on Mercury you lived 12.50 years longer than an average US female!; Congrats, on Venus you lived 4.84 years longer than an average US female!; Congrats, on Mars you lived 1.60 years longer  than an average US female!; Congrats, on Jupiter you lived 0.25 years longer than an average US female!
    * Outputs #2: Congrats, on Mercury you lived 33.33 years longer than an average US male!; Congrats, on Venus you lived 12.90 years longer than an average US male!; Congrats, on Mars you lived 4.26 years longer  than an average US male!; Congrats, on Jupiter you lived 0.67 years longer than an average US male!

## Configuration/dependencies
  * JavaScript (object-oriented) and JavaScript Date object.
  * Node package manager (npm): a module bundler to combine several webpacks.
  * Webpack and webpack-cli (command line interface): bundle JavaScript files (or other files) to use in a browser. Also capable of packaging any resource or asset.
  * CleanWebpack plugin: npm dependent, cleanup dist (distribution folder).
  * Minifying and HTML webpack plugins: npm dependent, minimize coding for faster page loading.
  * Webpack development server: npm dependent, can run a virtual server on the logic page.
  * Install eslint webpack: npm dependent, a realtime JavaScript compiler and debugger.
  * jQuery: npm dependent, add jQuery commands to the webpack.
  * Boostrap: npm dependent, add Bootstrap commands to the webpack.
  * Jasmine: npm dependent, provide business-side BBD testing.
  * Karma: npm dependent, a test runner to verify business-side BBD testing.
  * Include a Description of what each dependency does for the programmer.

## Folder and file integration
* In the spec folder...
  * space-age-calculator-spec.js: require to define business specs.
* In the spec/support folder...
  * /support/jasmine.json: require to find JS files in certain folders.
* In the src folder...
  * space-age-calculator.js: require to code business specs.
  * index.html: require as a template to display the homepage.
  * main.js: require to merge bootstrap, css and javascript coding into the index.html page.
  * styles.css: require to style the index.html file.

## Known Bugs
### While running Karma...
#### A DEPRECIATION error: Chrome 65.0.3325 (Mac OS X 10.13.3) ERROR: 'DEPRECATION: The catchExceptions option is deprecated and will be replaced with stopOnSpecFailure in Jasmine 3.0'
#### Karma compiler is unstable after 2-3 trials.
### While using JavaScript...
#### Unstable JavaScript calculations dividing results to a value less than 15 decimal digits.  The current workaround is to use a parenthesis to close the calculation.

## Technology Used
* Node Package Manager (organizing webpacks and dependencies)
* Jasmine (BDD testing)
* Karma (development)

## Setup/Instructions
  * Install npm ($ npm install).
  * Update npm to version 5.7.1 ($ npm i npm).
  * Initialize npm ($ npm init -y).
  * Create a .gitignore file in the home folder (exclude unnecessary files/folders going into the repository).
  * Install webpack packages ($ npm install webpack@4.0.1 --save-dev) ($ npm install webpack-cli@2.0.9 --save-dev).
  * Add dist and sec folders to top level.
  * Add index.html, main.js and project.js files to bundle JavaScript webpack ($ npm run build).
  * Install CSS packages by installing webpacks ($ npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev) and edit file webpack.config.js.
  * Install HTML webpack to compress HTML code ($ npm install html-webpack-plugin@3.0.6 --save-dev) and edit webpack.config.js file.
  * Install CleanWebpack plugin to clean up the dist folder ($ npm install clean-webpack-plugin@0.1.18 --save-dev) and edit webpack.config.js file.
  * Install Minifying plugin to the bare minimum coding to read the file faster. ($ npm install uglifyjs-webpack-plugin@1.2.2 --save-dev) and edit webpack.config.js file.
  * Install webpack development server ($ npm install webpack-dev-server@3.1.0 --save-dev) and edit webpack.config.js and package.json files.
  * Install eslint, a JavaScript linter webpack ($ npm install eslint@4.18.2 --save-dev) ($ npm install eslint-loader@2.0.0 --save-dev), edit webpack.config.js and create an .eslintrc file.
  * Install jQuery dependency ($ npm install jquery --save), edit main.js file and remove scripts tap for jQuery.
  * Install bootstrap dependency ($ npm install popper.js --save) ($ npm install bootstrap --save) and edit src/main.js file.
  * Setup Jasmine buy installing Node module, helper package and initialization ($ npm install jasmine-core@2.99.0 --save-dev) ($ npm install jasmine@3.1.0 --save-dev) ($ ./node_modules/.bin/jasmine init) and update package.json file.
  * Install and setup Karma webpack ($ npm install karma@2.0.0 --save-dev). Add a package that will make Karma and Jasmine work together ($ npm install karma-jasmine@1.1.1 --save-dev). Install Chrome launcher ($ npm install karma-chrome-launcher@2.2.0 --save-dev).  Install Karma from the CLI ($ npm install karma-cli@1.0.1 --save-dev). Install several packages in order for Karma can understand other packages ($ npm install karma-webpack@2.0.13 --save-dev) ($ npm install karma-jquery@0.2.2 --save-dev) ($ npm install karma-jasmine-html-reporter@0.2.2 --save-dev) ($ karma init) and edit karma.conf.js file.

### MIT License

Copyright (c) 2018 **_RC productions_**

###### Planning [ONGOING]
  1. UX/UI
    * Add UI to application.
    * Include and modify bootstrap/materialize/Sass etc.
    * Add a solar theme background

  2. Polish
    * Refactor JS code.
    * Improve Readme.
