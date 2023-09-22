const countCartItems = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = cart.length.toString();
};

export { countCartItems };