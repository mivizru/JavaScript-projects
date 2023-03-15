const api_token = 'Введите свой API TOKEN bazon.cc';
const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const player = document.querySelector('#player');
const description = document.querySelector('#description');
const card = document.querySelector('#card');
const inputSearch = document.querySelector('#inputSearch');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', searchFun);

function searchFun() {
    
    let inputValue = inputSearch.value;
    let searchType = 'kp';

    if (isNaN(inputValue)) { searchType = 'title' };

fetch('https://bazon.cc/api/search?&token='+api_token+'&'+searchType+'='+inputValue+'')
    .then(resp => resp.json())
    .then(data => { 
        let filmPoster = data.results[0].info.poster;
        let filmTitle = data.results[0].info.rus;
        let filmYear = data.results[0].info.year;
        let filmDescription = data.results[0].info.description;
        let filmPlayer = data.results[0].link.replace(/\/\d+$/,"");
        card.classList.remove('d-none');
        poster.innerHTML = '<img src="'+filmPoster+'" class="img-fluid rounded-start" alt="poster">';
        title.innerHTML = ''+filmTitle+' ('+filmYear+')';
        player.innerHTML = '<iframe src="'+filmPlayer+'" frameborder="0" scrolling="no" allowfullscreen="" referrerpolicy="origin" width="450px""></iframe>';
        description.innerHTML = '<small>'+filmDescription+'</small>';
    })
    .catch(error => alert('К сожалению данный фильм отсутствует в базе, возможно он появится позже!'));

}


