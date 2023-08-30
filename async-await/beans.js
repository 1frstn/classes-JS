const shopForBeans = () => {
    return new Promise((resolve,reject)=>{
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
        setTimeout(()=>{
           let randomIndex = Math.floor(Math.random() * beanTypes.length)
           let beanType = beanTypes[randomIndex];
           console.log(`2. I bought ${beanType} beans because they were on sale.`)
           resolve(beanType)
        },1000)
    })
};

let soakTheBeans = (beanType) => {
    return new Promise((resolve, reject) => {
      console.log('Time to soak the beans.');
     setTimeout(()=>{
       console.log(`... The ${beanType} beans are softened.`);
       resolve(true);
       }, 1000);
   });
}
let cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
      console.log('Time to cook the beans.');
      setTimeout(()=>{
        if (isSoftened) {
          console.log('... The beans are cooked!');
          resolve('\n\nDinner is served!');
        }
      }, 1000);
    });
  }

/* function getBeans(){
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
};

getBeans(); */

async function getAsyncBeans(){
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getAsyncBeans()

async function makeBeans (){
    const type = await shopForBeans();
    const isSoft = await soakTheBeans(type);
    const dinner = await cookTheBeans(isSoft);

    console.log(dinner);
}
makeBeans();

/* Cook beans */

let randomSuccess = () =>{
  return Math.random()>.5 ? true : false;
}

let cookBeanSuffle = () =>{
  return new Promise((resolve,reject) =>{
    console.log('Fingers crossed... Putting the Bean Souffle in the oven')
    setTimeout(()=> randomSuccess() ? resolve('Bean Souffle') : reject('Dinner is ruined!'),1000)
  })
}

const checkDinner = async () =>{
   try {
    let resolvedValue = await cookBeanSuffle();
    console.log(resolvedValue);
   } catch (error) {
    console.log(error);
   }
}

checkDinner();

async function serveAgain(){
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()])
  for (let i = 0; i < resultArray.length; i++) {
    console.log(resultArray[i]);
    
  }
}