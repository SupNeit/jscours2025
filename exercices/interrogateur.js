
const resteEl = document.getElementById("reste");
const passeEl = document.getElementById("passe");
const btn = document.getElementById("btn");

let reste = ["Jean-Michel", "Gertrude", "Renaud", "Anthony", "Eugène", "Ernest", "Maurice", "Raoul", "Noël"];
let passe = [];




btn.addEventListener("click", function () {

    if (reste.length === 0) {
        reste = ["Jean-Michel", "Gertrude", "Renaud", "Anthony", "Eugène", "Ernest", "Maurice", "Raoul", "Noël"];
        passe = [];
        resteEl.innerHTML = "";
        passeEl.innerHTML = "";
        reste.forEach(nom => {
            const li = document.createElement("li");
            li.textContent = nom;
            resteEl.appendChild(li);
        });
    }

    const index = Math.floor(Math.random() * reste.length);
    const nom = reste.splice(index, 1)[0];
    passe.push(nom);

    passeEl.innerHTML = "";
    const liPasse = document.createElement("li");
    liPasse.textContent = nom;
    passeEl.appendChild(liPasse);

    resteEl.removeChild(resteEl.children[index]);
});












