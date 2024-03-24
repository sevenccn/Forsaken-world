const shirtkenaji = document.querySelector("#shirtkenaji");
const jacketkenaji = document.querySelector("#jacketkenaji");
const armorkenaji = document.querySelector("#armorkenaji");
const end = document.querySelector("#end");
// https://forum.freecodecamp.org/t/playing-local-mp3-file-in-visual-studio-code/451363/3 - audio//
const muziekje = new Audio('awaken-136824.mp3');

let bovenkleding = document.querySelector("#bovenkleding")
let GeluidAan = true

//docent hulp//
shirtkenaji.addEventListener("click", () => {
    bovenkleding.src = "shirt_k.jpg"
})

jacketkenaji.addEventListener("click", () => {
    bovenkleding.src = "jacket_k.jpg"
})

armorkenaji.addEventListener("click", () => {
    bovenkleding.src = "armor_k.jpg"
})

// mijn opdracht lamp/ douwe hulp om de knop op aan en uit te kunnen zetten//
function muziek() {

    if (GeluidAan == true) {
        console.log("uit");
        muziekje.pause();
        GeluidAan = false


    } else {
        console.log("aan")
        muziekje.play();
        GeluidAan = true
    }

}

end.addEventListener("click", muziek)

//CHAT-GPT//
function glitch() {
    document.querySelector('.glitch-button').classList.toggle('glitch');
}

