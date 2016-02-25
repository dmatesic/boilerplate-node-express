let testData = [];

export function init() {
  testData = [{
    firstName: 'Troy',
    lastName: 'Smith',
  }, {
    firstName: 'Braxton',
    lastName: 'Miller',
  }, {
    firstName: 'JT',
    lastName: 'Barrett',
  }];
}

export function get() {
  return testData;
}
