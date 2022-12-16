function minimumSwaps(arr) {
    var swaps = 0;
    for (let i = 0; i < arr.length; i++) {
      while(i+1 != arr[i]) {  
         let swapIndex = arr[i] - 1;
         let valAtIndex = arr[i];
         let valAtSwapIndex = arr[swapIndex];
         arr[swapIndex] = valAtIndex;
         arr[i] = valAtSwapIndex;
         swaps++;
      }
    }
    return swaps;
}

console.log(minimumSwaps([4, 3, 1, 2]));