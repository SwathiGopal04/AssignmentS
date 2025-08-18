/**Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
Hints to Solve:
Use a `switch` statement with `true` for score range checks to assign grades.**/

function studentscore(Score){
    switch(true){
        case (Score>=90):
        console.log("Student scored A grade")
        break;

        case (Score>=80):
        console.log("Student scored B grade")
         break;

        case (Score>=60):
        console.log("Student scored C grade")
         break;

        case (Score>=40):
        console.log("Student scored D grade")
         break;

        default:
        console.log("Student scored Fail")


    }

}

studentscore("98")