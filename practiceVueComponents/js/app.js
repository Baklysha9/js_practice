Vue.component('search-form', {
    data: function() {
        return { filmName: '' };
    },

    methods: {
        loadFilm: async function() {
            let url = 'http://www.omdbapi.com/?s=' + this.filmName + '&apikey=d5677312';
            try {
                let response = await fetch(url);
                let obj = await response.json();
                this.$root.films = obj.Search;
                console.log(this.$root.films);
            } catch (e) {
                console.log('ERROR =', e);
            }
        },
    },
    template: '<div class="search"><input id="movie" v-model="filmName"><button id="resultButton" @click="loadFilm" >Поиск</button></div>'
})

Vue.component('film-card', {
    props: ['film'],
    template: '<div class="borderBox"><img id="image" :src="film.Poster"><span class="fa fa-star icon"></span><h2 id="name">{{film.Title}}</h2><h3 id="released">{{film.Year}}</h3></div>'
})

const vm = new Vue({
    el: '#app',
    data: {
        // visible: true,
        films: []
    },

})