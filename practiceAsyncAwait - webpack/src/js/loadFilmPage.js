export const loadFilmPage = async(name) => {
    console.log(name);
    let film = {};
    let url = 'http://www.omdbapi.com/?t=' + name + '&apikey=d5677312';
    try {
        let response = await fetch(url);
        film = await response.json();
    } catch (e) {
        console.log('ERROR =', e);
    }
    document.querySelector('#main').style.opacity = 0.2;
    document.querySelector('#main').style.pointerEvents = 'none';
    document.getElementById('filmPage').classList.add('filmPage');
    document.getElementById('filmPage').style.display = 'block';
    document.getElementById('filmPage').innerHTML = '';
    let img = document.createElement('img');
    console.log(film);
    img.src = film.Poster;
    img.style.width = '400px';

    document.getElementById('filmPage').appendChild(img);
    document.getElementById('filmPage').innerHTML += "<div style='display:inline-block;vertical-align:top;width: 50%;text-align: center; margin-top:50px;'><h1 style=''>" + film.Title + "</h1>" + "<h3>" + film.Released + "</h3>" + film.Plot + "</h3>" + "<h1 class='buttonClose'>x</h1>" + "<h3 style='margin-top:50px;'>Actors:<br>" + film.Actors + "</h3>" + "<h3 style='margin-top:50px;'>Imdb rating:<br>" + film.imdbRating + "</h3>" + "<a href ='https://www.imdb.com/title/" + film.imdbID + "'><img style='width:150px; height:40px;' src='img/IMDB_Logo_2016.png'></a>" + "</div>";

    document.querySelector('.buttonClose').addEventListener('click', function() {
        document.getElementById('filmPage').style.display = 'none';
        document.querySelector('#main').style.opacity = 1;
        document.querySelector('#main').style.pointerEvents = '';
    });


}