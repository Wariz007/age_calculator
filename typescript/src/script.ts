const dayInputBox = document.getElementById('day') as HTMLInputElement;
const monthInputBox = document.getElementById('month') as HTMLInputElement;
const yearInputBox = document.getElementById('year') as HTMLInputElement;
const arrowBtn = document.querySelector('.arrow_icon');

arrowBtn?.addEventListener('click', () => {
    console.log(dayInputBox);
    console.log(monthInputBox);
    console.log(yearInputBox);
}) 