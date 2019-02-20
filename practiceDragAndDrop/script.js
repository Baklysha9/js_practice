let drag = document.getElementById("section2");
let imgFul = document.querySelector('.imageFull');

drag.addEventListener('click', function(event) {
    if (event.target.src != undefined) {
        imgFul.src = event.target.src;
        imgFul.classList.add("bigImg");
    }
})

drag.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.style.border = "1px solid #FF0000";
});

drag.addEventListener('dragleave', function (e) {
    e.preventDefault();
    this.style.border = "";
});
drag.addEventListener('dragover', function (e) {
    e.preventDefault();
})
drag.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
    let files = dt.files;
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.readAsDataURL(files[i])
        reader.onload = function () {
            const img = new Image()
            img.src = reader.result
            img.classList.add("microImg");
            drag.appendChild(img)
            drag.style.border = "";
        }
    }
});