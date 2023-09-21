const loadCartPage = () => {
    const contentContainer = document.getElementById('content');
    document.title = 'Bandom | Cart';
    contentContainer.innerHTML= '';

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
    totalPrice.innerHTML = `<h3>Total: $${total}<h3>`
    contentContainer.appendChild(totalPrice)

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container'
    
    // Create a form element
    const form = document.createElement('form');

    // Create a section for Address Details
    const addressDetailsSection = document.createElement('div');
    addressDetailsSection.id = 'address-section'
    const addressDetailsTitle = document.createElement('h3');
    addressDetailsTitle.textContent = 'Address Details';

    // Name field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');

    // Street Name field
    const streetNameLabel = document.createElement('label');
    streetNameLabel.textContent = 'Street Name:';
    const streetNameInput = document.createElement('input');
    streetNameInput.setAttribute('type', 'text');
    streetNameInput.setAttribute('name', 'street-name');

    // Postal Code field
    const postalCodeLabel = document.createElement('label');
    postalCodeLabel.textContent = 'Postal Code:';
    const postalCodeInput = document.createElement('input');
    postalCodeInput.setAttribute('type', 'text');
    postalCodeInput.setAttribute('name', 'postal-code');

    // Province field
    const provinceLabel = document.createElement('label');
    provinceLabel.textContent = 'Province:';
    const provinceInput = document.createElement('input');
    provinceInput.setAttribute('type', 'text');
    provinceInput.setAttribute('name', 'province');

    // Country field
    const countryLabel = document.createElement('label');
    countryLabel.textContent = 'Country:';
    const countryInput = document.createElement('input');
    countryInput.setAttribute('type', 'text');
    countryInput.setAttribute('name', 'country');

    // Create a section for Payment Information
    const paymentInfoSection = document.createElement('div');
    paymentInfoSection.id = 'payment-section'
    const paymentInfoTitle = document.createElement('h3');
    paymentInfoTitle.textContent = 'Payment Information';

    // Card Number field
    const cardNumberLabel = document.createElement('label');
    cardNumberLabel.textContent = 'Card Number:';
    const cardNumberInput = document.createElement('input');
    cardNumberInput.setAttribute('type', 'text');
    cardNumberInput.setAttribute('name', 'card-number');

    // CVV field
    const cvvLabel = document.createElement('label');
    cvvLabel.textContent = 'CVV:';
    const cvvInput = document.createElement('input');
    cvvInput.setAttribute('type', 'text');
    cvvInput.setAttribute('name', 'cvv');

    // Name on Card field
    const nameOnCardLabel = document.createElement('label');
    nameOnCardLabel.textContent = 'Name on Card:';
    const nameOnCardInput = document.createElement('input');
    nameOnCardInput.setAttribute('type', 'text');
    nameOnCardInput.setAttribute('name', 'name-on-card');

    // Create a submit button
    const submitButton = document.createElement('div');
    submitButton.id = 'submit-button'
    submitButton.innerHTML = 'Confirm';

    // Append all the form elements to the form
    addressDetailsSection.appendChild(addressDetailsTitle);
    addressDetailsSection.appendChild(nameLabel);
    addressDetailsSection.appendChild(nameInput);
    addressDetailsSection.appendChild(streetNameLabel);
    addressDetailsSection.appendChild(streetNameInput);
    addressDetailsSection.appendChild(postalCodeLabel);
    addressDetailsSection.appendChild(postalCodeInput);
    addressDetailsSection.appendChild(provinceLabel);
    addressDetailsSection.appendChild(provinceInput);
    addressDetailsSection.appendChild(countryLabel);
    addressDetailsSection.appendChild(countryInput);

    paymentInfoSection.appendChild(paymentInfoTitle);
    paymentInfoSection.appendChild(cardNumberLabel);
    paymentInfoSection.appendChild(cardNumberInput);
    paymentInfoSection.appendChild(cvvLabel);
    paymentInfoSection.appendChild(cvvInput);
    paymentInfoSection.appendChild(nameOnCardLabel);
    paymentInfoSection.appendChild(nameOnCardInput);

    form.appendChild(addressDetailsSection);
    form.appendChild(paymentInfoSection);
    form.appendChild(submitButton);

    // Append the form to the container
    formContainer.appendChild(form);
    contentContainer.appendChild(formContainer)
};

export { loadCartPage };