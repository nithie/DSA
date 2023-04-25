var num = 10;
function fun() {
    num = 100;
    return;
    function num() {}
}
fun();
console.log(num);