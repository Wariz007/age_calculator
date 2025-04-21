"use strict";
//get input elements
const dayInputBox = document.getElementById('day');
const monthInputBox = document.getElementById('month');
const yearInputBox = document.getElementById('year');
const arrowBtn = document.querySelector('.arrow_icon');
//now grab result containers
const yearResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const dayResult = document.getElementById('day-result');
//calculate age function
function calculateAge() {
    const day = parseInt(dayInputBox.value);
    const month = parseInt(monthInputBox.value) - 1;
    const year = parseInt(yearInputBox.value);
    const today = new Date();
    const birthDate = new Date(year, month, day);
    //validate input
    if (isNaN(birthDate.getTime()) || birthDate > today) {
        console.log('There is an error here');
        return;
    }
    //calculate difference between today's date and user's date
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    //adjust for negative values
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    yearResult.textContent = ageYears.toString();
    monthResult.textContent = ageMonths.toString();
    dayResult.textContent = ageDays.toString();
}
//submit button
arrowBtn === null || arrowBtn === void 0 ? void 0 : arrowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculateAge();
});
