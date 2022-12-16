var merge = function(nums1, m, nums2, n) {    
    if (m == 0 && n != 0) {
        while(n > 0){
        nums1[n - 1] = nums2[n - 1];
        n--;
        }
    } 
   let length = m + n - 1;
    m--;
    n--;

   while (length > 0 && m >= 0 && n >= 0) {
       if (nums1[m] < nums2[n]) {
           nums1[length] = nums2[n];
           n--;
       } else {
           nums1[length] = nums1[m]
           m--;
       }
       length--;
   }
    while(length >= 0 && n >= 0) {
        nums1[length] = nums2[n];
        n--;
        length--;
    }
};

 console.log(merge([2, 0],1, [1],1));