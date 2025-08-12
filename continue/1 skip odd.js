/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let n = 0;

while (n <= 40) {

    n++ ;
    if (n % 2 !== 0) {
        continue
    }
    
  console.log(n);
}