//Challange 1: Your age in days

function gettingYourBirthYear() {
let birthYear = prompt('Enter your birthyear!');
let ageInDays = (2020 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old!');
h1.setAttribute('id' , 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}