const shirtinakai = document.querySelector("#shirtinakai")
const jacketinakai = document.querySelector("#jacketinakai")
const armorinakai = document.querySelector("#armorinakai")

shirtinakai.addEventListener("click",()=>{
    console.log("hello")
    bovenkleding.src = "shirt_i.jpg"
})


jacketinakai.addEventListener("click",()=>{
    bovenkleding.src = "jacket_i.jpg"
})

armorinakai.addEventListener("click",()=>{
    bovenkleding.src = "armor_i.jpg"
})