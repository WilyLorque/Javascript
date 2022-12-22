// création de variable
let nom = 'John';
console.log(nom);

nom = 'Jane';
console.log(nom);

// exercices des boucles
for (let numbersau = 1; numbersau <= 10; numbersau++) {
    console.log(numbersau)
};

// Exercice console.log
console.log("Bonjour tout le monde!");
console.log(3 + 4);
console.log(nom)

// Concaténation de chaînes de caractères
let firstName = 'John';
let lastName = 'Doe';

console.log(`${firstName} ${lastName}`)

// conditions
let age = 21;
if (age >= 18) {
    console.log("Vous êtes majeur!");
}
else {
    console.log("Vous êtes mineur!");
}

// Création et parcours d'un numbersau
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"]
for (let i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i])
}

// Utilisation de Array.push() et Array.pop()
let kilo = [1, 2, 3, 4, 5]
// le code rajoute un chiffre ddans le numbersau
kilo.push(6)
// ce code retire le dernier chiffre du numbersau
kilo.pop([5])
console.log(kilo);

// Fonctions
  // fonction permettant de savoir si un chiffre est pair 
function defaut(number) {
    if (number % 2 === 0) {
        return console.log(true);
    } else {
        return console.log(false)
    }
}
defaut(8);
// fontion qui permet d'additionner un tableau
function sum(numbers) {
    let result = 0;
  // permet de savoir si le tableau est bien rempli 
    if ((typeof (numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }
  // additionne les chiffres du tableau
    numbers.forEach((number) => {
        result += number;
    });

    return result;
}
console.log(sum([1, 5, 15, 555, 42, 25]))

function caracter(text){
  // array.from créer un array à partir d'une chaine de caractère.
  // reverse() inverse  les caractères.
  // join("") pour rejoindre les caractères sans espace
    return Array.from(text).reverse().join("");
}

console.log(caracter('youtube'));