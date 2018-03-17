export function Age(userAge) {
  this.userAge = userAge;
}

Age.prototype.intoSeconds = function() {
  const days = 365;
  const hours = 24;
  const minutes = 60;
  const seconds = 60;
  let age = this.userAge;
  let result = age * days * hours * minutes * seconds;
  return result;
};

Age.prototype.dateDifference = function() {

};
