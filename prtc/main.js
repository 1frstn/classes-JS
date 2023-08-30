const reverseArray = (arr) => {
    let newArr = []
    for(let i=(arr.length-1);i>=0;i--){
       newArr.push(arr[i]) 
    }
    return newArr
}

console.log(reverseArray([2,4,5,6]));

/* 0000000000000000000000000000000 */

const smallestPowerOfTwo = (arr) => {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        let num = arr[i];
        
        let j = 1;
        while (j<num) {
            j = j*2
        }
        resultArr.push(j)
    }
    return resultArr;
}

console.log(smallestPowerOfTwo([5,3,9,30]));

/* 11111111111111111111111111111111111 */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arr){
  arr.forEach(politelyDecline)
}

const acceptEverything=(arr)=>{
  arr.forEach(e=>console.log(`Ok, I guess I will eat some ${e}.`))
}

/* 000000000000000000000000000000000000 */

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = nums => nums.map(toSquare)

/* 11111111111111111111111111111111111 */


const sortYears = arr => arr.sort((a,b)=>b-a)





// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

/* 000000000000000000000000000000000000 */


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

// const justCoolStuff = (arr1,arr2) => arr1.filter(i => arr2.includes(i))

function justCoolStuff(arr1,arr2){
    function isArr2(item){
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === item) {
                return true
            }
            
        }
        return false
    }
    return arr1.filter(isArr2)
} 

console.log(justCoolStuff(myStuff, coolStuff))

/* 111111111111111111111111111111111111111111 */

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

//const isTheDinnerVegan = arr => arr.every(food => food.source ==='plant')

const isTheDinnerVegan = (arr) =>{

    const isVegan = food => food.source === 'plant';
    for (let i = 0; i < arr.length; i++) {
        if(!isVegan(arr[i])){
            return false
        }
    
    }
    return true
}

console.log(isTheDinnerVegan(dinner))

/* 0000000000000000000000000000000000000000000 */

const med = (arr) =>{
    let mod ;
    let frequentyObject = {}
    let maxFrequancy = 0 
    for (let num of arr) {
        frequentyObject[num] = (frequentyObject[num] || 0)+1
        if(frequentyObject[num]>maxFrequancy){
            maxFrequancy = frequentyObject[num]
            mod = num
        }
        
    }
    return mod
}

console.log(med([21,4,2,3,23,23,2,4]));

const medd = arr => {
    const result = arr.reduce((acc,crr)=>{
        acc[crr] = acc[crr] ? acc[crr] +1 : 1;
        if(acc[crr]>acc.max){
            acc.max = acc[crr];
            acc.mode = [crr] 
        }else if(acc[crr]===acc.max && !acc.mode.includes(crr)){
            acc.mode.push(crr)
        }
        return acc
    },{max:1, mode:[]})
    return result.mode
}

console.log(medd([21,4,2,3,23,23,2,4]));

const Medi = (arr) =>{
    let frequencyMap = {};
    let maxFrequency = 0;
    let mode;

    for(num of arr){
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if(frequencyMap[num]>maxFrequency){
            maxFrequency = frequencyMap[num]
            mode = [num]
        }else if(frequencyMap[num] = maxFrequency && !mode.includes(num)){
            mode.push(num)
        } 
    }

    return mode
}

console.log(Medi([12,3,2,23,32,32,32,322,3,33,33,33,33,33]));

/* 1111111111111111111111111111111111111111111111111111111111111 */

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
const sortSpeciesByTeeth = (arr) => {
  let newArr = []
  let rA = []
  for(i=0;i<arr.length;i++){
    newArr.push(arr[i].numTeeth)
  }
  console.log(newArr.sort((a,b)=>a-b))
  for(i=0;i<arr.length;i++){

   for(a=0;a<arr.length;a++){
    if(newArr[i] === arr[a].numTeeth){
      rA.push(arr[a])
    }
  }

  }
  return  rA
}

const sortSpeciesByTeethEasy = arr => arr.sort((a,b)=>a.numTeeth - b.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray))
console.log("EASY",sortSpeciesByTeethEasy(speciesArray));

/* 0000000000000000000000000000000000000000000000000000000000000000000000000000 */


//const findMyKeys = arr => arr.includes('keys') ? arr.indexOf('keys') : -1;

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
 Alternate solution:
 As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

/* 111111111111111111111111111111111111111111111111111111111111 */

const factorial = num => {
    let answ = 1;
    for (let i = 0; i <= num; i++) {
        answ *= i;
        
    };
    return answ;
}

/* 0000000000000000000000000000000000000000000000000000000000000 */

const moda = arr =>{
    let frequencyMap = {};
    let max = 0;
    let mode = [];
    for(num of arr){
        frequencyMap[num] = (frequencyMap[num] | 0) + 1;
        if(frequencyMap[num]>max){
            max = frequencyMap[num];
            mode = [num]
        }else if(frequencyMap[num] === max & !mode.includes(num)){
            mode.push(num)
        }  
    }
    return mode
}

console.log("bin",moda([2,4,53,3,3,4,42,2,23,2,3]));

const subLength = (a,b) =>{
    let frequencyMap = {};
    
    for(let chr of a){
        frequencyMap[chr] = (frequencyMap[chr] | 0) + 1;
    }
    console.log(frequencyMap);
    if(frequencyMap[b]!==2){
        return 0
    }
    let lstI; 
    let vl = a.indexOf(b) 
    for (let i = vl +1 ; i < a.length; i++) {
        if(a[i] === b){
            console.log(i);
            lstI = i
        }
        
    }
    return lstI - vl + 1
    console.log(vl);
    console.log(lstI,"h");
}

console.log(subLength('safdsf','s'));

const subLgn = (a,b)=>{
    let firstIndex = -1;
    let secondIndex = -1;
    for (let i = 0; i < a.length; i++) {
      if(a[i] === b){
        if(firstIndex === -1){
            firstIndex = i
        }else if(secondIndex === -1){
            secondIndex = i
        }
      }  
        
    }
    return secondIndex - firstIndex + 1
}
console.log(subLgn('safdsf','s'));


const subLth = (str, char) => {
    let charCount = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        charCount++;
        if (charCount > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };

  /* 1111111111111111111111111111111111111111111111111 */
  const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i == list.length - 2){
      listString += ' and ';
    }
  }
  
  return listString;
}

  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, 
  {item: 'Rigatoni'}] ));

  /* 000000000000000000000000000000000000000000000000000000 */