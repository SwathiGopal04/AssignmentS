let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Outer element
    console.log("Comparing data");
    
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[j]); // Inner element
    }
}


let arr2 = [10, 20, 30,30];

for (let i = 0; i < arr2.length; i++) {
       
    for (let j = i + 1; j < arr2.length; j++) {
        if(arr2[i]===arr2[j])
        {
            console.log("same num is " +arr2[i])
        }
    }
}

//✅ Basic Example: Print a 2x3 matrix
for (let i = 1; i <= 2; i++) {          // Outer loop (rows)
    for (let j = 1; j <= 3; j++) {      // Inner loop (columns)
        console.log(`i = ${i}, j = ${j}`);
    }
}



//✅ Example 2: Multiplication Table
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}
//✔ Prints 5x5 multiplication table.


//✅ Example 3: Star Pattern
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}


