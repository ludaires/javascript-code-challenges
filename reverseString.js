const reverseString = function(str) {
    const newArray = []
    str = str.split('')
    for (let i = str.length - 1; i >= 0; i--){
        newArray.push(str[i]);
    }   
    return newArray.join('');
}

// console.log(reverseString('Ludmilla'));

// reverse string recursive

const reverseStringRecursive = function(str) {
    // if (str === ''){
    //     return '';
    // } else {
    //     console.log(str);
    //     return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    // }
    // console.log(str);
    return str ? reverse(str.substr(1)) + str.charAt(0) : str
   
}

console.log(reverseStringRecursive('Ludmilla'));

function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
}

// console.log(reverse('Ludmilla'));

// using builting methods
function reverseBuiltIn(str){
    // return [...str].reverse().join('');
    // using spread operator to split string into array;
    return str.split("").reverse().join("");
}

function reverseWithReducer(str){
    return str.split("").reduce((rev, char)=> char + rev, ''); 
}

// console.log(reverseWithReducer('Ludmilla'));