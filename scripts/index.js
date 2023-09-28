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
    fetch("https://cataas.com/cat")
    .then((response) => response.blob())
    .then((blob) => {
        imagePlaceholder.src = URL.createObjectURL(blob);
        imageBtn.disabled = false;
    })
    .catch(() => {
        imagePlaceholder.src = "assets/placeholder_cat.jpg";
        imageBtn.disabled = false;
    });
}