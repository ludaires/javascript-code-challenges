// var generate = function(numRows) {
// ​
//     let result=[[1]]
//     if (numRows===0) return [];
//     if (numRows===1) return result;
//     result.push([1,1])
//     if (numRows===2) return result
    
//     for (let i=2;i<numRows ;i++){
//         let last=result[result.length-1]
//         let temp=[1]
//        for(let j=0; j< last.length-1 ;j++){
//            let sum=parseInt(last[j])+ parseInt(last[j+1])
//            temp.push(sum)
//        }
//         temp.push(1)
//         result.push(temp)
//     }
//     return result
 
// };


// const reverseString = function(str) {
//     const newArray = []
//     for (let i = str.length - 1; i >= 0; i--){
//         newArray.push(str[i]);
//     }   
//     return newArray.toString();
// }

// console.log(reverseString('Clara'));

var twoSum = function (nums, target) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        if (!cache[nums[i]]) {
            cache[nums[i]] = nums[i];
        }
    }

    console.log("cache", cache);
    
    for (let i = 0; i < nums.length; i++) {
        let wishNumber = Math.abs(target - nums[i]);
        console.log("target", target, "nums[i]", nums[i], "wishnumber", wishNumber, "cache[wishnumber]", cache[wishNumber]);
        if (wishNumber === cache[wishNumber]) {                
            return [i, cache[wishNumber]];        
        }
    }

    return [];
};

const nums = [2,7,11,15];
const result = twoSum(nums, 9);
console.log(result);

