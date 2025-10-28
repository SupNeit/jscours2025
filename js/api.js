// Convertir un JSON en objet JavaScript
// on va simuler un fichier JSON

const json = '{"nom": "Jean-Michel", "age": 30}'
// On convertis la string en JSON en objet JavaScript
const obj = JSON.parse(json)
console.log(obj.nom)

// Convertir un objet JavaScript en JSON


const user = {
    nom: "Jean-Bon",
    age: 12,
}
const jsonObj = JSON.stringify(user)
console.log(jsonObj)


// Les promises
// Ecriture standard

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        isFine = true
        if (isFine) {
            resolve("Succès !!")
        } else {
            reject("Erreur !!")
        }
    }, 2000)
})

myPromise
    .then(result => console.log(result)) // si tout va bien
    .catch(error => console.log(error)) // si une erreur
    .finally(() => console.log("C'est fini"))


// Exercice : Imaginons qu'on lance une piece. 
// Elle à 50% de chance tomber sur face et 50% de chance de tomber sur pile
// pile = réussite
// face = erreur impardonnable
// pour simuler cette promise, on utilisera un setTimeout de 1 seconde

// Si ça à réussi, afficher console.log, si rate afficher console.error

function pileOuFace() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.5) {
                resolve("Réussite !")
            } else {
                reject("Erreur Impardonnable...")
            }
        }, 1000)
    })
}


pileOuFace()
    .then(résultat => {
        console.log("Résultat :", résultat); //  Pile !
    })
    .catch(erreur => {
        console.error("Erreur :", erreur);   //  Face !
    })
    .finally(() => {
        console.log("Le lancer est terminé.");
    });


// AJAX
// Pour faire un Ajax de manière moderne on utilise l'API fetch()
// const list = document.getElementById("huge-list")

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(d => {
//             const li = document.createElement("li")
//             li.innerText = d.title;
//             list.appendChild(li)
//         })
//     })

const fakeHtml = "dsdsjkmfsdmkhdfbjfsdmskhvdfvmsfkdjbfmksfddsfhbsfd9+4https://a.travel-assets.com/travel-assets-manager/destu-41418/Hero_Desktop.jpeg?impolicy=fcrop&w=1400&h=600&q=mediumHighsqdsdqdsqsdqqsdsqqds"

const regex = /https?:\/\/[^"'\s>]+?.(?:jpg|jpeg|png|gif|webp|svg)/g

const found = fakeHtml.match(regex)
console.log(found)

const aled = document.getElementById("aled")

fetch("https://www.lacoste.com/fr")
    .then(resultat => resultat.text())
    .then(data => {
        console.log(data)
        const images = data.match(regex)
        console.log(images)
        images.forEach(img => {
            const imgEl = document.createElement("img")
            imgEl.src = img
            aled.appendChild(imgEl)
        })
    })