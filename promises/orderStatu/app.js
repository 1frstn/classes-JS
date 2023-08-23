import { checkInventory } from "./library";

const order = [['bag',4],['sunglasses',6]]
const handleRes = (res) => {
    console.log(res);
}

checkInventory(order).then(handleRes,handleRes)