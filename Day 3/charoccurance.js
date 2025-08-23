function charoccourence(charac,tosearchchar)
{
    count = 0
    for(i=0;i<=charac.length;i++)
    {
        if(charac[i]===tosearchchar)
            count++
    }
    console.log(`Chracter occurence count of ${tosearchchar} in ${charac} is ` +count)
}
charoccourence("Magizhvizhi","z")

//op: Chracter occurence count of z in Magizhvizhi is 2