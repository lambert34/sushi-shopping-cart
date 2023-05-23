window.addEventListener('click', function (event) {

    console.log(event.target)

if (event.target.dataset.action === 'plus') {

    const counterWrapper = event.target.closest('.counter-wrapper'); 
    console.log(counterWrapper);

    const counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter);

    counter.innerText = ++counter.innerText;
};

if (event.target.dataset.action === 'minus') {
    console.log('-')

    const counterWrapper = event.target.closest('.counter-wrapper'); 
    console.log(counterWrapper);

    const counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter);

    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
};
});