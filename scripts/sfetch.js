let url = 'https://api.tvmaze.com/';

const showDetails = document.querySelector('#showDetails');

function displayShows(shows) {
    showDetails.innerHTML = "";

    shows.forEach(show => {
        const card = document.createElement('div');
        card.classList.add('show-card');

        card.innerHTML = `
            <h2>${show.name}</h2>
            <img src="${show.image?.medium}" alt="${show.name}">
            <p><strong>Genres:</strong> ${show.genres.join(", ")}</p>
            <p>${show.summary}</p>

        `;

        showDetails.appendChild(card);
    });
};

async function loadShows() {
    const ids = [1,3,4,13,17];

    const shows = await Promise.all(
        ids.map(id =>
            fetch(`https://api.tvmaze.com/shows/${id}`)
                .then(res => res.json())
        )
    );

    displayShows(shows);
}


loadShows();


