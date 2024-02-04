const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "Mw7SaujXKtWMTbVqZ8TBFg==kcujN9V1d08GWmko";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
    btnEl.disablled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
btnEl.disablled = false;
btnEl.innerText = "Tell me a joke"


    jokeEl.innerText = data[0].joke;


 
    } catch (error) {
        btnEl.innerText = "no interner...";
    }
   
    
}
btnEl.addEventListener("click", getJoke);