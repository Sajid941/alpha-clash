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
function removeAlphabetBgColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value
}
function setElementValuebyId(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}
function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    return elementValueText;
}