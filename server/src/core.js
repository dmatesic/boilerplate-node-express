export function init() {
  return new Promise(function promise(resolve) {
    resolve();
  });
}

export function getTestData() {
  return [{
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
