function flat(arr, depth = 1) {
    // your imeplementation here
    var itteration = 0;
    while(itteration < depth) {
      var result = [];
      let i = 0;
      while(i < arr.length) {
        if (Array.isArray(arr[i])) {
          let innerIndex = 0;
          while(innerIndex < arr[i].length) {
            result.push(arr[i][innerIndex]);
            innerIndex++;
          }
        } else {
          result.push(arr[i]);
        }
        i++;
      }    
      arr = result;
      itteration++;
    }  
    return result;
  }

const arr = [1, [2], [3, [4]]];

console.log(flat(arr, 10));