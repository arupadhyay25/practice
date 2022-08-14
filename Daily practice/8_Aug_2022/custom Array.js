// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
// }
  
// console.log(getFee(true));
//   // expected output: "$2.00"
  
// console.log(getFee(false));
//   // expected output: "$10.00"
  
// console.log(getFee(null));
//   // expected output: "$10.00"


class stack{

    constructor(){

        this.length = 0;
        this.stack = []

    }

    push(el) {

        this.stack.push(el)
        this.length++
        return this.stack;

    }
    pop() {

        this.stack.pop()
        this.length--
        return this.stack;

    }

}
let res = new stack("abhi")
res.push("renu")
res.pop()
res.push("chunnu")
res.push("munnu")
console.log(res)

/*--------result--------

stack { 
    length: 2,
    stack: [ 'chunnu', 'munnu' ] 
}

*/