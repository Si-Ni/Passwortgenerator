const sonderzeichen = ['!', '$', '%', '&', '/', '(', ')', '*', '+', '#', '-']   //Index 10
const zahlen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']               
const kleinbuchstaben = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const grossbuchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function submit() {
    const select = document.getElementById('length').value;
    document.getElementById("error").innerText = ""
    let passwort = "";
    let arrays = []
    if(document.getElementById("sonderzeichen").checked){
        arrays.push(sonderzeichen);
    }
    if (document.getElementById("zahlen").checked) {
        arrays.push(zahlen);
    }
    if(document.getElementById("kleinbuchstaben").checked){
        arrays.push(kleinbuchstaben);
    }
    if (document.getElementById("großbuchstaben").checked) {
        arrays.push(grossbuchstaben);
    }
    if (arrays.length == 0) {
        document.getElementById("error").innerText = "Wähle mindestens ein Zeichenset aus"
    }
    for(let i = 0; i < select; i++){
        const random1 = Math.floor(Math.random() * arrays.length);
        const random2 = Math.floor(Math.random() * arrays[random1].length)
        const zeichen = arrays[random1][random2];
        passwort = passwort + zeichen;
    }
    document.getElementById("ausgabeFeld").value = passwort;
}