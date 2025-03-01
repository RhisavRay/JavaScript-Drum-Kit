// Listen for the key press
window.addEventListener('keydown', (e) => {
    // Key code of the key pressed
    let keycode = e.keyCode;

    // Fetch audio file with that data-key
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);
    
    // To prevent null value return
    if(!audio) return;

    audio.play();
})