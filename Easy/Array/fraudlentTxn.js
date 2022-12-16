// function merge(arr1, arr2) {
//     let i =0; let j = 0;
//     let result = [];
//     while(i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// }

// function mergeSort(arr) {
//         if (arr.length === 1) return arr;
//         let mid = Math.floor(arr.length / 2);
//         let left = mergeSort(arr.slice(0, mid));
//         let right = mergeSort(arr.slice(mid));
//         return merge(left, right);
// }
    
// function median(arr) {
//     var arr = mergeSort(arr);
//     return  arr.length % 2 == 0 ? (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2 : arr[Math.floor(arr.length / 2)]    
// }

// function activityNotifications(expenditure, d) {
//     // Write your code here
//     if (expenditure.length <= d) return 0;
//     var notification = 0;
//     var iter = 0;
//     for (let i = d; i < expenditure.length; i++) {
//         var medianVal = median(expenditure.slice(i- d, d + iter));
//         if (expenditure[i] >= (2 * medianVal)) {
//             notification++;
//         }
//         iter++;
//     }
//     return notification;
// }

// function findMedian(a,n){

//     a.sort();
//     if (n % 2 != 0)
//         return a[Math.floor(n / 2)];
 
//     return (a[Math.floor((n-1)/2)] +
//             a[n / 2]) / 2;
// }

// function activityNotifications(expenditure, d) {
//     // Write your code here
//     if (expenditure.length <= d) return 0;
//     var notification = 0;
//     var iter = 0;
//     for (let i = d; i < expenditure.length; i++) {
//         var medianVal = findMedian(expenditure.slice(i- d, d + iter), d);
//         if (expenditure[i] >= (2 * medianVal)) {
//             notification++;
//         }
//         iter++;
//     }
//     return notification;
// }

function binarySearch(arr, val) {
    let start = 0; let end = arr.length - 1; 
    while(start < arr.length - 1) {
        let mid = Math.floor((start + end) / 2);
        if (val === arr[mid]) return mid;
        else if (val < arr[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}

function removeElement(arr, ele) {
    let pos = binarySearch(arr, ele);
    if (pos == -1) {
        return arr;
    }
    arr.splice(pos, 1);
    return arr;
    // for (let i = pos; i < arr.length - 1; i++) {
    //     arr[pos] = arr[pos + 1];
    // }
    // return arr;
}

function insertElement(arr, key) {
    let i;
    for ( i = arr.length - 1; i >= 0 && arr[i] > key; i-- ) {
        arr[i + 1] = arr[i];
    }    
    arr[i + 1] = key;
    return arr;
}

function findMedian(a,removeEle, addEle, n){    
    if (removeEle != null){
        a = removeElement(a, removeEle);
    }
    if (addEle != null) {
        a = insertElement(a, addEle);
    }
    if (n % 2 != 0)
        return a[Math.floor(n / 2)];
 
    return (a[Math.floor((n-1)/2)] +
            a[n / 2]) / 2;
}

function activityNotifications(expenditure, d) {
    // Write your code here
    if (expenditure.length <= d) return 0;
    var notification = 0;
    var iter = 0;
    var sortedArray = [...expenditure.slice(0, d).sort()];
    var medianVal = findMedian(sortedArray, null,null, d);    
    if (expenditure[d] >= (2 * medianVal)) {
        notification++;
    }
    for (let i = d + 1 ; i < expenditure.length - 1; i++) {
        var medianVal = findMedian(sortedArray, expenditure[i- d], expenditure[d + iter], d);
        if (expenditure[i] >= (2 * medianVal)) {
            notification++;
        }
        iter++;
    }
    return notification;
}


// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
console.log(activityNotifications([10, 20, 30, 40, 50], 3));
