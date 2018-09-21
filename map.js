let food = new Map();
let fruit = {}, cook = function(){}, dessert = "甜点";

food.set(fruit, 'apple');
food.set(cook,'banana');
food.set(dessert,'water');

console.log(food);
console.log(food.get(cook));
food.forEach((value,key) =>{
    console.log(`${key} = ${value}`);
})



