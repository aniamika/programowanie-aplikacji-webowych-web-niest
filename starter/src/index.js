document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    button.addEventListener('click', count);
    const apply = document.querySelector('.apply');
    apply.addEventListener('click', createElements);
    function count() {
        const luckyValue = +document.querySelector('.lucky').value;
        const yearValue = +document.querySelector('.year').value;
        const ageValue = +document.querySelector('.age').value;
        total(luckyValue, yearValue, ageValue);
        average(luckyValue, yearValue, ageValue);
        min(luckyValue, yearValue, ageValue);
        max(luckyValue, yearValue, ageValue);
    }
    function createElements() {
        const number = +document.querySelector('.inputsNumber').value;
        for (let i = 0; i < number; i++) {
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            const inputsSection = document.querySelector('.inputs');
            inputsSection.appendChild(newInput);
            newInput.className = 'input';
            const newDeleteButton = document.createElement('button');
            newDeleteButton.addEventListener('click', deleteInput);
            newInput.parentNode.insertBefore(newDeleteButton, newInput.nextSibling);
            newDeleteButton.className = 'delete';
            newDeleteButton.innerHTML = 'delete';
            function check() {
                const inputValue = +(newInput.value);
                if (Number.isNaN(inputValue)) {
                    alert('it must be a number');
                }
            }
            check();
        }
    }
    function deleteInput() {
        this.previousElementSibling.remove();
        this.remove();
    }
    function total(luckyValue, yearValue, ageValue) {
        const total = luckyValue + yearValue + ageValue;
        const totalResult = document.querySelector('.totalResult');
        totalResult.innerHTML = total.toString();
    }
    function average(luckyValue, yearValue, ageValue) {
        const average = (luckyValue + yearValue + ageValue) / 3;
        const averageResult = document.querySelector('.averageResult');
        averageResult.innerHTML = average.toString();
    }
    function min(luckyValue, yearValue, ageValue) {
        const min = Math.min(luckyValue, yearValue, ageValue);
        const minResult = document.querySelector('.minResult');
        minResult.innerHTML = min.toString();
    }
    function max(luckyValue, yearValue, ageValue) {
        const max = Math.max(luckyValue, yearValue, ageValue);
        const maxResult = document.querySelector('.maxResult');
        maxResult.innerHTML = max.toString();
    }
});
//# sourceMappingURL=index.js.map