// class Vehical{
//     constructor(t,rn){
//         this.type = t;
//         this.regNumber = rn;
//     }
// }

// //inherit this vehical class into car

// class Car extends Vehical{
//     constructor(t,rn,w){
//         //same parameter of parent constructor
//         super(t,rn);
//         this.wheels = w
//     }
// }

// let c1 = new Car('car','mh12',4);
// console.log(c1);

// let c2 = new Car('truck','mh12',8);
// console.log(c2);

// let c3 = new Car('bike','mh12',2);
// console.log(c3);


//slot => floor => parking lot

class slot{
    #isbooked //intialise to make private
    constructor(number,type){
        this.number = number;
        this.type = type;
        this.#isbooked = false 
        //we need change the change the value based on booking
    }

    get _isbooked(){
        return this.#isbooked
    }

    set _isbooked(bool){
        this.#isbooked=bool;
    }

}


// let s1 = new slot(1,'bike')

// s1._isbooked=true
// s1._isbooked=false

// console.log(s1);


//each 

class parkingfloor{
    constructor(floornumber,maxslots){
        this.floornumber=floornumber
        this.parkingspots=[]
        
            for (let i=0;i<maxslots;i++){
                if(i==0){
                    this.parkingspots.push(new slot(i,'truck'))
                }else if(i==1){
                    this.parkingspots.push(new slot(i,'bike'))
                }else{
                    this.parkingspots.push(new slot(i,'Car'))
                }
            }
    }
}


let pf = new parkingfloor(1,3)
console.log(pf);


