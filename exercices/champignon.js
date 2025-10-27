
const list = document.getElementById('list');



const champis = ["Cèpe", "Morille", "Girolle", "Chanterelle", "Pied de mouton"]


champis.forEach(champi => {
    const li = document.createElement("li");
    li.textContent = champi;
    list.appendChild(li);

    li.addEventListener("click", function () {
        li.style.color = "gray";
        li.style.textDecoration = "line-through";
    })

})







