let cat = {
	type : 'cat',
	legs : 4,
	tail : true,
}

// let tiger = {
// 	speed : 70,
// }
	

let animal=Object.create(cat)

animal.tiger = function(name){
    console.log(`I am ${name}`);
}

animal.tiger("tiger")

console.log(animal.__proto__);