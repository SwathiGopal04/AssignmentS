function lstwrdcount(word){
splitted= word.trim().split(" ")
lastwrd= splitted[splitted.length-1]
console.log(splitted)
console.log(`Length of last word is ${lastwrd.length}`)
}
lstwrdcount("Hello world I am Swathi")
lstwrdcount(" fly me to the moon ")






