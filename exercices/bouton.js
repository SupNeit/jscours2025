
let tempsRestant = 5;
const bouton = document.getElementById('bouton');


const timer = setInterval(() => {
    tempsRestant--;
    if (tempsRestant > 0) {
        bouton.textContent = `Attendez ${tempsRestant} secondes`;
    } else {
        clearInterval(timer);
        bouton.disabled = false;
        bouton.textContent = 'Cliquez-moi !'
    }
}, 1000);


bouton.addEventListener('click', () => {
    alert('Bravo ! Vous avez patienté.');
});
