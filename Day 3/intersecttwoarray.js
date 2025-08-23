function intersection (arr1,arr2)
{
    let result= []
    for(i=0;i<arr1.length;i++)
    {
        let compare = arr1[i]
        if(arr2.includes(compare) && !result.includes(compare))
        {
            result.push(compare)
        }
    }
    return result
}
console.log("Same ocuurance exist in both is "+ intersection([1,2,3],[2,3,4]))