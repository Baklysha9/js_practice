class SliderItem {
    constructor(src, text) {
        this.src = src;
        this.text = text;
    }
}
let images = [new SliderItem("1.jpg", "КАРТИНКА 1"),new SliderItem("2.jpg", "КАРТИНКА 2"),new SliderItem("3.jpg", "КАРТИНКА 3")];
let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');
let currentIndex = 0;
setImage(images[0]);
// document.getElementById('right').onclick = scrolRight()
// document.getElementById('left').onclick = scrolLeft()
function scrolRight() {
    currentIndex ++;
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    setImage(images[currentIndex]);
}

function scrolLeft() {
    currentIndex --;
    if(currentIndex == -1) {
        currentIndex = images.length-1;
    }
    setImage(images[currentIndex]);
}

function setImage(galleryItem) {
    document.getElementById('image').src = galleryItem.src;
    document.getElementById('zag').innerText = galleryItem.text;
}

