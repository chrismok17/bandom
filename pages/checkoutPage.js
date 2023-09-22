import { cartItems } from "../functions/renderCartItems.js";

const loadCheckoutPage = () => {
    const contentContainer = document.getElementById('content');
    document.title = 'Bandom | Cart';
    contentContainer.innerHTML= '';

    const orderData = JSON.parse(sessionStorage.getItem('orderData'))

    const tax = orderData.totalPrice * 0.12
    const shipping = 5.00
    const total = orderData.totalPrice + tax + shipping

    cartItems();

    const totalsDiv = document.getElementById('total-price');
    totalsDiv.classList.add('hidden')

    // Create total amount div
    const totalDiv = document.createElement('div');
    totalDiv.id = 'total-container';
    
    const subtotalsDiv = document.createElement('div');
    subtotalsDiv.id = 'subtotals';
    subtotalsDiv.innerHTML = `<p>Subtotal</p><p>Tax</p><p>Shipping & Handling</p><h4>Total</h4>`
    totalDiv.appendChild(subtotalsDiv)

    const pricesDiv = document.createElement('div');
    pricesDiv.id = 'prices';
    pricesDiv.innerHTML = `<p>$${orderData.totalPrice}</p><p>$${tax.toFixed(2)}</p><p>$5.00</p><h4>$${total.toFixed(2)}</h4>`
    totalDiv.appendChild(pricesDiv)

    // User Info
    const userDiv = document.createElement('div');
    userDiv.id = 'user-details';
    userDiv.innerHTML = `<h3>To:</h3><p>${orderData.name}</p><p>${orderData.streetName}</p><p>${orderData.city}, ${orderData.province}, ${orderData.country}</p><p>${orderData.postalCode}</p><p>Card Number: ${orderData.cardNumber}</p>`

    // Create a Checkout button
    const checkoutDiv = document.createElement('div');
    checkoutDiv.setAttribute('id', 'checkout-container');
    contentContainer.appendChild(checkoutDiv)
    
    // Attach the text and anchor
    const checkoutText = document.createElement('div');
    checkoutText.setAttribute('id', 'checkout-text');
    checkoutText.innerHTML = 'Checkout';
    
    checkoutDiv.appendChild(checkoutText);
    

    checkoutDiv.addEventListener('click', () => {
        alert('Order Placed, Thank You!');
        window.location.href = '#/';
    })

    contentContainer.appendChild(totalDiv)
    contentContainer.appendChild(userDiv)
    contentContainer.appendChild(checkoutDiv)
}

export { loadCheckoutPage };