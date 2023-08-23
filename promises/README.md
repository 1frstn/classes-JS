# Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

# Pending: The initial state— the operation has not completed yet.
# Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
# Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
# We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.