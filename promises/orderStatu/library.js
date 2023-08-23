const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
  

export const checkInventory = (order) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let inStock = order.every(item => inventory[item[0]] >= item[1])
            if(inStock){
                resolve('order placed')
            }else{
                reject('item out of stock')
            }
        },3000)
    })
}
