function searchNumOccurrence(arr, k, start, end) {
    if (start > end) return 0;
    let mid = (start + end ) / 2;
    if (arr[mid] < k ) return searchNumOccurrence(arr, k, (mid + 1), end);
    if (arr[mid] > k) return searchNumOccurrence(arr, k, start, (mid - 1));
    return (searchNumOccurrence(arr, k, start, (mid -1)) + 1 + searchNumOccurrence(arr, k, (mid + 1), end));
}

const numbersArray = [2]
let end = numbersArray.length - 1;
console.log('end:', end)
console.log(searchNumOccurrence(numbersArray, 9, 0, end ));