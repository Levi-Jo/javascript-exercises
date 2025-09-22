const removeFromArray = function(inputArray,...removed) {

let outputArray = []
// compare each item from input array with removed array, if they don't match copy the item into the output array
let loopLength = inputArray.length + 1
for (let i = 0; i < loopLength-1; i++)
    if (!removed.includes(inputArray[i])){
        outputArray.push(inputArray[i])

    }

return outputArray

};
console.log(removeFromArray([1,2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
