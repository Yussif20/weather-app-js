const apiKey ="7a790157fdc0f0770cb4dfd11af5f843";
const city = "cairo";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl).then(res=>{
    if(!res.ok){
        console.error(`HTTP error, Statues: ${res.status}`)
    }return res.json();
}).then(data=>console.log(data)).catch(err=>console.error(`there was a problem with fetching data ${err}`))