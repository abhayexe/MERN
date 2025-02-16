var array = [1, 2, 3, 4, 5];
if(typeof array=== "object"){
    console.log("yes it is an object");
}else{
    console.log("no it is not an object");
}

const booleanval = true;

if(booleanval){
    console.log("booleanval is true")
}else if(!booleanval){
    console.log("booleanval is false")
}

const arr = []
if(arr[0]==null){//null or undefined
    console.log("arr is empty")
}