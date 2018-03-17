export function Age(userAge) {
  this.userAge = userAge;
}

export function Birthdate(userBirthdate) {
  this.userBirthdate = userBirthdate;
}

const days = 365;
const hours = 24;
const minutes = 60;
const seconds = 60;
const milliseconds = 1000;
const mercury = 0.24;
const venus = 0.62;
const mars = 1.88;
const jupiter = 11.86;
const usMale = 76;
const usFemale = 81;

Age.prototype.intoSeconds = function() {
  let age = this.userAge;
  let result = age * days * hours * minutes * seconds;
  if(isNaN(result)) {
    return "unable to compute";
  }
  return result;
};

Age.prototype.mercuryYears = function() {
  let age = this.userAge;
  let mercuryAge = age / mercury;
  let result = mercuryAge;
  if(isNaN(result)) {
    return "unable to compute";
  }
  return result;
};

Age.prototype.venusYears = function() {
  let age = this.userAge;
  let venusAge = age / venus;
  let result = venusAge;
  if(isNaN(result)) {
    return "unable to compute";
  }
  return result;
};

Age.prototype.marsYears = function() {
  let age = this.userAge;
  let marsAge = age / mars;
  let result = marsAge;
  if(isNaN(result)) {
    return "unable to compute";
  }
  return result;
};

Age.prototype.jupiterYears = function() {
  let age = this.userAge;
  let jupiterAge = age / jupiter;
  let result = jupiterAge;
  if(isNaN(result)) {
    return "unable to compute";
  }
  return result;
};

Age.prototype.yearsLeftMale = function() {
  let age = this.userAge;
  let results = [];
  let lifeLeft = usMale - age;
  let mercuryLeft = (lifeLeft / mercury);
  results.push(mercuryLeft);
  let venusLeft = (lifeLeft / venus);
  results.push(venusLeft);
  let marsLeft = (lifeLeft / mars);
  results.push(marsLeft);
  let jupiterLeft = (lifeLeft / jupiter);
  results.push(jupiterLeft);
  return results;
};

Age.prototype.yearsLeftFemale = function() {
  let age = this.userAge;
  let results = [];
  let lifeLeft = usFemale - age;
  let mercuryLeft = (lifeLeft / mercury);
  results.push(mercuryLeft);
  let venusLeft = (lifeLeft / venus);
  results.push(venusLeft);
  let marsLeft = (lifeLeft / mars);
  results.push(marsLeft);
  let jupiterLeft = (lifeLeft / jupiter);
  results.push(jupiterLeft);
  return results;
};

Birthdate.prototype.dateDifference = function() {
  let dateOfBirth = this.userBirthdate;
  let birth = new Date(dateOfBirth);
  let currentTime = new Date("03/16/2018");
  let birthSeconds = birth.getTime()/milliseconds;
  let currentSeconds = currentTime.getTime()/milliseconds;
  let difference = currentSeconds - birthSeconds;
  if (isNaN(difference)) {
    return "unable to compute";
  } else {
    return difference;
  }
};
