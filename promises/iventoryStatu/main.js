const checkAvailability = (itemName,distributorName) =>{
    
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{

           if(restockSuccess()){
            console.log(`${itemName} are in stock at ${distributorName}`);
            resolve(itemName)
           }else{
            reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
           }

        },1000)
    })
}


const restockSuccess = () =>{
    
    return (Math.random() > .2)

};


const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};
  
const onReject = (rejectionReason) => {
      console.log(rejectionReason);
};


const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.') 
const checkPants  = checkAvailability('pants','Favorite Supply Co.') 
const checkBags = checkAvailability('bags','Favorite Supply Co.') 

Promise.all([checkSunglasses,checkPants,checkBags])
  .then(onFulfill)
  .catch(onReject)