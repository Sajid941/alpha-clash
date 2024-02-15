function play(){
    //play button event
    hideElementById('home-section');
    showElementById('play-ground');
    //called countinue function
    continueGame();
}
function continueGame(){
    //created radomly alphabet
    const alphabet =randomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    //change alphabet keybord color
    setAlphabetBgColor(alphabet)
}

function keyBoardButtonPress(event){
    const playerPressed =event.key;
    //check current alphabet 
    const currentAlphabetElement =document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    //check ket press wrong or rigth
    if(playerPressed === expectedAlphabet){
        continueGame();
        removeAlphabetBgColor(expectedAlphabet)
        //set score
        const score=getElementValueById('current-score');
        const updatedScore=score+1;
        setElementValuebyId('current-score',updatedScore);
    }
    else{
        const life=getElementValueById('current-life');
        const updatedLife=life-1;
        setElementValuebyId('current-life',updatedLife)
    }

}
document.addEventListener('keyup',keyBoardButtonPress);