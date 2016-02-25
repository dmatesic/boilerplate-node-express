// TODO: Error handling

import faker from 'faker';
import { merge } from 'lodash';
import uuid from 'node-uuid';

const contacts = {};

function generateFakeContact() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
  };
}

export function create(contact) {
  const id = uuid.v1();
  contacts[id] = contact;

  return id;
}

export function get(id) {
  if (id) return contacts[id];
  return contacts;
}

export function update({ id, body }) {
  contacts[id] = body;
}

export function patch({ id, body }) {
  contacts[id] = merge(contacts[id], body);
}

export function remove(id) {
  delete contacts[id];
}

export function init(numberOfFakeContacts = 10) {
  for (let i = 0; i < numberOfFakeContacts; i++) {
    create(generateFakeContact());
  }
}
