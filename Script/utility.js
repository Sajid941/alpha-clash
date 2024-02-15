function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function randomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr= alphabetString.split('')
    const index = Math.round(Math.random()*25)
    const alphabet= alphabetArr[index];
    return alphabet;
}
function setAlphabetBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}