const btnMinus = document.querySelector('[data-action="minus"]');

const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

console.log(counter);

btnMinus.addEventListener('click', function() {
    console.log('Minus clk');

if ( parseInt(counter.innerText) > 1 ) {
    counter.innerText = --counter.innerText;
}

});

btnPlus.addEventListener('click', function() {
    console.log('Plus clk');
    counter.innerText = ++counter.innerText;
});

