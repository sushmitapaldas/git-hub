var size = [10,20,30,40,50,60];
console.log(size);
console.log(size[2]);
console.log(typeof size);
console.log(size.length);


let total=0
for (let i=0;i<size.length;i++){
    total=total+size[i]
    console.log("Total:",total);
}
console.log("Grand Total :", total);
