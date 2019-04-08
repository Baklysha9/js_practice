const vm = new Vue({
  el: '#app',
  data: {
    filmName: '',
    visible: true
  },
  methods: {
    loadFilm: async function () {
      let url = 'http://www.omdbapi.com/?s=' + this.filmName + '&apikey=d5677312';
      try {
        let response = await fetch(url);
        let obj = await response.json();
        console.log(obj);
        if (obj.Error == 'Movie not found!' || obj.Error == 'Something went wrong.') {
          document.getElementById("main").innerHTML = "";
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
    },

    listener: function (e) {
      let target = e.target;
      //console.log(target);
      if (target.className == "borderBox") {
          if (target.className != "fa fa-star icon" || target.className != "fa fa-star-o icon") {
              let film_name = target.querySelector('.borderBox h2').innerHTML;
              //console.log(film_name);
              this.loadFilmPage(film_name);
          }
      } else if (target.id == "image" || target.id == "name" || target.id == "released") {
          let film_name = target.parentNode.querySelector('.borderBox h2').innerHTML;
          this.loadFilmPage(film_name); 
      }
    },

    loadFilmPage: async function(name) {
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
      document.getElementById('filmPage').style.display ='block';
      document.getElementById('filmPage').innerHTML = '';
      let img = document.createElement('img');
      let h1 = document.createElement('h1');
      let  = document.createElement('h1');
      console.log(film);
      img.src = film.Poster;
      img.style.width = '400px';
  
      document.getElementById('filmPage').appendChild(img);
      document.getElementById('filmPage').innerHTML += "<div style='display:inline-block;vertical-align:top;width: 50%;text-align: center; margin-top:50px;'><h1 style=''>"+film.Title+"</h1>"+"<h3>"+film.Released+"</h3>"+film.Plot+"</h3>"+"<h1 class='buttonClose'>x</h1>"+"<h3 style='margin-top:50px;'>Actors:<br>"+film.Actors+"</h3>"+"<h3 style='margin-top:50px;'>Imdb rating:<br>"+film.imdbRating+"</h3>"+"<a href ='https://www.imdb.com/title/"+film.imdbID+"'><img style='width:150px; height:40px;' src='img/IMDB_Logo_2016.png'></a>"+"</div>";
  
      document.querySelector('.buttonClose').addEventListener('click', function () {
          document.getElementById('filmPage').style.display ='none';
          document.querySelector('#main').style.opacity = 1;
          document.querySelector('#main').style.pointerEvents = '';
      });  
    }
  },
  mounted() {

  }
})
