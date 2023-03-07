const KEY = "0e49bc6822146907301019fa7e062d65"
async function GetData (city){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e49bc6822146907301019fa7e062d65&units=metric`)
    return await data.json()
}

async function app(){
    console.log(document.body);
    let input = document.querySelector(".inp")
    let x = await GetData(`${input.value}`)
    if(Math.round(x.main.temp) >= 0 && Math.round(x.main.temp) <= 10){
        document.body.style.cssText = `
    background: #DAE2F8;
    background: -webkit-linear-gradient(to right, #D6A4A4, #DAE2F8);
    background: linear-gradient(to right, #D6A4A4, #DAE2F8); 
    `
    }
    else if(Math.round(x.main.temp) > 10){
        document.body.style.cssText = `
    background: #C6FFDD;
    background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
    background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);
        `
    }
    else{
        document.body.style.cssText = `
    background: #bdc3c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        `
    }
    let img = document.querySelector(".cardImage")
    let city = document.querySelector(".cardCity")
    let num = document.querySelector(".cardnum")
    let description = document.querySelector(".cardDescription")
    description.textContent = x.weather[0].description
    num.textContent = Math.round(x.main.temp)
    city.innerHTML = x.name + "<sup><span class='cardCitySp'>JB</span></sup>"
    img.src = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`
    let card = document.querySelector(".card")
    card.style.display = "block"
    console.log(x);
    input.value = ""
}


addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        app()
    }
})