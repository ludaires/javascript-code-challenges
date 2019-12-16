// SEEING AT UBER'S CODE CHALLENGES
// You a function that receives a num. You should return the diff between the multiplication and the sum of the number
// solve(12345) => 105
// Multiple (1*2*3*4*5) -  Sum(1+2+3+4+5)

function solve(n) {
    // transform the number into array
    let arr = [...n.toString()]
    let multiple = arr.reduce((mult, el) => {
// use parseInt to transform the string into a number again.
    if (parseInt(el) === 0) {
       return mult;
    }

    return mult *= parseInt(el);

}, 1);

  let total = arr.reduce((sum, el) => {
     return sum += parseInt(el);
  }, 0);

 return (multiple - total);

}
    
console.log(solve(10345));