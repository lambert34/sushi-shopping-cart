
// Данный блок кода справедлив по отношению к первому элементу, подходящему под условия 
// поиска по дата-актион(экшн)
// const btnMinus = document.querySelector('[data-action="minus"]');

// const btnPlus = document.querySelector('[data-action="plus"]');

// const counter = document.querySelector('[data-counter]');

// console.log(counter);

// btnMinus.addEventListener('click', function() {
//     console.log('Minus clk');

// if ( parseInt(counter.innerText) > 1 ) {
//     counter.innerText = --counter.innerText;
// }

// });

// btnPlus.addEventListener('click', function() {
//     console.log('Plus clk');
//     counter.innerText = ++counter.innerText;
// });


// const cartWrapper = document.querySelector('.cart-wrapper');

// window.addEventListener('click', function (event) {
//     if (event.target.hasAttribute('data-cart')) {

//         const card = event.target.closest('.card');
        
//         const productInfo = {
//             id: card.dataset.id,
//             imgSrc: card.querySelector('.product-img').getAttribute('src'),
//             title: card.querySelector('.item-title').innerText,
//             itemsInBox: card.querySelector('[data-items-in-box]').innerText,
//             weight: card.querySelector('.price__weight').innerText,
//             price: card.querySelector('.price__currency').innerText,
//             counter: card.querySelector('[data-counter]').innerText,
//         };


//     const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
//     <div class="cart-item__top">
//         <div class="cart-item__img">
//             <img src="${productInfo.imgSrc}" alt="">
//         </div>
//         <div class="cart-item__desc">
//             <div class="cart-item__title">${productInfo.title}</div>
//             <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

//             <!-- cart-item__details -->
//             <div class="cart-item__details">

//                 <div class="items items--small counter-wrapper">
//                     <div class="items__control" data-action="minus">-</div>
//                     <div class="items__current" data-counter="">${productInfo.counter}</div>
//                     <div class="items__control" data-action="plus">+</div>
//                 </div>

//                 <div class="price">
//                     <div class="price__currency">${productInfo.price}</div>
//                 </div>

//             </div>
//             <!-- // cart-item__details -->

//         </div>
//     </div>
// </div>`;

// cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

//     }
// })