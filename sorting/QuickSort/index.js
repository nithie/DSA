function pivot(arr, start, end) {
    let pivotedIndex = start;
    let currentElement = start + 1;
    while (currentElement <= end) {
        if (arr[currentElement] < arr[start]) {
            pivotedIndex++;
            [arr[pivotedIndex], arr[currentElement]] = [arr[currentElement], arr[pivotedIndex]];
        }
        currentElement++;
    }
    [arr[start], arr[pivotedIndex]] = [arr[pivotedIndex], arr[start]];
    return pivotedIndex;
}

function quickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        var pivotedIndex = pivot(arr,left, right);
        quickSort(arr, left, pivotedIndex -1);
        quickSort(arr, pivotedIndex + 1, right);    
    }
    return arr;
}
console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
