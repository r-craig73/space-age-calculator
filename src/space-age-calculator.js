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

Age.prototype.intoSeconds = function() {
  let age = this.userAge;
  let result = age * days * hours * minutes * seconds;
  if (isNaN(result)) {
    return "unable to compute";
  } else {
    return result;
  }
};

Age.prototype.mercuryYears = function() {
  let age = this.userAge;
  let mercuryAge = age / mercury;
  let result = mercuryAge;
  if (isNaN(result)) {
    return "unable to compute";
  } else {
    return result;
  }
};

Age.prototype.venusYears = function() {
  let age = this.userAge;
  let venusAge = age / venus;
  let result = venusAge;
  if (isNaN(result)) {
    return "unable to compute";
  } else {
    return result;
  }
};

Age.prototype.marsYears = function() {
  let age = this.userAge;
  let marsAge = age / mars;
  let result = marsAge;
  if (isNaN(result)) {
    return "unable to compute";
  } else {
    return result;
  }
};

Age.prototype.jupiterYears = function() {

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
