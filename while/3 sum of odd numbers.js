

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let sum = 0;
let i = 81;

while (i <= 131) {
    if (i % 2 !== 0){
        sum += i ;
        console.log("The current number is ", i ," Sum of the odd number ",sum);
    }
    i++;
}








/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let summation = 0;
let e = 206; 

while (e <= 311) {
    if (e % 2 === 0) {
        summation += e;
        console.log(e, "The even number summation is ",summation)
    }
    e++;
}