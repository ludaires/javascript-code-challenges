
// 120 ms
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === (target - nums[i])) {
//                 return [i, j]; 
//             } else {
//                 return 'No two sum solution';
//             }
//         }
//     }
// };


// 52 ms - better solution
var twoSum = function(nums, target) {
    const numbers = {}
    for (let i = 0; i < nums.length; i++) {
        if(numbers[target - nums[i]] !== undefined ) {
            return [numbers[target - nums[i]], i];
        }
        numbers[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

