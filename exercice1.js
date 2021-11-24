let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
let newText = monTexte.toUpperCase();
// Completer le code suivant pour afficher la longueur de la variable monTexte

console.log(monTexte.length);

console.log(newText.includes('a'));
//Ajouter du code ci dessous pour réaliser la suite de l'exercice

document.getElementById("position").innerText = monTexte.indexOf("i");

document.getElementById("chaineMaj").innerText = newText;

for (let i = 0; i < newText.length; i++) {
    if (newText[i] === "A") {
        alert("hhh");
    }
}





