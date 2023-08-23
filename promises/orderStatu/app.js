const store = {
    sunglasses: {
      inventory: 817, 
      cost: 9.99
    },
    pants: {
      inventory: 236, 
      cost: 7.99
    },
    bags: {
      inventory: 17, 
      cost: 12.99
    }
};


const checkInventory = (order) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let itemsArr = order.items;
            let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1])
            if(inStock){
                let total = 0 ;
                itemsArr.forEach(item =>{
                    total += item[1]*store[item[0]].cost
                });
                console.log(total);
                console.log(`All of the items are in stock. The total cost of the order is ${total}.`)
                resolve([order,total])
            }else {
                reject(`The order could not be completed because some items are sold out.`)
            }
        },generateRadnomDelay())
    })
}

const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    console.log(total); 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let hasEnoughMoney = order.giftcardBalance >= total;
            if(hasEnoughMoney){
                console.log(`Payment processed with giftcard. Generating shipping label.`);
                let trackingNumber = generateTracinkgNumber();
                resolve([order,trackingNumber]);
            }else{
                reject(`Cannot process order: giftcard balance was insufficient.`);
            }
        },generateRadnomDelay())
    })
}

const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trakingNum = responseArray[1];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`The order has been shipped. The tracking number is: ${trakingNum}.`);
        },generateRadnomDelay())
    })
}


const generateRadnomDelay = () =>{
    return Math.ceil(Math.random()*2000);
};

const generateTracinkgNumber = () => {
    return Math.round(Math.random()*1000000);
};

/* Apppp */

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 790.82
};

checkInventory(order)
.then((resolvedValueArray)=>{
    return processPayment(resolvedValueArray)
})
.then((resolvedValueArray)=>{
    return shipOrder(resolvedValueArray)
})
.then((successMessage)=>{
    console.log(successMessage);
})
.catch((errorMessage)=>{
    console.log(errorMessage);
})
