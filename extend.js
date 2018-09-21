class Person{
    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday;
    }
    intro(){
        return `${this.name},${this.birthday}`;
    }
    // get menu(){
    //     return this.dish;
    // }
    // set menu(dish){
    //     this.dish.push(dish);
    // }
}

class Chef extends Person{
    constructor(name,birthday){
        super(name,birthday);
    }
}
let laury = new Chef('laury','1986-02-06');
console.log(laury.intro());




