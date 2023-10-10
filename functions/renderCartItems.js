const renderCartItems = () => {
    const contentContainer = document.getElementById('content');
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || {};

    const uniqueItems = {};
    let total = 0;

    for (const id in cartItems) {
        const item = cartItems[id];
        const productID = item.product_id;

        if (uniqueItems[productID]) {
            uniqueItems[productID].quantity += 1;
        } else {
            uniqueItems[productID] = {
                product: item,
                quantity: 1,
            };
        }

        // Calculate the total for this item
        const itemPrice = parseFloat(item.product_price);
        if (!isNaN(itemPrice)) {
            total += itemPrice;
        }
    }
    
    function updateItemDisplay(itemDiv, itemName, itemPriceDiv, quantity, item) {
        itemName.innerHTML = `<h3>${quantity}x ${item.product_name}</h3>`;
        itemPriceDiv.innerHTML = `<p>$${(quantity * parseFloat(item.product_price)).toFixed(2)}</p>`;
    }

    const updateCartInStorage = () => {
        sessionStorage.setItem('cart', JSON.stringify(Object.values(uniqueItems).map(cartItem => cartItem.product)));
        updateTotalPrice();
    };

    for (const id in uniqueItems) {
        const cartItem = uniqueItems[id];
        const item = cartItem.product;
        let quantity = cartItem.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        // Image
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        itemDiv.appendChild(itemImage);
        const image = document.createElement('img');
        image.src = item.product_image;
        itemImage.appendChild(image);

        // Name
        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemDiv.appendChild(itemName);

        // Price
        const itemPriceDiv = document.createElement('div');
        itemPriceDiv.classList.add('item-price');

        // Quantity controls (+ and - buttons)
        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const minusButton = document.createElement('button');
        minusButton.innerText = '-';
        quantityControls.appendChild(minusButton);

        const plusButton = document.createElement('button');
        plusButton.innerText = '+';
        quantityControls.appendChild(plusButton);

        // Attach event listeners to buttons
        minusButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity -= 1;
                cartItem.quantity -= 1;
                total -= parseFloat(item.product_price);
                updateCartInStorage();
                updateItemDisplay(itemDiv, itemName, itemPriceDiv, quantity, item);
                updateTotalPrice(); // Update the total price when an item is removed
            } else {
                // Remove the item from the cart if quantity is 1
                delete uniqueItems[id];
                contentContainer.removeChild(itemDiv);
                updateCartInStorage();
                updateTotalPrice(); // Update the total price when an item is removed
            }
        });

        plusButton.addEventListener('click', () => {
            quantity += 1;
            cartItem.quantity += 1;
            total += parseFloat(item.product_price);
            updateCartInStorage();
            updateItemDisplay(itemDiv, itemName, itemPriceDiv, quantity, item);
            updateTotalPrice(); // Update the total price when an item is added
        });
        itemDiv.appendChild(itemPriceDiv);
        if (window.location.hash.substring(1) == '/cart') {
            itemDiv.appendChild(quantityControls); // Append quantityControls here
        }
        
        
        
        contentContainer.appendChild(itemDiv);

        // Initial item display
        updateItemDisplay(itemDiv, itemName, itemPriceDiv, quantity, item);
    }

    // Total
    const totalPrice = document.createElement('div');
    totalPrice.id = 'total-price';
    if (Object.keys(uniqueItems).length === 0) {
        // No items in the cart, display total as $0
        totalPrice.innerHTML = `<h3 id="total-amount">Total: $0.00</h3>`;
    } else {
        totalPrice.innerHTML = `<h3 id="total-amount">Total: $${total.toFixed(2)}</h3>`;
    }
    contentContainer.appendChild(totalPrice);

    const updateTotalPrice = () => {
        if (Object.keys(uniqueItems).length === 0) {
            // No items in the cart, display total as $0
            totalPrice.innerHTML = `<h3 id="total-amount">Total: $0.00</h3>`;
        } else {
            totalPrice.innerHTML = `<h3 id="total-amount">Total: $${total.toFixed(2)}</h3>`;
        }
    };

    updateTotalPrice();
};

export { renderCartItems };
