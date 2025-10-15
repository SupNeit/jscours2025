const title = document.getElementById("title");
console.log(title);


const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let clickNumber = document.getElementById("click-number");


btn.addEventListener("click", function(){
    title.innerHTML = "Blblblblblblbl"
})


//Evenement avec fonction fléchée à éviter 

// btn.addEventListener("click", () => {
//     title.innerHTML = "Blblblblblblbl"
// })

let click = 0;
btn2.addEventListener("click", function(){
    click++ ; // équivalent à click += 1
    clickNumber.innerHTML = click;
})

btn3.addEventListener("click", function(){
    click-- ; // équivalent à click += 1
    clickNumber.innerHTML = click;
})


// Avec les input

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1")
// Permet d'effacer le contenu de l'input lorsque l'on recharge la page
input1.value = ""


input1.addEventListener("input", function(){
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