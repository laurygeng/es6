class Chef{
    constructor(food){
        this.food = food;
        this.dish = [];
    }
    cook(){
        console.log(this.food);
    }
    get menu(){
        return this.dish;
    }
    set menu(dish){
        this.dish.push(dish);
    }
}

let laury = new Chef('banana');
laury.cook();
console.log(laury.menu = '234r234');
console.log(laury.menu = '234werwer');
console.log(laury.menu);



