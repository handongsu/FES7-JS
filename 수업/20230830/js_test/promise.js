function sayHello(){
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello)
    });
}

// sayHello().then((resolveDate) => {
//     console.log(resolveData);
//     return resolveData;
// })
// .then((resolveData) => {
//     console.log(resolveData);
//     retrun resolveData;
// })
// .then((resolveData) => {
//     console.log(resolveData);
// })
// .catch((error) => {
//     console.log(error);
// })

async function test(){
    const hello1 = await sayHello();
    console.log(hello1);
}

test();