function luhnAlgorithm(input) {
    // Convert input to an array of digits
    const digits = input.split('').map(Number);
  
    // Double every second digit from the right
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      let doubled = digits[i] * 2;
      if (doubled > 9) {
        doubled -= 9;
      }
      digits[i] = doubled;
    }
  
    // Sum all the digits
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
  
    // Check if the sum is divisible by 10
    return sum % 10 === 0;
}
  
// Test with a credit card number
const creditCardNumber = '4111111111111111';
const isValid = luhnAlgorithm(creditCardNumber);

if (isValid) {
console.log('Valid credit card number.');
} else {
console.log('Invalid credit card number.');
}



function validateCred(arr){
    for(let i=arr.length-2;i>=0;i-=2){
      let double = arr[i]*2;
      if(double>9){
        double -= 9;
      }
      arr[i] = double;
    }
    return arr
}

console.log(validateCred([2,12,3,1]));