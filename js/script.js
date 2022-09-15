/* Punto 1: metodi maiuscolo e minuscolo, 
suddivisione nei suoi elementi,
selezionarne 2 */

let beginLesson = "Buongiorno ragazzi, benvenuti alla prima lezione di inglese";

let upper_ = beginLesson.toUpperCase();
console.log(upper_);

let lower_ = upper_.toLowerCase();
console.log(lower_);

let suddiv_ = beginLesson.split(" ")
console.log(suddiv_)
console.log(suddiv_[2],suddiv_[1])

// Punto 2: Crea un array di persone

let presenze = ["Mario", "Giuseppe", "Daniela", "Chiara"]

// PUnto 3: Leggi il terzo elemento

let studente = presenze [3]
console.log(studente)

// Punto 4: Passa all'array un valore tramite una variabile, leggi lunghezza array

let classe = presenze += ',Giulia'
console.log(classe)

// Punto 5: Funzione con numeri di un array

let number = [8, 9, 10, 6, 7]

function operation(number1,number2) {
    result= number[1]+ number[2]
    return result
}

console.log(operation())
// Punto 6: Metodi push/pop - shift/unshift su un array

let recipe = ["farina", "uova", "burro", "nutella", "zucchero", "panna"]

let erase = recipe.pop("ultimo elemento")
console.log(recipe)
let add = recipe.push("vaniglia")
console.log(recipe) 

let cancella = recipe.shift("primo elemento")
console.log(recipe)
let added = recipe.unshift("maizena")
console.log(recipe)