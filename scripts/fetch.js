let url = 'https://www.tvmaze.com/api';

async function fetchData(endpoint){
    const response = await fetch (`{url}/${endpoint}`)

    if(!response.ok){
        console.log(`Error: No matching data can be found for ${endpoint}`);
    }
    const data = await response.json()
    return data
}