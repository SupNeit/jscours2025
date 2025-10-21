


const caracteres = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ...'abcdefghijklmnopqrstuvwxyz',
  ...'0123456789',
  ...'!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
];

const chiffres = '0123456789';
const speciaux = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const text = document.getElementById("text");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");



btn.addEventListener('click', () => {
    const nombre = Number(input.value);
    let texte = "";
    let chiffre = 0;
    let special = 0;

    if (nombre > 0) {
        for (let i = 0; i < nombre; i++) {
            texte += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        for (let p = 0; p < texte.length; p++) {
            if (chiffres.includes(texte[p])) {
                chiffre += 1
            }
            if (speciaux.includes(texte[p])) {
                special += 1
            }
        }
    }

    if (chiffre > 0 && special > 0) {
        result.textContent = texte;
    } else {
        texte += chiffres[Math.floor(Math.random() * chiffres.length)]
        texte += speciaux[Math.floor(Math.random() * speciaux.length)]

        result.textContent = texte;
    }


})
