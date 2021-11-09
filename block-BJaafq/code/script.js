// Adding Two Number

function add(numA, numB) {
  return numA + numB;
}

// Multiplying two number
function multiply(numA, numB) {
  return numA * numB;
}

// Testing Framework

function test(message, cb) {
  try {
    cb();
    console.log("❎ Passed,", message);
  } catch (error) {
    console.error(error);
    console.log("❌ failed,", message);
  }
}

// Assertion Library

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

test("Adding 4 and 2", () => {
  expect(add(4, 2)).toEqual(5);
});
test("Adding 6 and 8", () => {
  expect(add(6, 8)).toEqual(14);
});

test("Multiplying 6 and 8", () => {
  expect(multiply(6, 8)).toEqual(48);
});
