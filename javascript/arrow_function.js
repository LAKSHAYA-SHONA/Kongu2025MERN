//variables:
    //var, let, const

//Arrow Function:
arrow_Fun = (studentDept) => {
    console.log(studentDept)
}
arrow_Fun(["AIML", "CSE, IT"])

//with arg and with return type
arrowfun = (studentDept) => {
    return studentDept[1]
} 
console.log(arrowfun(['aiml,cse,it','aiml']))

//destructuring operator
var mark = [10,20,30]
var [ m1, m2, m3] = mark
console.log(m1)
console.log(m2)
console.log(m3)

//Ternary Operator
a = 13
op = (a % 2 == 0) ? "Even" : "Odd"
console.log(op)

//Spread Operator (...)
stu = ["shona", "bhuvana", "sudhee", "tharani"]
new_stu = ["rk", "rumpu", "madhi"]
comb_stu = [...stu,...new_stu]
console.log(comb_stu)

//rest_operator
function fun (a,b,...c){
    console.log(a)
    console.log(c)
}
fun("shona","riya","pooja", "tina")

//Hoisting
console.log(b)
var b = 10
console.log(b)

