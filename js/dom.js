const title = document.getElementById("title");
console.log(title);


const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let clickNumber = document.getElementById("click-number");


btn.addEventListener("click", function () {
    title.innerHTML = "Blblblblblblbl"
})


//Evenement avec fonction fléchée à éviter 

// btn.addEventListener("click", () => {
//     title.innerHTML = "Blblblblblblbl"
// })

let click = 0;
btn2.addEventListener("click", function () {
    click++; // équivalent à click += 1
    clickNumber.innerHTML = click;
})

btn3.addEventListener("click", function () {
    click--; // équivalent à click += 1
    clickNumber.innerHTML = click;
})


// Avec les input

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1")
// Permet d'effacer le contenu de l'input lorsque l'on recharge la page
input1.value = ""


input1.addEventListener("input", function () {
    let valueInput = this.value;
    inputText.innerHTML = valueInput;

})


// Hierarchie

const mom = document.getElementById("mom");

// ChildNodes
// Récupérer tous les éléments de "mom" (meme le texte)
console.log(mom.childNodes);
// On récupère les éléments à l'intérieur de l'index 5
console.log(mom.childNodes[5].childNodes);


// Children
// Récupérer tous les éléments enfants directs de "mom" (pas le texte)
console.log(mom.children);

// First Child
console.log(mom.firstChild);

// FirstElementChild
console.log(mom.firstElementChild);


// On va supprimer le li de mom à partir des paramètres précédents
console.log(mom.children[2].firstElementChild.firstElementChild.remove());

// Création d'un élément
let img = document.createElement("img");
// On modifie son src
img.src = "https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg";
img.style.height = "200px";
img.style.width = "200px";
img.alt = "Une chips"


// Maintenant qu l'on a crée notre image, on peut l'accrocher à un autre élément en tant qu'enfant
mom.appendChild(img)




// Récupérer les classes
// Méthode déconseillée
// const pokemons = document.getElementByClassName(".pokemons");

// Méthode conseillée
const pokemons = document.querySelectorAll('.pokemons');
console.log(pokemons)
// Si on sait qu'il y a qu'un element d'une classe on peut utiliser
const listPokemons = document.querySelector('.list-pokemons');
console.log(listPokemons)

const colorPokemon = ["#ebae34", "#f5b0d7", "#f5bf82", "#d2faac", "#d7c5d9"]
for (let i = 0; i < colorPokemon.length; i++) {
    pokemons[i].style.color = colorPokemon[i];
}
// Ajouter une classe
// element.classList.add(nom de l'élément)
// Enlever une classe
// element.classList.remove(nom de la classe)
// Basculer de classe
// element.classList.toggle(nom de la classe)




// SetTimeout

// setTimeout(function(){
//     console.log("3 secondes se sont écoulées !")
// }, 3000)

// SetInterval

// setInterval(function(){
//     console.log("10 secondes viennent de passer !")
// }, 10000)

// clearTimeout

const timer = setTimeout(function () {
    console.log("3 secondes se sont écoulées !")
}, 3000)
clearTimeout(timer)

const interval = setInterval(function () {
    console.log("1 secondes viennent de passer !")
}, 1000)
clearInterval(interval)



// TP LE SCROLL TAQUIN
const gentillesInsultes = [
    "Tu descends plus lentement qu’une mise à jour Windows 🐌",
    "Allez, on se réveille… le bas de la page va pas venir tout seul ! 😴",
    "Tu veux un café pour te motiver ou c’est une stratégie de flemme ? ☕",
    "Je pourrais tricoter un pull pendant que tu scrolles… 🧶",
    "C’est un concours de lenteur ou tu fais ça exprès ? 😅",
    "Encore un effort, c’est pas le Mont Everest non plus ⛰️",
    "Allez courage, même les tortues ont des objectifs ! 🐢",
    "Tu scrolles comme si tu voulais pas savoir la fin 📜",
    "Je vois plus de poussière que de progrès 👀",
    "On dirait que tu scrolles avec les coudes 🦾",
    "Si tu vas plus lentement, on va repartir en 2022… ⏳",
    "Il y a des glaciers qui fondent plus vite que toi 🌍",
    "Même une limace sous calmants serait déjà arrivée 🐌",
    "Tu veux qu’on t’applaudisse pour chaque pixel descendu ? 👏",
    "Tu scrolles en morse ou c’est ton style naturel ? 🧠",
    "Je me demande si t’as pas mis une brique sur la barre d’espace 🤔",
    "T’as le même rythme qu’un fax sous la pluie 📠",
    "On est sur une promenade digestive ou un vrai scroll ? 🍽️",
    "Tu vas finir par t'endormir avant d’y arriver 😴",
    "Il faut que je t’envoie une newsletter pour te motiver ? 📬",
    "Tu scrolles comme si tu testais chaque pixel à la main 🧐",
    "Courage, t’es à deux doigts d’arriver au milieu ! (ou pas...) 😇",
    "Même la barre de chargement d'Internet Explorer est jalouse de ta lenteur 💻",
    "Faut-il t’envoyer une carte au trésor pour trouver le bas ? 🗺️",
    "Si tu scrolles encore plus doucement, je vais devoir appeler ta maman 👩‍👦"
];

let intervalid = null;

// Fonction qui va vérifier si nou sommes en bas de la page
function isAtTheBottomOfThePage () {
    // window.innerHeight => taille en pixel de votre écran
    // window.scrollY => la position du scroll par rapport à la taille maximale de l'écran
    // document.body.scrollHeight => C'est le 2000vh convertis en pixels (qu'on a inséré dans body)
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
}

function startPunchlines() {
    if( intervalid === null){
        intervalid = setInterval(function(){
            if(!isAtTheBottomOfThePage()){
                const punchline = gentillesInsultes[Math.floor(Math.random() * gentillesInsultes.length)];
                console.log(punchline)
            } else {
                console.log("Tu as réussi !")
                // fonction qui arrete le chrono
                stopPunchlines
            }
        }, 1000)
    }
}

function stopPunchlines() {
    clearInterval(intervalid)
    intervalid = null;
}





startPunchlines();