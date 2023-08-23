const inventory = {
    sunglasses: 39,
    watch: 78,
    ring: 67
}

const orderStatu = (resolve,reject) => {
    if(inventory.sunglasses > 0){
        resolve('order will be placed')
    }else{
        reject('no sunglasses in deepo')
    }
}

const checkInventory = () => {
    return new Promise(orderStatu)
}
let a = checkInventory()
console.log(a);

const returnPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>resolve('resolved'),200)
    })
}

const prom = returnPromise();

console.log('before promise');

setTimeout(()=>console.log('promise'),2000)

console.log('after promise');

const promi = new Promise((resolve,reject) => {
    resolve('yay')
})

const handleSuccess = (resolvedValue) =>{
    console.log(resolvedValue);
}

promi.then(handleSuccess)

const proMi = new Promise((resolve,reject) => {
    let num = Math.random();
    console.log(num);
    if(num < .5){
        resolve('yay!!')
    }else{
        reject('Nooo!!')
    }
})

const handleSc = (resolvedValue) =>{
    console.log(resolvedValue);
}
const handleFl = (rejectedValue) => {
    console.log(rejectedValue);
}

proMi.then(handleSc,handleFl)