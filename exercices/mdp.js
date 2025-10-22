

const all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{};:,<.>/?\\|`~0123456789"
// Lettres minuscules et majuscules
const lettres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Caractères spéciaux
const caracteresSpeciaux = "!@#$%^&*()-_=+[]{};:,<.>/?|`~";

// Chiffres
const chiffres = "0123456789";


const text = document.getElementById("text");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");



btn.addEventListener('click', () => {
    const nombre = Number(input.value);
    let texte = "";
    let melange = "";
    valeur = 0

    if (nombre < 3) {
        alert("Mot de passe trop court !")
        return;
    }

    if (isNaN(nombre)) {
        alert("Vous n'avez pas entré de chiffre")
        return;
    }

    texte += chiffres[Math.floor(Math.random() * chiffres.length)];
    texte += caracteresSpeciaux[Math.floor(Math.random() * caracteresSpeciaux.length)];


    for (let i = 2; i < nombre; i++) {
        texte += all[Math.floor(Math.random() * all.length)];
    }

    console.log(texte)


    for (let p = 0; p < texte.length; p = 0) {
        valeur = Math.floor(Math.random() * (texte.length - 0))
        console.log(valeur)

        melange += texte.charAt(valeur)
        console.log(melange)

        texte = texte.slice(0, valeur) + texte.slice(valeur + 1);
        console.log(texte)

    }
    console.log(melange)



    result.textContent = melange;

})

