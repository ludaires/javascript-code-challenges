function flatten(arr) {
    let someNewArray = []
    arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flatten(item));
        } else {
            acc.push(item);
        }
        someNewArray = acc;
        return acc;
    }, []);
    return someNewArray;
}


arr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(arr));