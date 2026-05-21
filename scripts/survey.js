
const submit = document.querySelector('#submitBtn')
const surveyForm = document.querySelector('#survey');

function addResponse(){

    const list = document.querySelector("#surveyResults");
    const aliasName = document.querySelector("#alias").value;
    const ageRange = document.querySelector("#ageRange").value;
    const screenTime = document.querySelector("#screenTime").value;
    const viewType = document.querySelector("#viewType").value;

    const aliases = document.createElement("li");
    aliases.textContent = aliasName;
    const ageBracket = document.createElement("li");
    ageBracket.textContent = "Age range: " + ageRange;
    const viewTime = document.createElement("li");
    viewTime.textContent = "Watches: " + screenTime;
    const viewItem = document.createElement("li");
    viewItem.textContent = "Watches more: " + viewType;

    list.append(aliases, ageBracket, viewTime, viewItem)

    const checkedGenres = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    checkedGenres.forEach((genre) => {
        const li = document.createElement("li");
        li.textContent = "Genre: " + genre.value;
        list.appendChild(li)
    });

     surveyForm.reset()

}
submit.addEventListener("click",addResponse);