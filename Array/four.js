var twoD=[
            [10,20],
            [30,40],
            [50,60] 
         ];
console.log(twoD);
console.log(twoD[0][1]);


var total=0;
for(let i=0;i<twoD.length;i++){
    for(let j=0;j<2;j++){
        //console.log(twoD[i][j]);
        total=total+twoD[i][j];
        console.log("Total :",total);
    }
}
console.log("Grand Total :",total);

         