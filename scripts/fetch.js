let url = 'https://api.tvmaze.com/';
const currentPage = window.location.pathname;
const showDetails = document.querySelector(`#showDetails`);
const showPeople = document.querySelector(`#showPeople`);

//master fetch funcion

async function fetchData(endpoint){
    try {
        const res = await fetch(`${url}${endpoint}`);

        if (!res.ok){
            throw new Error('Failed to fetch');
        }

        return await res.json();

    } catch(error){

        console.log(error);
    }
}


// Load Shows with ids 1-12
async function loadShows () {
    const showIds = [1,2,3,4,5,6,7,8,9,10,11,12]

    const shows = await Promise.all(
        showIds.map( id => fetchData(`shows/${id}`))
    );

    displayShows(shows)
}

//Load people with ids 1-12
async function loadPeople(){
    const peopleId = [1,2,3,4,5,6,7,8,9,10,11,12]

    const people = await Promise.all(
        peopleId.map(id => fetchData(`people/${id}`))
    );
    displayPeople(people)

}

//Display specific information depending on what page is loaded

async function loadData(){

    const showIds = [1,2,3,4,5,6,7,8,9,10,11,12];

    const shows = await Promise.all(
        showIds.map(id => fetchData(`shows/${id}`))
    );

    if (
        currentPage.includes('index.html') ||
        currentPage === '/'
    ) {

        previewShows(shows);

    } else if (currentPage.includes('shows.html')) {

        displayShows(shows);

    } else if (currentPage.includes('people.html')) {

        loadPeople();
    }
}

//Display Shows

function displayShows(shows) {

    showDetails.innerHTML = '';

    shows.forEach(show => {

        const card = document.createElement('div');
        card.classList.add('show-card');

        card.innerHTML = `
        <h2>${show.name}</h2>
        <img src="${show.image?.medium}" alt= "${show.name}">
        <p><strong>Genres</strong> ${show.genres}</p>
        <p>${show.summary}</p>
        `;

        showDetails.appendChild(card);
    });

}

//Shows for the homepage

function previewShows(shows){

    showDetails.innerHTML = '';

    const filteredShows =shows.filter(show => [1,3,5].includes(show.id))

    filteredShows.forEach(show => {

        const card = document.createElement('div');
        card.classList.add('show-card');

        card.innerHTML = `
            <h2>${show.name}</h2>
            <img src="${show.image?.medium}" alt="${show.name}">
        `;

        showDetails.appendChild(card);
    });
}

//Display people information

function displayPeople(people) {

    showPeople.innerHTML = '';

    people.forEach(people => {

        const card = document.createElement('div');
        card.classList.add('show-card');

        card.innerHTML = `
        <h2>${people.name}</h2>
        <img src="${people.image?.medium}" alt= "${people.name}">
        <p> Birthdate: ${people.birthday} </p>
        `;

        showPeople.appendChild(card);
    });

}

loadData()