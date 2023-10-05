const imageBtn = document.getElementById("generate-image-btn");
if(imageBtn !== null) {
    imageBtn.addEventListener('click', () => {
        fetchNewImage();
    });
}

function fetchNewImage() {
    imageBtn.disabled = true;
    const imagePlaceholder = document.getElementById("placeholder-image");
    if(imagePlaceholder === null) { return; }
    // API documentation: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then((data) => {
        imagePlaceholder.src = data.length > 0 ? data[0].url : "assets/placeholder_cat.jpg"
        imageBtn.disabled = false;
    })
    .catch(() => {
        imagePlaceholder.src = "assets/placeholder_cat.jpg";
        imageBtn.disabled = false;
    });
}

let aud     = document.getElementById("audio");
let fish    = document.getElementById("fish-img");

aud.onpause = function() {
    fish.classList.remove('rotating');
};
aud.onplay = function() {
    fish.classList.add('rotating');
};