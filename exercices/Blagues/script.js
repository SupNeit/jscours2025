const languages = document.getElementById("languages");
const type = document.getElementById("type");
const nombre = document.getElementById("nombre");
const btn = document.getElementById("btn");
const containerBlagues = document.getElementById("container-blagues");

const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');


function getBlague(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.error) {
                const div = document.createElement("div");
                div.innerText = "Aucune blague trouvée avec ces paramètres";
                div.classList.add("blagues");
                containerBlagues.appendChild(div);
                return;
            }

            if (data.amount > 1) {
                data.jokes.forEach(blague => {
                    const div = document.createElement("div");

                    if (blague.type === 'single') {
                        div.innerText = blague.joke;
                    } else {
                        div.innerText = blague.setup + "\n" + blague.delivery;
                    }

                    div.classList.add("blagues");
                    containerBlagues.appendChild(div);
                });

            } else {

                const div = document.createElement("div");

                if (data.type === 'single') {
                    div.innerText = data.joke;
                } else {
                    div.innerText = data.setup + "\n" + data.delivery;
                }

                div.classList.add("blagues");
                containerBlagues.appendChild(div);

            }
        })
        .catch(error => {console.error('Erreur:', error);});
}





btn.addEventListener('click', () => {
    containerBlagues.innerHTML = '';
    let url = 'https://v2.jokeapi.dev/joke/Any';
    let combien = parseInt(nombre.value.trim());


    url += "?lang=" + languages.value;


    if (combien === 1) {
        if (type.value === "line") {
            url += "&type=single";
        }
        if (type.value === "qr") {
            url += "&type=twopart";
        }
    } else {

    }



    const checkedFlags = [];
    checkboxes.forEach(box => {
        if (box.checked) {
            checkedFlags.push(box.value);
        }
    });
    if (checkedFlags.length > 0) {
        url += "&blacklistFlags="
        let i;
        for (i = 0; i + 1 < checkedFlags.length; i++) {
            url += checkedFlags[i] + ","
        }
        url += checkedFlags[i]
    }

    if (isNaN(combien) || combien < 1) {
        combien = 1; // valeur par défaut si invalide
    }
    url += "&amount=" + combien;
    console.log(combien)



    console.log(url)
    getBlague(url);
});





