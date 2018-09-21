let desserts = new Set('sdlkfskdfjksfsdlfsdf322');
desserts.add('234234');
desserts.add('sd3234234');

console.log(desserts);
console.log(desserts.size);
console.log(desserts.has('2'))
desserts.delete('2');
console.log(desserts);
desserts.forEach(dessert =>{
    console.log(dessert);
});
desserts.clear();
console.log(desserts);


