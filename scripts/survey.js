
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

    const aliasName = document.querySelector("#alias").value;
    const ageRange = document.querySelector("#ageRange").value;
    const screenTime = document.querySelector("#screenTime").value;
    const viewType = document.querySelector("#viewType").value;
    const fav = document.querySelector('#favoriteShow').value;

    const aliases = document.createElement("li");
    aliases.textContent = aliasName;
    const favS = document.createElement("li");
    favS.textContent = fav;
    const ageBracket = document.createElement("li");
    ageBracket.textContent = "Age range: " + ageRange;
    const viewTime = document.createElement("li");
    viewTime.textContent = "Watches: " + screenTime;
    const viewItem = document.createElement("li");
    viewItem.textContent = "Watches more: " + viewType;

    card.append(aliases, favS, ageBracket, viewTime, viewItem)

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
            bar.style.width = `${count * scale}%`;
            bar.style.background = "steelblue";
            bar.style.margin = "5px 0";

            row.appendChild(label);
            row.appendChild(bar);
            graph.appendChild(row);
        });
    };



submit.addEventListener("click",addResponse);
submit.addEventListener("click", buildGraph);