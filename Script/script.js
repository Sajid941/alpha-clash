function play(){
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    const alphabet =randomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setAlphabetBgColor(alphabet)
}