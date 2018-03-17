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

Age.prototype.intoSeconds = function() {
  let age = this.userAge;
  let result = age * days * hours * minutes * seconds;
  if (isNaN(result)) {
    return "unable to compute";
  } else {
    return result;
  }
};

Birthdate.prototype.dateDifference = function() {
  let dateOfBirth = this.userBirthdate;
  let birth = new Date(dateOfBirth);
  let currentTime = new Date("03/16/2018");
  console.log(currentTime);
  let birthSeconds = birth.getTime()/milliseconds;
  console.log(birthSeconds);
  let currentSeconds = currentTime.getTime()/milliseconds;
  console.log(currentSeconds);
  let difference = currentSeconds - birthSeconds;
  console.log(difference);
  if (isNaN(difference)) {
    return "unable to compute";
  } else {
    return difference;
  }
};
