var myPromiseAll = function(taskList) {
    var result = [];
    let promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        taskList.forEach((promise, index) => {
            promise
            .then((val) => {
                result.push(val);
                promiseCompleted ++;
                if (promiseCompleted === taskList.length) {
                    resolve(result);
                }
            })
            .catch((err) => {
                reject(err);
            });
        });
    });
}


Promise.myOwnPromiseAll = function(taskList) {
    var result = [];
    var promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        for (let task of taskList) {
            task.then(val => {
                result.push(val);
                promiseCompleted++;
                if (promiseCompleted === taskList.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            });
        }
    })
}

function task(time) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (time === 5000) {
            reject(time)
        } else {
            resolve(time);
        }
      }, time);
  }); }
  const taskList = [task(1000), task(5000), task(3000)];
  //run promise.all
  Promise.myOwnPromiseAll(taskList)
    .then(results => {
      console.log("got results", results)
    })
    .catch(console.error);