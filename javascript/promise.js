//Location Finder example (Synchronous)
/*
function locationFinder(){
    train = 7
    return new Promise((resolve,reject) => {
        if(train == 7){                         
            resolve("Train arraived")
        }
        else{
            reject("Train not arraived yet")       //Promise { <rejected> 'Train not arraived yet'//node:internal/process/promises:392
                                                    //new UnhandledPromiseRejection(reason); when there is reject the reject msg will print but will throw this
        }
    })
}
locationFinder().then((resolvedMsg) => {
    console.log(resolvedMsg);
}).catch(function (rejectedMsg){
    console.log(rejectedMsg);
})
*/

/*
function isTimeConsumtion(){
    time = 1000
    return time <= this;
}
function isValidLocation(loc){
    location = "Ooty"
    return loc == location
}
function locationFinder(){
    loc = "Ooty"
    time = 1000
}
*/



