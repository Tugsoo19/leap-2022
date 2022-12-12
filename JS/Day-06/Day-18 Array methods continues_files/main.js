// shift 

// arr1= [1,2,3] => // shift(arr1) => [2,3]

let shiftArr = (arr) => {
    let tempArray = []
    for (let i = 0; i < arr.length; i++){
        if (i != 0){
            tempArray.push(arr[i])
        }
    }
    return tempArray;
}

let arr1= [-1,1,2,3,5,6]

console.log(shiftArr(arr1)); //[2,3]

console.log("array shift method")

const arr = [-1,1,2,3];
const firstElement = arr.shift();
console.log(arr) //[2.3]
console.log(firstElement);

console.log("unshift array algorithm")

let unshiftArray = function (arr, number) {
    let tempArray = [];
    tempArray.push(number);

    for (let i =0; i < arr.length; i++){
        tempArray.push(arr[i])
    }
    return tempArray;
}

let arr2 = [5,6,7];
console.log(unshiftArray(arr2,9)) // [1,5,6,7];

console.log("array unshift method");
const array1 = [1,2,3];
console.log(array1.unshift(4)); //4
console.log(array1);


// sorting algorithm

sortArray = [1,2,8,7,-1,10];

function sortingAlgorithm(arr) {
    
    for ( let i = 0; i < arr.length -1; i++){
        let indexMin = i;
        for (let j = i +1; j < arr.length-1; j++){
            if(arr[j] < arr[indexMin]){
                indexMin = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[indexMin];
        arr [i] = temp;
    }
    return arr;
}

console.log(sortingAlgorithm(sortArray)); // [-1,1,2,7,8,10]

