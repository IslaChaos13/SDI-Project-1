
const submit = document.querySelector('#submitBtn')
const surveyForm = document.querySelector('#survey');
const list = document.querySelector("#surveyResults");
const graph = document.querySelector("#graph") //new

const total = {
    Action: 0,
    Comedy: 0,
    Drama: 0,
    Horror: 0,
    Thriller: 0
        }

function addResponse(event){

    event.preventDefault();

    const card = document.createElement('div');
    card.classList.add("result-card");

    const aliasName = document.querySelector("#alias").value;
    const ageRange = document.querySelector("#ageRange").value;
    const screenTime = document.querySelector("#screenTime").value;
    const viewType = document.querySelector("#viewType").value;
    const fav = document.querySelector('#favoriteShow').value;

    card.innerHTML = `
    <p>${aliasName}<br> Favorite Show ${fav} <br>Age Range: ${ageRange}<br>Watches: ${screenTime}<br>Watches More: ${viewType}</p>
    `
    const countGenres = document.querySelectorAll('input[type="checkbox"]:checked');
    countGenres.forEach((box) => {
    total[box.value]++;
})

    list.appendChild(card)

     surveyForm.reset()

}

function buildGraph(event){
    event.preventDefault();

        graph.innerHTML ="";

        const scale = 20;

        Object.entries(total).forEach(([genre, count]) => {
            const row = document.createElement("div");
            const label = document.createElement("div");
            const bar = document.createElement("div");

            label.textContent = `${genre}:`;

            bar.style.height = "20px";
            bar.style.width = `${Math.min(count * scale, 100)}%`;
            bar.style.background = "steelblue";
            bar.style.margin = "5px 0";

            row.appendChild(label);
            row.appendChild(bar);
            graph.appendChild(row);
        });
    };



submit.addEventListener("click",addResponse);
submit.addEventListener("click", buildGraph);