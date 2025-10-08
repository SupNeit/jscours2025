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