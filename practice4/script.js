let id_list = ["h1","h2","h3"];
let image = document.getElementById("image");
document.getElementById("button").addEventListener('click', function () {
    makeClick();
});
document.getElementById("image").addEventListener("mouseover", function () {
    makeLoop();
});
document.getElementById("image").addEventListener("mouseout", function () {
    makeLoopOut();
})
function makeClick() {
    for(id of id_list) {
        let header = document.getElementById(id);
        let parent = header.parentNode;
        let link = document.createElement('a');
        link.href="http://www.rksi.ru";
        parent.replaceChild(link, header);
        link.appendChild(header);
    }
}

function makeLoop() {
    for(child of document.body.children) {
        let fontSize = window.getComputedStyle(child, null).getPropertyValue('font-size');
        let style = parseFloat(fontSize);
        child.style.fontSize = (style+2)+'px';    
    }
}

function makeLoopOut() {
    for(child of document.body.children) {
        let fontSize = window.getComputedStyle(child, null).getPropertyValue('font-size');
        let style = parseFloat(fontSize);
        child.style.fontSize = (style-2)+'px';    
    }
}