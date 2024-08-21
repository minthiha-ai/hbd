document.addEventListener('DOMContentLoaded', function () {
    // var audio = new Audio('happy_birthday.mp3');
    var audio = new Audio('fly_me_to_the_moon.mp3');

    // Play button click handler
    document.getElementById('play-button').addEventListener('click', function () {
        audio.play().then(function () {
            // Hide the overlay and show the main content after audio starts
            document.getElementById('overlay').classList.remove('d-flex');
            document.getElementById('overlay').classList.add('d-none');
            document.getElementById('play-button').classList.add('d-none');
            document.getElementById('main-content').classList.remove('d-none');
            document.getElementById('main-content').classList.add('d-flex');
            document.body.style.overflow = 'auto'; // Allow scrolling on the page
        }).catch(function (error) {
            console.log('Audio play failed:', error);
        });
    });
});
