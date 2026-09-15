const API_KEY = "live_0dQI43d3BOn1mW9LzLuPci5wqXd2EJfLjoTo3wtFWNfl6UguPTgRVHiKe4zrF6oI"


// first endpoint function - Breeds Search
const base_url = "https://api.thedogapi.com/v1/breeds/search?q=";

let search = document.querySelector("#search");
let button = document.querySelector("button[type=submit]");

button.addEventListener("click", function(event) {
    event.preventDefault();

    const container = document.getElementById("breeds-search-result");

    let query = search.value;
    let url = base_url + query;

    console.log("searching:", url)

    fetch(url, {
        headers: {
            "x-api-key": API_KEY
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("network error");
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = "";

        data.forEach(breed => {
            const p = document.createElement("p");
            p.textContent = breed.name;
            container.appendChild(p);
        })
    })
    .catch(error => {
        container.innerHTML = "Error: something went wrong";
        console.error(error);
    });
});


// second endpoint function - Breed
document.getElementById("breeds-btn").addEventListener("click", fetchBreed)

function fetchBreed() {
    const container = document.getElementById("breeds-result");
    const url = "https://api.thedogapi.com/v1/breeds"

    console.log("fetching:", url);

    fetch(url, {
        headers: {
            "x-api-key": API_KEY
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("network error");
        }
        return response.json();
    })
    .then(data =>  {
        const breeds = data.sort(() => Math.random() -0.5).slice(0, 10);
        container.innerHTML = "";

        breeds.forEach(breed => {
            container.innerHTML += `
                <div class="breed-card">

                    <h3>${breed.name}</h3>

                    <p>Origin: ${breed.origin || "not available"}</p>
                    <p>Temperament: ${breed.temperament || "not available"}</p>
                    <p>Life span: ${breed.life_span || "not available"}</p>

                    ${breed.image ? `<img src="${breed.image.url}" alt="${breed.name}">` : ""}

                </div>
            `;
        })
    })
    .catch(error => {
        container.innerHTML = "Error: something went wrong";
        console.error(error);
    })
}


// adding content to footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `&copy ${thisYear} Femi Falade`;
footer.appendChild(copyright);