let button = document.getElementById('button');

console.log('button: ', button);

button.addEventListener('click', () => {
    window.open("http://localhost:5000/gamesearcher");
})