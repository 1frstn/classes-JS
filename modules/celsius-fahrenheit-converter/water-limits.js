
const {celsiusToFehrenheit} = require('./converters')
  
const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFehrenheit(freezingPointC);
const boilingPointF = celsiusToFehrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);