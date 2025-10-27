const panier = [
    { name: "Pomme", price: 2, quantity: 5 },
    { name: "Kiwi", price: 1, quantity: 50 },
    { name: "Mangue", price: 9, quantity: 25 }
]

// Fonction qui additionne deux nombres 
// C'est un fonction utilitaire
function add(nbrA, nbrB) {
    return nbrA + nbrB
}

// Autre fonction utilitaire
function multiply(nbrA, nbrB) {
    return nbrA * nbrB
}

function calculatePriceCart(cart) {
    // Avant de calculer, on va initialiser le total.
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        // Pour faciliter la lecture, on renomme l'élément actuel de la boucle par un variable plus simple a écrire
        const item = cart[i];
        // Le return de la fonction multiply injecte son resultat dans itemPriceTotal
        const itemPriceTotal = multiply(item.price, item.quantity);
        total = add(total, itemPriceTotal)
    }
    return total
}
console.log(calculatePriceCart(panier));



//// Exercice
// Faire une fonction qui retourne le nombre de voyelles dans un mot mit en paramètre
function compterVoyelles(mot) {
    let compteur = 0
    let voyelles = ["a", "e", "i", "o", "u", "y"]

    for (let i = 0; i < mot.length; i++) {
        lettre = mot[i].toLowerCase();
        if (voyelles.includes(lettre)) {
            compteur++
        }
    }
    return compteur;
}
console.log(compterVoyelles("HELLO WORLD"));


console.log("---Séparation---")
//// Autre exo
// Faire une fonction qui prend en paramètre un tableau de nombres et retourne le nombre le plus grand

function TrouverMax(tab) {
    let grand = tab[0]

    for (let i = 0; i < tab.length; i++) {
        if (grand < tab[i]) {
            grand = tab[i]
        }
    }
    return grand
}

console.log(TrouverMax([3, 7, 2, 9, 5]));
console.log(TrouverMax([-5, -2, -10]));


//// Autre exo

// Ajouter un champ de texte (input), un bouton "Ajouter" et une liste <ul> directement dans le HTML.
// Donner un id à chacun de ces éléments pour pouvoir les manipuler en JavaScript.

// Quand l'utilisateur saisit du texte dans l'input et clique sur le bouton,
// cela doit créer un nouvel élément <li> contenant le texte saisi,
// et l'ajouter à la liste <ul> affichée à l'écran.

// Le texte saisi doit aussi être ajouté dans un tableau JavaScript.
// À chaque modification du tableau, la liste <ul> doit être regénérée
// (c’est-à-dire qu’on affiche tous les <li> du tableau, pas seulement le dernier ajouté).

// BONUS : le fait d’appuyer sur la touche "Entrée" doit avoir le même effet que de cliquer sur le bouton.


const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
const input = document.getElementById("input");


let tab = [];

function AjouterTexte() {

    btn.addEventListener("click", function () {
        tab.push(input.value);

        ul.innerHTML = ""

        for (let i = 0; i < tab.length; i++) {
            const li = document.createElement("li");
            li.textContent = tab[i];
            ul.appendChild(li);
        }
    });


    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            tab.push(input.value);

            ul.innerHTML = ""

            for (let i = 0; i < tab.length; i++) {
                const li = document.createElement("li");
                li.textContent = tab[i];
                ul.appendChild(li);
            }
        }
    });
}
AjouterTexte()




// FONCTIONS FLECHEES

// function add(nbrA, nbrB) {
//     return nbrA + nbrB
// }

let sum = (a, b) => a + b;
console.log(sum(12, 15)) // 27

// Quand il n'y a qu'un paramètre, les paranthèses sont facultatives
let double = a => a * 2;
console.log(double(140)) // 280

// Fonction fléchées en plusieures lignes
let calc = (a, b, c) => {
    let d = a * b;
    return d - c
}
console.log(calc(14, 2, 12)) // 16

let maj = str => str.toUpperCase()
console.log(maj("coucou")) // COUCOU

// Problème avec this
// Exemple normal

let arrow = () => {
    document.addEventListener('click', () => {
        console.log(this)
    })
}
arrow();


const btnArrow = document.getElementById("btn-arrow")

btnArrow.addEventListener("click", () => {
    console.log(this)
})













