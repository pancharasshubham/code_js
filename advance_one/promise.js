const promiseOne = new Promise(function (resolve, reject){
    // do an async task 
    // DB Calls , cryptography, network 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


// another way 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// creating another promise 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "shubham", email: "pancharasshubham@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// promise 4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // change this to false for test
        if(!error){
            resolve({username: "root", password: "toor"})
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


