/**Assignment Requirements:
1. Create variables for each primitive data type:
o String → Example: Create a variable city and print "I live in <city>".
o Number → Example: Store marks = 85 and print marks + 10.
o Boolean → Example: Create isWeekend and print "Relax" if true, "Work" if false.
o Undefined → Example: Declare futureGoal without assigning and print its type.
2. For each variable:
o Print both its value and type using typeof.
o Use at least one var, one let, and one const declaration across your examples.
3. Write a short note (2–3 lines) about the difference you observed when using var, let**/

var city= "Chennai"
console.log("I live in " +city)
console.log(typeof city)

const mark= 85
console.log(mark + 10)
console.log(typeof mark)

let isWeekend = true
if(isWeekend){
    let result = "Relax"
    console.log(result)
}
else{
console.log("Work")
}

let futureGoal
console.log(typeof futureGoal)


// Var- Redeclaration is allowed and it will take the last assigned value, and var can be used globally if declared
//Let- Redeclaration is not allowed and if the value is assigned using let, only with in that block the value can be accessible and it is now widely used modern js since it is more safer than var
