function anag(str1,str2)
{
    let s1= str1.replace(/\s+/g,'').toLowerCase()
    let s2= str2.replace(/\s+/g,'').toLowerCase()

    if(s1.length != s2.length)
    {
        console.log("It is not Anagram")
    }
    else 
    {
        if(s1.split("").sort().join("") === s2.split("").sort().join(""))
        {
            console.log("It is Anagram")
        }
        else{console.log("It is not Anagram")}
    }
}
anag('listen', 'silent')// anagram true
anag('hello', 'world') //not anag