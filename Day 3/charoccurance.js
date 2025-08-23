function charoccourence(charac,tosearchchar)
{
    let count = 0
    for(i=0;i<charac.length;i++)
    {
        if(charac[i]===tosearchchar)
            count++
    }
    console.log(`Chracter occurence count of ${tosearchchar} in ${charac} is ` +count)
}
charoccourence("Magizhvizhi","z")
charoccourence( [2,4,5,2,1,2],2)

//Chracter occurence count of z in Magizhvizhi is 2
//Chracter occurence count of 2 in 2,4,5,2,1,2 is 3
