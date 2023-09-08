/* class ShiftCipher{
    constructor(shift){
      this.shift = shift;
    }
    encrypt(str){
       let encrypt = ''
       for(let i=0;i<str.length;i++){
        if(/[a-zA-Z]/.test(str[i])){
            encrypt += String.fromCharCode(str.charCodeAt(i)+this.shift)
        }else{
            encrypt +=str[i]
        }
       }
       return encrypt.toUpperCase()
    }
    decrypt(str){
      let decrypt = ''
      for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            decrypt += String.fromCharCode(str.charCodeAt(i)-this.shift)
        }else{
            decrypt += str[i]
        }
       
      }
      return decrypt.toLowerCase() 
    }
}

const newCrypt = new ShiftCipher(1);
console.log(newCrypt.encrypt('abc c'));
console.log(newCrypt.decrypt(newCrypt.encrypt('abc c'))); */



const sml = (n) =>{
  let smlst = n[0]
  for (let i = 0; i < n.length; i++) {
    if(smlst<n[i]){
       smlst=n[i]
    }else{
      smlst = n[i]
    }
    
  }
  return smlst
}
console.log(Math.max(1,2,3,42,23,-1));
console.log(Math.min(1,2,3,42,23,-1));
console.log(sml([23,1,4,2,326,0,32,-1]));

const descendingOrder = (n) =>{
  const numToStr = n.toString();
  const numDigArr = [...numToStr].map(Number);
  const descndArr = numDigArr.sort((a,b)=>b-a)
  const newA = parseInt(descndArr.join(''))
  return newA;
  // return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(341267));

const sortDesc = (n) =>{
  const dgitArr = String(n).split('').map(Number);
  let swapped;
  do{
   swapped = false;
   for (let i = 0; i <dgitArr.length ; i++) {
     if (dgitArr[i]<dgitArr[i+1]) {
      let temp = dgitArr[i];
      dgitArr[i] = dgitArr[i+1]
      dgitArr[i+1] = temp
      swapped = true;
     }    
   }
  }while(swapped)
  
 return dgitArr;
}


console.log(sortDesc(12342));
console.log(new Array(4).fill(true));
for (let i = 2; i*i <= 4; i++) {
  console.log(i);  
}

for (let a = 2; a < 10; a++) {
  for (let i = a*2; i < 10; i=i+a) {
    console.log(i);
    
  }
  
}


/* ---------------sieve----------------------------------- */



function siaveE(limit) {
  const primes = [];
  const isPrimes = new Array(limit+1).fill(true)
  for (let p = 2; p*p <= limit; p++) {
    if (isPrimes[p]) {
      for (let a = p*p ; a <=limit ; a+=p) {
        isPrimes[a] = false
        
      }
    }
    
  }
  for (let p = 2; p <= limit; p++) {
    if (isPrimes[p]) {
      primes.push(p)
    }
    
  }
  return primes;
}

console.log(siaveE(23));



/* ----------------------------------- */

function naiveSolution(heights){
  let totalWater=0;
  for (let i = 1; i < heights.length-1; i++) {
    let highestLeft = 0;
    let highestRight = 0;
    for (let l = 0; l <= i; l++) {
      highestLeft = Math.max(highestLeft,heights[l])
      
    }
    for (let r = i; r < heights.length-1; r++) {
      highestRight = Math.max(highestRight,heights[r])

    }
    totalWater += Math.min(highestLeft,highestRight) - heights[i]
  }
  return totalWater;
}
console.log(naiveSolution([4, 2, 1, 3, 0, 1, 2]));



function efficientSolution(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;
  while(leftPointer<rightPointer){
    if(heights[leftPointer]<=heights[rightPointer]){
      leftBound = Math.max(heights[leftPointer],leftBound)
      totalWater +=leftBound - heights[leftPointer];
      leftPointer++; 
    }else{
      rightBound = Math.max(heights[rightPointer],rightBound);
      totalWater += rightBound - heights[rightPointer];
      rightPointer--;
    }
    
  }
  return totalWater
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(efficientSolution(testArray));


console.log([2,5,1,3,4].sort((a,b)=>{
  console.log("a b",[2,5,1,3,4].indexOf(a),b);
  return a-b
}));

/* --------------fibonnaci-------------- */


const memo = {};
const fibonacci = num => {
  let returnValue;
  
  if (memo[num]) {
    returnValue = memo[num];
  } else if (num === 0 || num === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci(num - 1) + fibonacci(num - 2);
    memo[num] = returnValue;
  }console.log(memo)
  return returnValue;
}

console.log(fibonacci(7));

/* ------------------Knapsack Problem--------------- */

const recursiveKnapsack = (weightCap,weights,values,i) =>{
  if(weightCap===0|i===0){
    return 0
  }else if(weights[i-1]>weightCap){
    return recursiveKnapsack(weightCap,weights,values,i-1);
  }else{
    const includesItem = values[i-1] + recursiveKnapsack(
      weightCap-weights[i-1],weights,values,i-1);
    const exludesItem = recursiveKnapsack(weightCap,weights,values,i-1)
    return Math.max(includesItem,exludesItem)  
  }
}
/*---------- Dynamic Solution ----------*/

const dynamicKnapsack = (weightCap,weights,values) =>{
  const numItem = weights.length;
  const matrix = new Array(numItem);
  for (let i = 0; i <= numItem ; i++) {
      
    matrix[i] = new Array(weightCap + 1);
    for (let weight = 0; weight < weightCap; weight++) {
      
      if(i===0|weight===0){
        matrix[i][weight] = 0;
      }else if(weights[i-1]<=weight){
        const includesItem = values[i-1] +matrix[i-1]
        [weight -weights[i-1]];
        const exludesItem = matrix[i-1][weight]
        matrix[i][weight] = Math.max(includesItem,exludesItem);
      }else{
        matrix[i][weight] = matrix[i-1][weight]
      }
      
    }
  }
  return matrix[numItem][weightCap];
}


/* ssss */

function knapsackDP(weightCap, weights, values) {
  const n = weights.length;
  // Create a 2D array to store the results of subproblems.
  const dp = new Array(n + 1).fill(null).map(() => new Array(weightCap + 1).fill(0));

  // Fill the dp table using a bottom-up approach.
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= weightCap; w++) {
      if (weights[i - 1] <= w) {
        // If the current item can be included, choose the maximum value
        // between including it and excluding it.
        dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
      } else {
        // If the current item's weight exceeds the current weight capacity,
        // exclude it and inherit the previous value.
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // The maximum value is found in dp[n][weightCap].
  return dp[n][weightCap];
}

// Example usage:
const weights = [2, 2, 3, 5, 1];
const values = [2, 3, 4, 7, 1];
const weightCap = 10;
const maxKnapsackValue = knapsackDP(weightCap, weights, values);
console.log("Maximum Knapsack Value:", maxKnapsackValue);
/* ssss */