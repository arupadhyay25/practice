let arr=[2,2,3,4,4,4,5,6,6,2,2,3,4,4,4,5,6,6]

console.log(remove(arr));

function remove(arr){
    let ans=[]

let i=0

for(let t=0;t<arr.length;t++){
    if(arr[i]!=arr[i+1]){
        ans.push(arr[i])
        i++
    }else{
        i++
    }
}

return ans
}


