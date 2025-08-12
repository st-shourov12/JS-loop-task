for(let x = 61 ; x <= 100 ; x++){
    if (x % 2 == 0) {
        console.log("The even number is ", x)
    }
    else{
        console.log("The odd number is ", x)
    }
};


let y = 91;
let s = 0;
while (y <= 129){
    if (y % 2 != 0) {
        s += y ;

        console.log("The sum number is ", s);
    }
    
    y++ ;
}