// Exemples de variables

let jambon = "Jambon"; // variable modifiable
const pi = 3.1415926; // constante non modifiable
var age = 25; // variable modifiable, à fort taux d'erreur. NE SURTOUT PAS UTILISER


// les règles de déclaration

let a = 12;
console.log(a);
// ne pas remettre "let" devant une variable, car cela voudrait dire qu'on la redéclare. 
// pour la modifier il suffit de l'appeller par son nom et de mettre = puis sa nouvelle valeur
a = 4;
console.log(a);

const tau = 6.28318;
console.log(tau);
// Les constantes n'acceptent pas d'autres valeurs que celles déclarées.
// tau = 7;
// console.log(tau);
// Les deux lignes si-dessus feront bugger le script

var b = 40;
console.log(b);
var b = 50;
console.log(b);
// Les var peuvent être redéclarés, causant de gros problèmes de lisibilité



// Typage dynamique

let k = "Coucou tu veux voir ma bicyclette";
console.log(k);
k = 16.2;
console.log(k);



// Types de données


// Les nombres = Number

let q = 2;         // entier
let p = 45.32;     // flottant
let r = -273.15;   // négatif
let s = 1 / 3;       // fraction
let t = 16_000;


// Les chaines de caractere = String

const corneille = "Ingrat, rends-moi mon Cid jusques au dernier mot";
const moliere = 'Votre sang, monsieur, n\'est pas tombé dans de mauvaises mains';
console.log(moliere);
let blague = `C'est une autruche qui rentre dans un bar ...`;


// Les Booléens = Bool

const vrai = true;
const jeSuisFaux = false;


// les tableaux = Array

const eleves = ["Autruche", "La Joconde", 4, true];
console.log(eleves);
console.log(eleves[2]);
console.log(eleves[0]);
console.log(eleves[4]); // undefined, on sort des limites du tableau
// les tableaux n'ont pas d'index négatifs.
// les tableaux commencent toujours par l'index 0 et finissent toujours par l'index = taille du tableau - 1


// Les Undefined

let d;
console.log(d);
// la variable à été déclarée mais n'a aucune valeur, alors JS la déclare undefined
// ou par exemple en sortant des limites d'un tableau, ou en ciblant un element HTML mal écrit
// ce type de données est à éviter ABSOLUMENT


// les Nulle = Null

let x = null;


// les objets 

const tasse = {
    color: "Rouge",
    material: "Céramique",
    price: 1,
    content_volume: 25
};
console.log(tasse);


const eleve = {
    name: "Jean-Michel",
    age: 18,
    class: "Terminale",
    notes: [13, 18, 19, 2, 16, 15.5]
};
console.log(eleve.name);
// calcul de la moyenne de Jean-Michel, en codage naïf
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6;
console.log(moyenne);


// OPERATEUR

// l'affectation
// on donne la valeur de 7 a la variable "aa"
let aa = 7;


// l'addition
// on additionne 12 + 4 donc "aa" est égal à 16
aa = 12 + 4;
console.log(aa);
// l'affectation après addition
// on ajoute le 4 a l'ancienne valeur
aa += 4;
console.log(aa);

// la soustraction
// on soustracte 20 - 4 donc "bb" est égal à 16
let bb = 20 - 4;
console.log(bb);
// l'affectation après soustraction
// on retire le 4 a l'ancienne valeur
bb -= 4;
console.log(bb);

// la multiplication
let cc = 5 * 8;
console.log(cc);
// l'affectation après multiplication
cc *= 2;
console.log(cc);

// la division
let dd = 20 / 4;
console.log(dd);
// l'affectation après division
dd /= 2;
console.log(dd);



// les modulos
let ee = 13 % 5;
console.log(ee);

// les exponentiels
let ff = 3 ** 2;
console.log(ff);


// les conditions

let gg = 4;
let hh = 4;
let ii = 9;

if (gg == hh) {
    // si gg = hh
} else {
    // si gg != hh

}

// vérification égalité non-stricte
if (6 == "6") {
    console.log("ça marche");
}

// vérification égalité stricte
// Elle est fausse car un Number ne peut pas etre égal a une Str
if (6 === "6") {
    /////////
} else {
    console.log("ça marchera pas");
}

if (eleve.age >= 18) {
    // On fait une concaténation (coller des str entre elles)
    // Avec le nom de l'eleve et un texte descriptif
    console.log(eleve.name + " est majeur")
} else {
    // concaténation de littéral de gabarit
    console.log(`${eleve.name} n'est pas majeur`)
}


const recetteIngredients = ["patate", "tomate", "ail", "oignon", "huile d'olive"]

const VitesseDeLaLumiere = 299_792_458;

const table = [1, 2, 3]
table.push(4)
console.log(table)

const ingredients = [];


// On fabrique un blueprint qui permet de construire plus simplement des ingrédients, on appelle àa le prototypage
class Ingredients {
    constructor(nom, unite, quantite) {
        this.nom = nom;
        this.unite = unite;
        this.quantite = quantite;
    }
}

class Recette {
    constructor(nom_recette, nbr_personnes, etapes, liste_ingredients) {
        this.nom_recette = nom_recette;
        this.nbr_personnes = nbr_personnes;
        this.etapes = etapes;
        this.liste_ingredients = liste_ingredients;
    }
}

const sucreDeCanne = new Ingredients("Sucre de Canne", "g", 75)
const lait = new Ingredients("Lait", "cl", 25)
const oeuf = new Ingredients("Oeuf", "oeuf(s)", 3)
const pain = new Ingredients("Pain", "tranche(s)", 75)
console.log(sucreDeCanne)

// On va mettre les ingrédients dans le tableau

ingredients.push(sucreDeCanne, lait, oeuf, pain)

console.log(ingredients)

// On va faire la recette
const etapes = ["Fouetter les oeufs avec le sucre et le lait.",
    "Y tremper les tranches de pain.",
    "Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu\'à que les tranches soient dorées."
]


const painPerdu = new Recette("painPerdu", 4, etapes, ingredients)
console.log(painPerdu)




// Les boucles

console.log("coucou")
console.log("coucou")
console.log("coucou")
console.log("coucou")
console.log("coucou")

// Au lieu d'écrire ceci↑ 2000 fois, on peut faire ceci↓

// for (let i = 0; i <= 2000; i++) {
//     console.log(i + " patate(s)");
// }


// Boucle While
let n = 0;
while (n < 6) {
    console.log(n + " * 5 est égale à " + n * 5);
    n++
}

let i = 0;
while (i < 10) {
    console.log(Math.floor(Math.random() * 100))
    i += 1
}



// Boucle Do... While

// let password;
// do {
//     password = prompt("Entrez le mot de passe");
// } while (password != "abc123")
// console.log("Tu as trouvé le mot de passe!");

let des;
do {
    des = Math.floor((Math.random() * 6) + 1);
    console.log(des)
} while (des !== 6)
console.log("Tu as trouvé le dé secret!");




// Boucle For

for (let i = 0; i < 5; i++) {
    console.log("Compteur :" + i)
}

// Boucle for -> traverser les tableaux

let voitures = ["Dacia", "Lada", "Audi", "Daihatsu", "Toyota", "Chevrolet"]

for (let i = 0; i < voitures.length; i++) {
    console.log(voitures[i])
}

// La boucle For... of

let fruits = ["La Pomme", "La Banane", "Le Kiwi", "L'Avocat", "Le Durian"]
for (let fruit of fruits) {
    console.log('J\'aime ' + fruit)
}

const gafam = ["Google", "Amazon", "Facebook", "Apple", "Microsoft"]

const container = document.getElementById("container");
const ul = document.createElement("ul")
container.appendChild(ul);

for (let marque of gafam) {
    const li = document.createElement("li");
    li.textContent = marque;
    ul.appendChild(li)
}



// La boucle For... In

const stylo = {
    taille: 15,
    marque: "bic",
    couleur: "#0000FF",
    aEncoreSonCapuchon: true
}

const penContainer = document.getElementById("pen-container");
const ulPen = document.createElement("ul");
penContainer.appendChild(ulPen);

// pour chaque cle dans stylo 
for (let cle in stylo) {
    // On récupère la valeur
    let value = stylo[cle];
    // On crée un li pour chaque valeur
    let li = document.createElement("li");
    // Exemple de littéral de gabarit qui facilite l'écriture des concaténations
    li.innerHTML = `<span class='cyan'>${cle}</span>: ${value}`
    // le li est ramené dans l'ul
    ulPen.appendChild(li);
    console.log(value)
}




// BREAK
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}

console.log("---Séparation---")

// CONTINUE
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


//// Exercices 

const utilisateurs = [
    { nom: "Alice", actif: true },
    { nom: "Bob", actif: false },
    { nom: "Charlie", actif: true },
    { nom: "David", actif: false }
]

for (let cle of utilisateurs) {
    if (!cle.actif) {
        continue;
    }
    console.log("Utilisateur actif :", cle.nom);
}

//// Autre exo 
const panier = [
    { nom: "Clavier", stock: 5 },
    { nom: "Souris", stock: 0 },
    { nom: "Ecran", stock: 3 },
    { nom: "Casque", stock: 0 },
    { nom: "Webcam", stock: 2 }
]

// Afficher uniquement les produits qui ne sont pas en rupture de stock
for (let cle of panier) {
    if (cle.stock === 0) {
        continue;
    }
    console.log(cle.stock, cle.nom, "disponible(s)");
}

console.log("---Séparation---")
// Arreter la recherche dès qu'un produit est en stock
for (let cle of panier) {
    if (cle.stock !== 0) {
        console.log(cle.stock, cle.nom, "disponible(s)");
        break;
    }
    console.log(cle.stock, cle.nom, "disponible(s)");
}



//// Autre exo
// Chercher le 1er multiple de 7 dans le tableau, puis la boucle s'arrete
const nbrs = [2, 1, 9, 13, 14, 8, 74]
let nn = 0;

while (nbrs[nn] % 7 !== 0) {
    nn++
    if (nn % 7 === 0) {
        break;
    }
}
console.log("Premier multiple de 7 :", nbrs[nn]);



//// Autre exo
// Ecrire un programme qui parcourt un tableau avec une boucle for qui va chercher le 1er nombre pair après un nombre impair, puis arrete la boucle
const nbrs2 = [2, 18, 46, 19, 25, 14, 9978]


for (let i = 0; i < nbrs2.length; i++) {
    if (i + 1 !== nbrs2.length) {
        if (nbrs2[i] % 2 === 1) {
            if (nbrs2[i + 1] % 2 === 0) {
                console.log("Premier chiffre impair suivi d'un pair :", nbrs2[i])
                console.log("Premier chiffre pair apres un impair:", nbrs2[i + 1])
                break;
            }
        }
    } else {
        break;
    }
}

console.log("---Séparation---")

const nombres = [3, 4, 17, 9, 25, 4];
let trouve = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 9 === 0) {
        console.log("Trouvé :", nombres[i]);
        trouve = true;
        break;
    }
}

if (trouve === false) {
    console.log("Aucun multiple de 9 trouvé");
}




// LES TABLEAUX

const fruits2 = ["pomme", "banane", "orange"];

// ajouter un élement à la fin
fruits2.push("fraise");
// ajouter un élément au début
fruits2.unshift("melon");
// supprimer le dernier element
fruits2.pop;
//supprimer le premier element
fruits2.shift;



// Autres fonctions utiles

const fruits3 = ["framboise", "tomates", "coing", "poire"];
// trouver l'index d'un élément
let posFruit = fruits3.indexOf("tomates")
console.log(posFruit)
// vérifier si un élément est présent
console.log(fruits3.includes('orange'))
// Convertir un tableau en chaine de caracteres
let saladeDeFruit = fruits3.join(", ")
console.log(saladeDeFruit)


// STRING

// Connaitre la taille d'une string
let mot = "Jean-Michel"
console.log(mot.length);
// length ??
console.log(mot[3]);
// Depuis le début, les strings sont en fait des tableaux
// Pour ajouter une majuscule au premier élément
let mot2 = mot.charAt(0).toUpperCase() + mot.slice(1);
console.log(mot2)