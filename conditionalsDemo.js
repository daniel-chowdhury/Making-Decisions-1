let blaziken = "Kelvin"
let gengar = "Lukas"

if(blaziken === "Lukas") {
    console.log("This is Lukas' Pokemon")
} else {
    console.log("This is Kelvin's Pokemon")
}
//camel case, prefer
let blazikenAtk = 30
let gengarAtk = 30
//snake case
let blaziken_atk = 30
let gengar_atk = 35
// kebab case, mostly for CSS
// let blazin-atk = 45

let blazikenHP = 200
let gengarHP = 260

if(blazikenAtk > gengarAtk) {
    // gengarHP = gengarHP - blazikenAtk 
    gengarHP -= blazikenAtk
    console.log(gengarHP)
} else if(gengarAtk > blazikenAtk) {
    blazikenHP -= gengarAtk 
    console.log(`Blaziken's new HP is ${blazikenHP}`)
} else {
    console.log("They both missed!")
}

let x = 50

let furySwipes = 36

for(i = 0; i < 3; i++) {
    console.log("Blaziken used fury swipes!")
    gengarHP -= furySwipes 
    console.log(`Gengar's HP is now ${gengarHP}`)
}
console.log("                   ")
let lowKick = 60

for(i = 2; i > 0; i--) {
    console.log("Gengar used low kick!")
    blazikenHP -+ lowKick
    console.log("Blaziken's HP is now " + blazikenHP)
}
console.log("                 ")

let gengarFainted = false 

while(gengarHP > 0) {
    console.log("Blaziken used fury swipes")
    gengarHP -= furySwipes
    if (gengarHP < 0) {
        gengarHP = 0
        gengarFainted = true 
    }
    console.log("Gengar's HP is now " + gengarHP)
    if(gengarFainted) {
        console.log("Gengar has fainted.")
    }
}

let boolean = false
let falseNum = 56
let falseStr = ""
if(falseNum) {
    console.log("True")
} else {
    console.log("False")
}