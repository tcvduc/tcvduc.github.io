const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const hasOwnProperty = Object.prototype.hasOwnProperty;

console.log(hasOwnProperty.call(object, "key1"));
console.log(hasOwnProperty.call(object, "key4"));
