let getMiddle = function(n) {
    // if the number of char is odd, get the middle;
    // if the number of char is even, get the two char in the middle
    // check if the string is even
    if ( n.length % 2 === 0){
        return n[(n.length/2)-1] + n[n.length/2];
    } else {
        return n[Math.floor(n.length/2)];
    }
}

console.log(getMiddle('Lud'));

console.log(getMiddle('Daniel'));