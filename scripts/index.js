const imageBtn = document.getElementById("generate-image-btn");
console.log(imageBtn);

if(imageBtn !== null) {
    imageBtn.addEventListener('click', () => {
        fetchNewImage();
    })
}

function fetchNewImage() {
    const imagePlaceholder = document.getElementById("placeholder-image");
    if(imagePlaceholder === null) { return; }
    fetch("https://cataas.com/cat")
    .then((response) => response.blob())
    .then((blob) => {
        imagePlaceholder.src = URL.createObjectURL(blob);
    });
}