

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in left half
            last = middle - 1;
        } else {  //in in right half
            first = middle + 1;
        }
    }
    return position;
}


let number = 7;
let list = [-1, 0, 3, 4, 5, 6, 10, 12, 18,20];

console.log('Your element position in array is: ' + binarySearch(number, list));