const submit = document.querySelector('#submitBtn')

submit.addEventListener("click", () => {
const checked = document.querySelectorAll('input[type="checkbox"]:checked');

const count ={
    action = 0,
    comedy = 0,
    drama = 0,
    horror = 0,
    thriller = 0
}

checked.forEach((box) => {
    count[box.value]++;

})

const max = Math.max(count.action, count.comedy, count.drama, count.horror, count.thriller)
const sclae = max === 0 ? 0 :100 / max;

graph.innerHTML = "";

Object.entries(counts).forEach(([genre, count]) => {
        const row = document.createElement("div");
        const label = document.createElement("div");
        const bar = document.createElement("div");

        label.textContent = `${genre}: ${count}`;

        bar.style.height = "20px";
        bar.style.width = `${count * scale}%`;
        bar.style.background = "steelblue";
        bar.style.margin = "5px 0";

        row.appendChild(label);
        row.appendChild(bar);
        graph.appendChild(row);
    });
});

