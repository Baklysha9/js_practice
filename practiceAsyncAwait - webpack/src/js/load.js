export async function load() {
    let movie = document.getElementById('movie').value;
    let url = 'http://www.omdbapi.com/?s=' + movie + '&apikey=d5677312';
    try {
        let response = await fetch(url);
        let obj = await response.json();
        console.log(obj);
        if (obj.Error == 'Movie not found!' || obj.Error == 'Something went wrong.') {
            document.getElementById("main").innerHTML = " ";
            let item = document.createElement('div');
            item.classList.add('borderBox');
            let img = document.createElement('img');
            img.setAttribute('id', 'image');
            img.src = 'img/images.png';
            let span = document.createElement('span');
            span.setAttribute('class', 'fa fa-star star');
            let name = document.createElement('h2');
            name.setAttribute('id', 'name');
            name.innerHTML = 'Фильм не найден';
            item.appendChild(img);
            item.appendChild(span);
            item.appendChild(name);
            document.getElementById('main').appendChild(item);
        } else {
            document.getElementById("main").innerHTML = "";
            let searchRes = obj.Search;
            console.log('searchRes', searchRes)
            for (let i = 0; i < searchRes.length; i++) {
                let item = document.createElement('div');
                item.classList.add('borderBox');
                let img = document.createElement('img');
                img.setAttribute('id', 'image');
                img.src = searchRes[i].Poster;
                let name = document.createElement('h2');
                name.setAttribute('id', 'name');
                name.innerHTML = searchRes[i].Title;
                let span = document.createElement('span');
                if (localStorage.getItem(searchRes[i].imdbID)) {
                    span.setAttribute('class', 'fa fa-star icon');
                } else {
                    span.setAttribute('class', 'fa fa-star-o icon');
                }
                let released = document.createElement('h3');
                released.setAttribute('id', 'released');
                released.innerHTML = searchRes[i].Year;
                item.appendChild(img);
                item.appendChild(span);
                item.appendChild(name);
                item.appendChild(released);
                document.getElementById('main').appendChild(item);
                span.addEventListener('click', () => {
                    if (localStorage.getItem(searchRes[i].imdbID)) {
                        localStorage.removeItem(searchRes[i].imdbID);
                        span.setAttribute('class', 'fa fa-star-o icon');
                    } else {
                        localStorage.setItem(searchRes[i].imdbID, 'true');
                        span.setAttribute('class', 'fa fa-star icon');
                    }
                });
            }
        }

    } catch (e) {
        console.log('ERROR =', e);
    }
}