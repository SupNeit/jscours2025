const showPsw = document.getElementById("password")
const lengthPswInput = document.getElementById("length")
const btn = document.getElementById("btn");

// On récupère la longueur que doit faire le mot de passe.


btn.addEventListener("click", generatePassword);

function generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specials = "!@#$%^&*()_+=<>?,.;:";
    let length = lengthPswInput.value;

    if( length < 6) {
        return; // return sert à sortir de la fonction
    }


    // Ici on prepare les pré-requis du générateur c'est à dire, un chiffre
    // et un caractère spécial aléatoire
    let psw = "";
    psw += numbers.charAt(Math.floor(Math.random() * numbers.length)) // exemple psw = "7"
    psw += specials.charAt(Math.floor(Math.random() * specials.length)) // exemple "7!"

    let allCharacters = letters + numbers + specials

    for (let i = 2; i < length; i++){
        psw += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
    }

    psw = shufflePsw(psw);

    showPsw.textContent = psw
}

function shufflePsw(passwordToShuffle){
    return passwordToShuffle.split('').sort(() => Math.random() - 0.5).join('')
}

// avant le melange j'ai psw = "7!Jk7w41"
// 7 => ! on imagine qui choisi le point d'exclamation
// 7 => J => J
// J => k => k
// J => 7 => J
// J => w => w
// w => 4 => 4
// w => 1 => w
//"!7k7J4w1"
