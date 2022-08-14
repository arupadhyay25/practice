/*
let n=5;
let bag=""

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        bag+="*"
    }
    bag+="\n"
}

console.log(bag);

n: 1+2+3+4+5
n=n(n+1)/2
time complexity : O(n^2)
*/

/*
//2
let n=5;
let m=5;
let bag=""

for(let i=1;i<=n;i++){
    for(let j=i+1;j<=m;j++){
        bag+="*"
    }
    bag+="\n"
}

console.log(bag);

/*
n: 1+2+3+4+5
n=n(n+1)/2
time complexity : O(n*m)
*/

/*
//3
let n=10;
let bag=""

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j=j+i){
        bag+="*"
    }
    bag+="\n"
}

console.log(bag);

/*
n: 1+2+3+4+5
n=n(n+1)/2
time complexity : O(n*m)
*/
/*
// 4
let i = 1,n = 5,bag="";


while (i<n){
    let j=1
    while(j<=i){
        bag+="*"
        j+=1
    }
    bag+="\n"
    i+=1
}

console.log(bag);


// while (i <= n) {
//     bag+="*"
//     i += 1;
// }
// console.log(bag);

/*
n: 1+2+3+4+5
n=n(n+1)/2
time complexity : O(n*m)
*/

// let N=10
//i = 5;
// while(i >= 0){
//     console.log("*");   
//     i--;
// }

// count = 0;
// for (i = N;i>0;i = Math.floor(i/2)){
//     for (j = 0;j<i;j++){
//         count++;
//     }
//     console.log(count);
// }

// i = N;
// while(i > 0){
//     console.log(i);;
//     i = Math.floor(i/2);
// }

let arr = [3,2,1,5,4],N=5;
for (let i = 0;i<N;i++){
    let min = i;
    for (let j = i+1;j<N;j++){
        if (arr[j] < arr[min]){
            min = j;
        }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}
console.log(arr);
