let arr=[2,2,3,4,4,4,5,6,6]

let ans=[]

let x=9

let left=0,right=arr.length-1

while(left<right){
    if(arr[left]+arr[right]>x){
        right--
    }else if(arr[left]+arr[right]<x){
        left++
    }else if(arr[left]+arr[right]==x){
        ans.push(arr[left],arr[right])
        right--
        left++
    }
}

console.log(ans);