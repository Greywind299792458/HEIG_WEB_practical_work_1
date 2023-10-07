// listen to the button click to fetch a new cat image
const imageBtn = document.getElementById("fetch-image");
if(imageBtn !== null) {
    imageBtn.addEventListener('click', () => {
        fetchNewImage();
    });
}

// fetch new cat image from the cat API and replaces the image
function fetchNewImage() {
    imageBtn.disabled = true;
    const imagePlaceholder = document.getElementById("result-image");
    if(imagePlaceholder === null) { return; }

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then((data) => {
        imagePlaceholder.src = data.length > 0 ? data[0].url : "assets/placeholder_cat.jpg"
    })
    .catch(() => {
        imagePlaceholder.src = "assets/placeholder_cat.jpg";
        imageBtn.disabled = false;
    });

    imagePlaceholder.onload = function() {
        imageBtn.disabled = false;
    }
}

const aud   = document.getElementById("fish-audio");
const fish  = document.getElementById("fish-img");

// stop the fish rotation when the music stops
aud.onpause = function() {
    if(fish != null) {
        fish.classList.remove('rotating');
    }
};

// start the fish rotation when the music stops
aud.onplay = function() {
    if(fish != null) {
        fish.classList.add('rotating');
    }
};