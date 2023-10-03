const countCartItems = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    console.log(cart.length)
    const cartBadge = document.getElementById('cart-badge');
    if (cart.length === 0) {
        cartBadge.classList.add('hidden')
    } else {
        cartBadge.textContent = cart.length.toString();
        cartBadge.classList.remove('hidden');
    };  
};

export { countCartItems };