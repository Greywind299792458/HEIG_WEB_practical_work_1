function onLoad() {
    // listen to the button click to fetch a new cat image
    const imageBtn = document.getElementById("fetch-image");
    if(imageBtn !== null) {
        imageBtn.addEventListener('click', () => {
            fetchNewImage(imageBtn);
        });
    }

    const audio     = document.getElementById("fish-audio");
    const fishImg   = document.getElementById("fish-img");
    if(audio == null || fishImg == null) { return; }

    // stops the fish rotation when the music stops
    audio.onpause = function() {
        fishImg.classList.remove('rotating');
    };
    // starts the fish rotation when the music stops
    audio.onplay = function() {
        fishImg.classList.add('rotating');
    };
}

// fetch new cat image from the cat API and replaces the image
function fetchNewImage(imageBtn) {
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
