const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

//js for the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const product = button.parentElement;
        const productName = product.querySelector('h2').textContent;

        const cartItem = document.createElement('li');
        cartItem.textContent = productName;
        cartItems.appendChild(cartItem);

        cart.style.right = '0';
    })
})

document.addEventListener('click', (Event) => {
    if(!cart.contains(EventTarget) && EventTarget !== cart){
        cart.stye.right = '-300px';
    }
})


