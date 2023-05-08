let bodyHtml =  document.querySelector(`body`)
let divContainer = document.createElement("div")
divContainer.className = "container"
bodyHtml.appendChild(divContainer)
let divCards = document.createElement("div")
divCards.className = "row row-cols-1 row-cols-md-2 g-4"
divContainer.appendChild(divCards)

fetch('https://nekos.best/api/v2/neko')
    .then(response => response.json())
    .then((api1) => {
        let img = api1.results[0].url
        let imgA = document.createElement("img")
        imgA.src = img
        divCards.appendChild(imgA)
        
    })




const apiNe = async () => {
    let imagen = await fetch(`https://nekos.best/api/v2/neko`)
    let dataImagen = await imagen.json()
    let image = dataImagen.results[0].url
    let imgK = document.createElement("img")
    imgK.src = image
    divCards.appendChild(imgK)
}
apiNe()
