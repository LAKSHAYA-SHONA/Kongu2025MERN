//using return
async function fun_name() {
    return "hello"
}                                   //in op promise will come
fun_arrow = async() => {
    return "hi"
}
console.log(fun_name())
console.log(fun_arrow())

//using console.log 
async function fun_name1() {
    console.log("hello")
}                                   //in op promise will not come
fun_arrow1 = async() => {
    console.log("hi")
}
fun_name1()
fun_arrow1()

//using setTimeout
async function fun_name2(){
    setTimeout(() => {  
        return "hello"      //op will be Promise { undefined }
    },1000)                 //because the return is not called with the expected time like the console has been fast
}
console.log(fun_name2())

async function fun_name3() {
    setTimeout(() => {
        console.log("Hello")
    },5000)
    console.log(await "Hello")
}

arrow_fun = async () => {
    setTimeout(() => {
        console.log("kEC")
    },4000)
    console.log(await "kEC")
}
fun_name3()
arrow_fun()

/*
then
fun_name3().then((a) => {
    console.log(a)
})
console.log(arrow_fun())

*/
