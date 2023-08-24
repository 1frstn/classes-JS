function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
}
  
withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

async function withAsync (num){

    const resolvedValue = await num === 0 ? "zero" : "not zero"
    return resolvedValue
}

/* Appp */

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};


function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}

async function announceDinner(){
    const meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();
