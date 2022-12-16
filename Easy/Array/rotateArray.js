var rotate = function(nums, k) {
    var res = [...nums];
     for (let i = 0; i < res.length; i++) {
         nums[(i + k) % res.length] = res[i];
     }     
     return nums;
 };

 console.log(rotate([1,2,3,4,5,6,7], 3));