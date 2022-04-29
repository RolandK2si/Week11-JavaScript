const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pexels-eugene-liashchevskyi-10812361.jpg", "pexels-figen-kokol-11614041.jpg", "pexels-nikita-igonkin-10038447.jpg", "pexels-pixa-pexel-11626190.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}