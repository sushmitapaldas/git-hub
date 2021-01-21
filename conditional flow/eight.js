var x=10;
var y=12;
var z=5;
/print the given three numbers in ascending orders/
if(x>y){
    if(x>z){
        if (y>z){
            console.log(x,y,z);
        }
        else{
        console.log(x,z,y);
        }
    }
}
if(y>x){
    if(y>z){
        if (x>z){
            console.log(y,x,z);
        }
        else{
        console.log(y,z,x);
        }
    }
}
if(z>x){
    if(z>y){
        if (y>x){
            console.log(z,y,x);
        }
        else{
        console.log(z,x,y);
        } 
    }
}