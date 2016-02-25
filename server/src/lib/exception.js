// Insipred from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
export function ConflictError(message) {
  this.name = 'ConflictError';
  this.message = message;
  this.stack = (new Error()).stack;
}
ConflictError.prototype = Object.create(Error.prototype);
ConflictError.prototype.constructor = ConflictError;
