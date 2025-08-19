/**Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript**/

function launchBrowser(browserName){
if(browserName==="Chrome"){

    console.log("Browser name is Chrome")
}
else{ console.log("Browser name is not Chrome")}

}
launchBrowser("Chrome")
launchBrowser("Edge")

function runTests(testType){
    switch (testType)
    {
        case "Smoke":
            console.log("Test run type is Smoke test")
            break;

        case "Sanity":
            console.log("Test run type is Sanity test")
            break;

        case "Regression":
            console.log("Test run type is Regression")
            break;
   
        default:
           console.log("Test run type is Smoke test")
           break;
            
    }
}
runTests("Sanity")
runTests("Integration")