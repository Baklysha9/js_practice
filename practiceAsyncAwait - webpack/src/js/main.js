import { load } from "./load";
import { loadFilmPage } from "./loadFilmPage";


document.body.addEventListener('click', (e) => {
    let target = e.target;
    //console.log(target);
    if (target.className == "borderBox") {
        if (target.className != "fa fa-star icon" || target.className != "fa fa-star-o icon") {
            let film_name = target.querySelector('.borderBox h2').innerHTML;
            //console.log(film_name);
            loadFilmPage(film_name);
        }
    } else if (target.id == "image" || target.id == "name" || target.id == "released") {
        let film_name = target.parentNode.querySelector('.borderBox h2').innerHTML;
        loadFilmPage(film_name);
    } else {
        // document.getElementById('filmPage').style.display= 'none';
        // document.querySelector('#main').style.opacity = 1;

    }
});

document.getElementById('resultButton').addEventListener('click', function() {
    load();
});