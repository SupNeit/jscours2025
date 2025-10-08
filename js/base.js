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
    price : 1,
    content_volume : 25
};
console.log(tasse);


