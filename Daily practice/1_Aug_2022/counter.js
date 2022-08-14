let count=0
let time=2000
let id=setInterval(abhi,time)
let arr=JSON.parse(localStorage.getItem("imageArr"))|| alerthem()

function alerthem(){
    alert('Please Add Images');
    location.href='b.html';
}

let images=document.createElement("img")
function abhi(){
    images.src=arr[count]
    document.getElementById("body").append(images)
    count++
    if(count==arr.length){
        count=0
    }
}