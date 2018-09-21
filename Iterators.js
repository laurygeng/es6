//TODO:
function chef(foods){
    let i = 0;
    return {
        next(){
            let done = (i >= foods.length);
            let value = !done ? foods[i++]: undefined;
            return {
                value: value,
                done: done
            }
        }
    }
}
//FIXME:

let oeiru = chef(['sdfsdf','1111sdfsdfe3ddddd333']);
console.log(oeiru.next());
console.log(oeiru.next());
console.log(oeiru.next());