// Listen for the key press
window.addEventListener('keydown', (e) => {
    // Lets check the key code values
    // console.log(e);
    
    // Check the key code we are getting
    let keycode = e.keyCode;
    // console.log(keycode);

    // Get the corresponding div tag for the key pressed
    const key = document.querySelector(`[data-key="${keycode}"]`);
    // console.log(key);

    
})