let result ='';
document.getElementById('resultButton').addEventListener('click', function () {
    let movie = document.getElementById('movie').value;
    let myFirstPromise = new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://www.omdbapi.com/?s='+movie+'&apikey=d5677312 ', false);
        req.send();
        if (req.status == 200) {
            result = req.responseText;
            resolve("Success!"); 
        }
    });
    let obj = JSON.parse(result);
    if (obj.Error == 'Movie not found!' || obj.Error == 'Something went wrong.') {
        document.getElementById("main").innerHTML = " ";
        let item = document.createElement('div');
        item.classList.add('borderBox');
        let img  = document.createElement('img');
        img.setAttribute('id', 'image');
        img.src = 'images.png';

        let name  = document.createElement('h2');
        name.setAttribute('id', 'name');
        name.innerHTML = 'Фильм не найден';

        item.appendChild(img);
        item.appendChild(name);
        document.getElementById('main').appendChild(item); 
    } else {
        document.getElementById("main").innerHTML = "";
        let searchRes = obj.Search      
        for (var i = 0; i < searchRes.length; i++) {
            let item = document.createElement('div');
            item.classList.add('borderBox');
            let img  = document.createElement('img');
            img.setAttribute('id', 'image');
            img.src = searchRes[i].Poster;
            let name  = document.createElement('h2');
            name.setAttribute('id', 'name');
            name.innerHTML = searchRes[i].Title;
            let released  = document.createElement('h3');
            released.setAttribute('id', 'released');
            released.innerHTML = searchRes[i].Year;
            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(released);
            document.getElementById('main').appendChild(item); 
          }
    }
 });