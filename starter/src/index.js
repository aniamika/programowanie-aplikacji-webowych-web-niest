document.addEventListener('DOMContentLoaded', function () {

    // total
    const button = document.querySelector('.button');
    button.addEventListener('click', onPoliczClick);
    
    function onPoliczClick() {
        const luckyValue = +document.querySelector('.lucky').value;
        const yearValue = parseInt(document.querySelector('.year').value);
        const ageValue = parseInt(document.querySelector('.age').value);
        total(luckyValue, yearValue, ageValue);
        average(luckyValue, yearValue, ageValue);
        min(luckyValue, yearValue, ageValue);
        max(luckyValue, yearValue, ageValue);
    }

    // function total(data: number[]) {
    function total(luckyValue, yearValue, ageValue) {


        const total = luckyValue + yearValue + ageValue;

        const totalResult = document.querySelector('.totalResult');
        totalResult.innerHTML = total;
    }

    // average
    function average(luckyValue, yearValue, ageValue) {


        const average = (luckyValue + yearValue + ageValue) / 3;

        const averageResult = document.querySelector('.averageResult');
        averageResult.innerHTML = average;
    }

    // min
    function min(luckyValue, yearValue, ageValue) {

        const min = Math.min(luckyValue, yearValue, ageValue);

        const minResult = document.querySelector('.minResult');
        minResult.innerHTML = min;
    }

    // max
    function max(luckyValue, yearValue, ageValue) {


        const max = Math.max(luckyValue, yearValue, ageValue);

        const maxResult = document.querySelector('.maxResult');
        maxResult.innerHTML = max;
    }

});