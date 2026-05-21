

// let url = 'https://api.tvmaze.com/';

// const showDetails = document.querySelector('#showDetails');
// const showPeople = document.querySelector('#showPeople');
// const currentPage = window.location.pathname;

// async function fetchData(endPoint) {
//     const response = await fetch (`${url}/${endPoint}`)
//     .then (res => res.json())
// }

// async function loadShows(id) {
//     const showIds = [1,2,3,4,5,6,7,8,9];
//     const shows =
//     if (id) {
//         const post = await fetchData(`${url}/shows/${id}`)

//         console.log(`\nPOST ${post.id}`)
//         console.log(`Title: ${post.title}`)
//         console.log(`Body: ${post.body}\n`)
//         return
//     }
// }
// async function loadData() {
//     const showIds = [1,2,3,4,5,6,7,8,9];
//     const peopleIds = [1,2,3,4,5];

//     const [shows, people] = await Promise.all([
//         Promise.all(
//             showIds.map(id =>
//                 fetch(`https://api.tvmaze.com/shows/${id}`)
//                     .then(res => res.json())
//             )
//         ),
//         Promise.all(
//             peopleIds.map(id =>
//                 fetch(`https://api.tvmaze.com/people/${id}`)
//                     .then(res => res.json())
//             )
//         )
//     ]);



//     if (currentPage.includes("shows.html")){
//         displayShows(shows)
//     } else (currentPage.includes(".people.html"))
//         displayPeople(people)
// }

// function displayShows(shows) {
//     showDetails.innerHTML = "";

//     shows.forEach(show => {
//         const card = document.createElement('div');
//         card.classList.add('show-card');

//         card.innerHTML = `
//             <h2>${show.name}</h2>
//             <img src="${show.image?.medium}" alt="${show.name}">
//         `;

//         showDetails.appendChild(card);
//     });
// };

// function displayPeople(people) {
//     showDetails.innerHTML = "";

//     people.forEach(people => {
//         const card = document.createElement('div');
//         card.classList.add('show-card');

//         card.innerHTML = `
//             <h2>${people.name}</h2>
//             <img src="${people.image?.medium}" alt="${people.name}">
//             <p> Birthdate: ${people.birthday}
//         `;

//         showDetails.appendChild(card);
//     });
// };

// loadData();

