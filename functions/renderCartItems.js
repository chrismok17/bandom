const cartItems = () => {
    const contentContainer = document.getElementById('content');
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

    const uniqueItems = {};
    
    let total = 0

    cartItems.forEach((item) => {
        const productID = item.product_id;

        if (uniqueItems[productID]) {
            uniqueItems[productID].quantity += 1;
        } else {
            uniqueItems[productID] = {
                product: item,
                quantity: 1
            }
        }

        const itemPrice = parseFloat(item.product_price);
        if (!isNaN(itemPrice)) {
            total += itemPrice
        };

    });

    for (const id in uniqueItems) {
        const cartItem = uniqueItems[id];
        const item = cartItem.product;
        const quantity = cartItem.quantity;

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
        itemName.innerHTML = `<h3>${quantity}x ${item.product_name}<h3>`
        itemDiv.appendChild(itemName)

        // Price
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.innerHTML = `<p>$${(quantity * item.product_price)}</p>`;
        itemDiv.appendChild(itemPrice);

        contentContainer.appendChild(itemDiv);
    }

    // Total
    const totalPrice = document.createElement('div');
    totalPrice.id = 'total-price';
    totalPrice.innerHTML = `<h3 id="total-amount">Total: $${total}<h3>`
    contentContainer.appendChild(totalPrice)
}

export { cartItems };