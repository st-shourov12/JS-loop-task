/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let v = 61; v <= 100; v++) {
    if (v % 2 !== 0) {
        console.log("odd number ",v);
    }
    
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for (let x = 78; x <= 98; x++) {
    if (x % 2 !== 0) {
        continue;
    }
    console.log("even number is ", x);
}