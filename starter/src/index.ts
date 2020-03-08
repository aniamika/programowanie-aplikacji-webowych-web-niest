document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.button');
    button.addEventListener('click', count);

    const apply = document.querySelector('.apply');
    apply.addEventListener('click', createElements);
    
    // all calculations
    function count() {
        const luckyValue: number = +(document.querySelector('.lucky') as HTMLInputElement).value;
        const yearValue: number = +(document.querySelector('.year') as HTMLInputElement).value;
        const ageValue: number = +(document.querySelector('.age') as HTMLInputElement).value;
        
        total(luckyValue, yearValue, ageValue);
        average(luckyValue, yearValue, ageValue);
        min(luckyValue, yearValue, ageValue);
        max(luckyValue, yearValue, ageValue);
    }

    // create inputs
    function createElements() {
        const number: number = +(document.querySelector('.inputsNumber') as HTMLInputElement).value;

        for(let i = 0; i < number; i++) {
            // new inputs
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            const inputsSection = document.querySelector('.inputs');
            inputsSection.appendChild(newInput);
            newInput.className = 'input';

            // new delete buttons
            const newDeleteButton = document.createElement('button');
            newDeleteButton.addEventListener('click', deleteInput);
            newInput.parentNode.insertBefore(newDeleteButton, newInput.nextSibling);
            newDeleteButton.className = 'delete';
            newDeleteButton.innerHTML = 'delete';

            // validation
            function check() {
                const inputValue: number = +(newInput.value);
                if (Number.isNaN(inputValue)) {
                    alert('it must be a number');
                } 
            }
            check();

        }


    }

    // delete inputs
    function deleteInput() {
        this.previousElementSibling.remove();
        this.remove();
    }

    // function total(data: number[]) {
    function total(luckyValue: number, yearValue: number, ageValue: number) {
        const total: number = luckyValue + yearValue + ageValue;
        const totalResult = document.querySelector('.totalResult');
        totalResult.innerHTML = total.toString();
    }
    // average
    function average(luckyValue: number, yearValue: number, ageValue: number) {
        const average: number = (luckyValue + yearValue + ageValue) / 3;
        const averageResult = document.querySelector('.averageResult');
        averageResult.innerHTML = average.toString();
    }
    // min
    function min(luckyValue: number, yearValue: number, ageValue: number) {
        const min: number = Math.min(luckyValue, yearValue, ageValue);
        const minResult = document.querySelector('.minResult');
        minResult.innerHTML = min.toString();
    }
    // max
    function max(luckyValue: number, yearValue: number, ageValue: number) {
        const max: number = Math.max(luckyValue, yearValue, ageValue);
        const maxResult = document.querySelector('.maxResult');
        maxResult.innerHTML = max.toString();
    }

});