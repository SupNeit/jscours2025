const ChiffresEtSpeciaux = "!@#$%^&*()-_=+[]{};:,<.>/?\\|`~0123456789";

// Voyelles minuscules et majuscules
const voyelles = "aeiouAEIOU";

// Consonnes minuscules et majuscules
const consonnes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click', () => {
    const nombre = Number(input.value); // nombre de motifs à générer

    if (nombre < 1) {
        alert("Veuillez entrer au moins 1 motif !");
        return;
    }

    if (isNaN(nombre)) {
        alert("Vous n'avez pas entré de chiffre");
        return;
    }

    let texte = "";

    for (let n = 0; n < nombre; n++) {

        let motifLength;
        if (Math.random() < 0.5) {
            motifLength = 5;
        } else {
            motifLength = 6;
        }
        
        console.log(motifLength);
        let motif = "";


        for (let i = 0; i < motifLength; i++) {
            if (i % 2 === 0) {
                motif += consonnes[Math.floor(Math.random() * consonnes.length)];
            } else {
                motif += voyelles[Math.floor(Math.random() * voyelles.length)];
            }
        }

        texte += motif;

        if (n + 1 === nombre) {
            break;
        }

        let speciaux = "";
        for (let j = 0; j < 3; j++) {
            speciaux += ChiffresEtSpeciaux[Math.floor(Math.random() * ChiffresEtSpeciaux.length)];
        }


        texte += speciaux;
    }


    result.textContent = texte;
    console.log(texte);
});
