function uniqString (str) {
    let newArray = str.split(' ')
    const cache = {}

    for (let i = 0; i < newArray.length; i++) {
        if (!cache[newArray[i]]) {
            cache[newArray[i]] = newArray[i]
        }
    }
    console.log(cache)
    return Object.values(cache).join(' ')
}

console.log(uniqString('This is is a test test'))
