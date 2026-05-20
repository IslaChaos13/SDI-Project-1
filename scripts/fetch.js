let url = 'https://api.tvmaze.com/';

const showDetails = document.querySelector('#showDetails');

async function loadThreeShows() {
    const ids = [1, 3, 4];

    const shows = await Promise.all(
        ids.map(id =>
            fetch(`https://api.tvmaze.com/shows/${id}`)
                .then(res => res.json())
        )
    );

    displayShows(shows);
}

function displayShows(shows) {
    showDetails.innerHTML = "";

    shows.forEach(show => {
        const card = document.createElement('div');
        card.classList.add('show-card');

        card.innerHTML = `
            <h2>${show.name}</h2>
            <img src="${show.image?.medium}" alt="${show.name}">

        `;

        showDetails.appendChild(card);
    });
};
loadThreeShows();

// const showPeople = document.querySelector(`#showPeople`);

// async function loadThreePeople(){
//     const ids = [4,17,27];

//     const people = await Promise.all(
//         id.map( id =>
//             fetch(`${url}/people/${id}`)
//             .then(res => res.json())
//         )
//     )
// }

// function displayPeople(people){
//     showPeople.innerHTML = "";

//     people.forEach(people => {
//         const card = document.createElement('div')
//         card.classList.add('show-card');

//         card.innerHTML = `
//         <h2>${people.name}</h2>
//         <img src="${people.image?.medium}" alt="${people.name}">
//         <p>${people.birthday}</p>
//         `;

//         showPeople.appendChild(card);
//     });

// }

// // run it
// loadThreeShows();// async function loadShow()
// loadThreePeople();
// //     const response = await fetch('https://api.tvmaze.com/shows/1');
// //     const show = await response.json();

// //     displayShow(show);
// // }

// // function displayShow(show) {
// //     showDetails.innerHTML = `
// //         <div class="show-card">
// //             <h2>${show.name}</h2>
// //             <img src="${show.image?.medium}" alt="${show.name}">
// //             <p><strong>Rating:</strong> ${show.rating.average ?? "N/A"}</p>
// //             <p><strong>Genres:</strong> ${show.genres.join(", ")}</p>
// //             <p>${show.summary}</p>
// //         </div>
// //     `;
// // }

// // async function loadThreeShows() {
// //     const ids = [1, 2, 3];

// //     const shows = await Promise.all(
// //         ids.map(id =>
// //             fetch(`https://api.tvmaze.com/shows/${id}`).then(res => res.json())
// //         )
// //     );

// //     displayShows(shows);
// // }


// // call it when page loads or button click
// // loadShow();
