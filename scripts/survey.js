
const submit = document.querySelector('#submitBtn')
const surveyForm = document.querySelector('#survey');
const list = document.querySelector("#surveyResults");


function addResponse(){

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

    const checkedGenres = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    checkedGenres.forEach((genre) => {
        const li = document.createElement("li");
        li.textContent = "Genre: " + genre.value;
        card.appendChild(li)
    });

    list.appendChild(card)

     surveyForm.reset()

}
submit.addEventListener("click",addResponse);