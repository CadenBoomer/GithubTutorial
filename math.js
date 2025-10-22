
function sortArray(array){
    for (let i = 0; i < array.length-1; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
        }
    }
}

    return array;
}



function divisibles(arr){
    let sum = 0
    for (let a = 0; a < arr.length; a++){
        if (arr[a] % 5 ===0){
            sum = sum + arr[a];
        }
    }
    return sum;
}

function printArray(arr){
    for (let a = 0; a<arr.length; a++){
        console.log(arr[a])
    }
}



let array = [5, 32, 46, 20, 18, 8, 0];
let x = sortArray(array)
console.log("The sum is: "+divisibles(x))
printArray(x);