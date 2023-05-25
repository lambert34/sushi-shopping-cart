window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    const counterWrapper = event.target.closest('.counter-wrapper'); 

    counter = counterWrapper.querySelector('[data-counter]');
    }

if (event.target.dataset.action === 'plus') {
    
    counter.innerText = ++counter.innerText;
};

if (event.target.dataset.action === 'minus') {

     // Условие проверяет товар, который нахлдится в корзине
    if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
        event.target.closest('.cart-item').remove();
        // удаляет товар из корзины
        }
    
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        event.target.closest('.cart-item').remove();

           // Отображение статуса корзины
        toggleCartStatus();
    }
};
});