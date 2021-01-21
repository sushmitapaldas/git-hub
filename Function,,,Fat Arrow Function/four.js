function add(a,b){
    console.log(this);
    return("GM");
}
console.log(add(4,5));
//----------------------------------

let x=(a,b)=>{
    console.log(this);
    return("GN");
}
console.log(x(2,3));