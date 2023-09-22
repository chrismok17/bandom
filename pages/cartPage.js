import { cartItems } from "../functions/renderCartItems.js";

const loadCartPage = () => {
    const contentContainer = document.getElementById('content');
    document.title = 'Bandom | Cart';
    contentContainer.innerHTML= '';

    cartItems()

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

    // City field
    const cityLabel = document.createElement('label');
    cityLabel.textContent = 'City:';
    const cityInput = document.createElement('input');
    cityInput.setAttribute('type', 'text');
    cityInput.setAttribute('name', 'city');

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

    // Autofill Address
    const addressAutofill = document.createElement('div');
    addressAutofill.classList.add('autofill')
    addressAutofill.innerText = 'Auto Complete'

    addressAutofill.addEventListener('click', () => {
        nameInput.value = 'John Doe';
        streetNameInput.value = '12345 ABC Street';
        postalCodeInput.value = 'V0V 0V0';
        cityInput.value = 'Vancouver';
        provinceInput.value = 'BC';
        countryInput.value = 'Canada';
    });

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

    // Autofill Payment
    const paymentAutofill = document.createElement('div');
    paymentAutofill.classList.add('autofill')
    paymentAutofill.innerText = 'Auto Complete'

    paymentAutofill.addEventListener('click', () => {
        cardNumberInput.value = '1234 5678 9101 1121';
        cvvInput.value = '123';
        nameOnCardInput.value = 'John Doe';
    });


    // Create a submit button
    const submitButton = document.createElement('div');
    submitButton.id = 'submit-button'
    submitButton.innerHTML = 'Confirm';

    submitButton.addEventListener('click', () => {
        const totalAmount = document.getElementById('total-amount');
        const totalAmountString = totalAmount.textContent;
        
        const formData = {
            name: nameInput.value,
            streetName: streetNameInput.value,
            postalCode: postalCodeInput.value,
            city: cityInput.value,
            province: provinceInput.value,
            country: countryInput.value,
            cardNumber: cardNumberInput.value,
            nameOnCard: nameOnCardInput.value,
            totalPrice: parseFloat(totalAmountString.replace('Total: $', ''))
        };

        sessionStorage.setItem('orderData', JSON.stringify(formData));
        window.location.href = '#/cart/checkout'
    });

    // Append all the form elements to the form
    addressDetailsSection.appendChild(addressDetailsTitle);
    addressDetailsSection.appendChild(nameLabel);
    addressDetailsSection.appendChild(nameInput);
    addressDetailsSection.appendChild(streetNameLabel);
    addressDetailsSection.appendChild(streetNameInput);
    addressDetailsSection.appendChild(postalCodeLabel);
    addressDetailsSection.appendChild(postalCodeInput);
    addressDetailsSection.appendChild(cityLabel);
    addressDetailsSection.appendChild(cityInput);
    addressDetailsSection.appendChild(provinceLabel);
    addressDetailsSection.appendChild(provinceInput);
    addressDetailsSection.appendChild(countryLabel);
    addressDetailsSection.appendChild(countryInput);
    addressDetailsSection.appendChild(addressAutofill);

    paymentInfoSection.appendChild(paymentInfoTitle);
    paymentInfoSection.appendChild(cardNumberLabel);
    paymentInfoSection.appendChild(cardNumberInput);
    paymentInfoSection.appendChild(cvvLabel);
    paymentInfoSection.appendChild(cvvInput);
    paymentInfoSection.appendChild(nameOnCardLabel);
    paymentInfoSection.appendChild(nameOnCardInput);
    paymentInfoSection.appendChild(paymentAutofill);

    form.appendChild(addressDetailsSection);
    form.appendChild(paymentInfoSection);
    form.appendChild(submitButton);

    // Append the form to the container
    formContainer.appendChild(form);
    contentContainer.appendChild(formContainer)
};

export { loadCartPage };