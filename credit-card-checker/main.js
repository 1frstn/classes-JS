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
  let sum = 0;  
  for(let i=arr.length-1;i>=0;i-=1){
    let crrVal = arr[i]      
      if((arr.length -1 -i) % 2 === 1){
        crrVal*2 
        if(crrVal>9){
          crrVal -= 9;
        }
      }
      
    }
    sum+=crrVal
    return arr
}

console.log(validateCred([1,8,1,0,1]));

/* sssssssssssssssssssssssssssssssssssss */

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr){
  let sum = 0;
  let isSecondDigit = false;
  for(let i=arr.length-1;i>=0;i-=1){
    let doubled = 0;
    if(isSecondDigit){
      doubled = arr[i]*2
      if(doubled > 9){
        doubled -= 9;
        }
        sum +=doubled;
    }else if(!isSecondDigit){
      sum+=arr[i]
    }
    isSecondDigit = !isSecondDigit
  }
  return (sum % 10 === 0) ; 
}

const findInvalidCards = (batch) =>{
  const invalidCards = []
  for(i=0;i<batch.length;i++){
    if(!validateCred(batch[i])){
      invalidCards.push(batch[i])
    }
  }
  return invalidCards;
}
const invalidCards = findInvalidCards(batch) 
console.log(findInvalidCards(batch))

function idInvalidCardCompanies(invalidCards){
  const invalidCardCompanies = [];
  const frequencyMap = {}
  for(i=0;i<invalidCards.length;i++){
    if(invalidCards[i][0] === 3){
        if(invalidCardCompanies.indexOf('Amex')===-1){
         invalidCardCompanies.push('Amex')
         frequencyMap['Amex'] 
        }
    }else if(invalidCards[i][0] === 4){
        if(invalidCardCompanies.indexOf('Visa') === -1){
         invalidCardCompanies.push('Visa') 
        }
    }else if(invalidCards[i][0] === 5){
        if(invalidCardCompanies.indexOf('Mastercard') === -1){
         invalidCardCompanies.push('Mastercard') 
        }
    }else if(invalidCards[i][0] === 6){
        if(invalidCardCompanies.indexOf('Discover')===-1){
         invalidCardCompanies.push('Discover') 
        }
    }else {
      throw new Error('Company not found')
    }
  }
  return invalidCardCompanies
}

console.log(idInvalidCardCompanies(invalidCards))
