const p1 = new Promise(function (resolve, reject) {
    resolve('成功了');
})

let p2 = new Promise((resolve, reject) => {
    resolve('success');
})
let a1 = [{
    id: 0,
    age: 10
}, {
    id: 1,
    age: 9
}]
a1 = a1.map(
    (item, index) => new Promise((resolve, reject) => {
        resolve();
        console.log(item, index);
    })
)
let a2 = Promise.all(a1);
console.log(a2);

Promise.all([p1, p2]).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error);
})