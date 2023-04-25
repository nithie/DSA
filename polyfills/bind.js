Function.prototype.myBind = function(obj, ...args) {
    let func = this;
    return function (...newArds) {
        func.apply(obj, [...args, ...newArds]);
    }
}

let obj = {
    name: 'hi',
}
let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
  };
let x = myFunc.myBind(obj, 'a_random_id');

x('new');
