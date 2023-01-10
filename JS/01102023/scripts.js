const money = document.querySelector('#money');
const months = document.querySelector('#months');
const interest = document.querySelector('#interest');

const initialAmount = document.querySelector('#initialAmount');
const withInterest = document.querySelector('#withInterest');
const interestBar = document.querySelector('.interestBar');

const calculate = () => {
    const initialDeposit = parseFloat(money.value);
    const monthsValue = parseFloat(months.value) / 12;
    const interestValue = parseFloat(interest.value) * 0.01;

    if (!initialDeposit || !monthsValue || !interestValue) {
        return;
    }
    
    const result = initialDeposit + (initialDeposit * interestValue * monthsValue);
                // 10000 + (10000 * 0.12 * 1) = 11200
    const height = ( (result / initialDeposit) * 100) + "px";
                // (11200 / 10000) = 1.12 * 100 = 112px
    interestBar.style.height = height;

    initialAmount.innerText = initialDeposit.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );
    withInterest.innerText = result.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );
}

calculate();

money.addEventListener('input', calculate);
interest.addEventListener('input', calculate);
months.addEventListener('change', calculate);
