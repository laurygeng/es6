import{fruit, dessert} from './modules/chef';

function * chef(){
    yield 'werwer';
    yield '234234';
}

let sldfj = chef();
console.log(sldfj.next());
console.log(sldfj.next());
console.log(sldfj.next());


function * k(foods) {
    for(var i=0; i< foods.length; i++){
        yield foods[i];
    }
}

let kd = k(['eeee','sdfsdsdf','wer33423424']);

console.log(kd.next());
console.log(kd.next());
console.log(kd.next());

console.log(fruit,dessert);



