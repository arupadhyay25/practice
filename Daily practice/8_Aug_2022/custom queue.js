class queue{

    constructor(){

        this.length = 0;
        this.queue = []

    }

    enQueue(el) {

        this.queue.push(el)
        this.length++
        return this.queue;

    }

    deQueue() {

        this.queue.splice(0,1)
        this.length--
        return this.queue;

    }

    enQueueThree(...el){

        el.forEach((element) => {
            this.queue.push(element)
            this.length++  
        });
        
        return this.queue;

    }

    deQueueThree(){

        this.queue.splice(0,3)
        this.length-=3
        return this.queue;

    }

}
let res = new queue("abhi")
res.enQueue("renu")
res.enQueue("abhi")
res.enQueue("papa")
res.deQueue()

res.enQueueThree("abhi","renu","papa")

res.deQueueThree()

console.log(res)

/*--------result--------

push 1
queue { 
    length: 1, 
    queue: [ 'renu', abhi', 'papa'  ]
}

pop from up
queue { 
    length: 2, 
    queue: [ 'abhi', 'papa' ] 
}

add three
queue { 
    length: 5, 
    queue: [ 'abhi', 'papa', 'abhi', 'renu', 
'papa' ] 
}

pop three from up
queue { 
    length: 2, queue: [ 'renu', 'papa' ] 
}
*/