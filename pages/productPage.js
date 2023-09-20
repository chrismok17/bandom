const loadProductPage = async (productID) => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML= '';
    
    const response = await fetch('data.json');
    const products = await response.json();
    
    const product = products.find((item) => item.id === parseInt(productID));

    document.title = `Bandom | ${product.product_name}`;

    // Product Div
    const productInfo = document.createElement('div');
    productInfo.setAttribute('id', 'product-info');

    // Image
    const productImage = document.createElement('div');
    productImage.setAttribute('id', 'product-image');

    const image = document.createElement('img');
    image.src = product.image
    productImage.appendChild(image)

    // Name
    const productName = document.createElement('div');
    productName.setAttribute('id', 'product-name');
    productName.innerHTML = `<h3>${product.product_name}</h3>`

    // Price
    const productPrice = document.createElement('div');
    productPrice.setAttribute('id', 'product-price');
    productPrice.innerHTML = `<h3>$${product.price}</h3>`

    // Description
    const productDescription = document.createElement('div');
    productDescription.setAttribute('id', 'product-description')
    productDescription.innerHTML = `<p>${product.description}</p>`

    // Dropdown for options
    const dropdownDiv = document.createElement('div');
    dropdownDiv.setAttribute('id', 'options');

    // Size div for the size options
    const sizeDiv = document.createElement('div')
    sizeDiv.setAttribute('id', 'size-container')
    dropdownDiv.appendChild(sizeDiv)

    const sizeFormSelect = document.createElement('select');
    sizeFormSelect.setAttribute('id', 'size');
    sizeFormSelect.setAttribute('name', 'size')

    product.sizes.forEach((size) => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        if (size === 'Sizes') {
            option.disabled = true;
            option.selected = true;
        }
        sizeFormSelect.appendChild(option);
    });

    sizeDiv.appendChild(sizeFormSelect)

    // Colour div for the colours

    const colourDiv = document.createElement('div')
    colourDiv.setAttribute('id', 'colour-container')
    dropdownDiv.appendChild(colourDiv)

    const colourFormSelect = document.createElement('select');
    colourFormSelect.setAttribute('id', 'colour');
    colourFormSelect.setAttribute('name', 'colour')

    product.colours.forEach((colour) => {
        const option = document.createElement('option');
        option.value = colour;
        option.textContent = colour;
        if (colour === "Colours") {
            option.disabled = true;
            option.selected = true
        }
        colourFormSelect.appendChild(option);
    })

    colourDiv.appendChild(colourFormSelect)

    // Rating!

    const ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('id', 'rating');

    const stars = product.rating;
    for (let i = 0; i < stars; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '&#9733';
        ratingDiv.appendChild(star);
    };

    const emptyStars = 5 - stars;
    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElement('span');
        star.classList.add('star', 'empty');
        star.innerHTML = '&#9733';
        ratingDiv.appendChild(star);
    }

    // Attach it all!
    productInfo.appendChild(productImage)
    productInfo.appendChild(productName)
    productInfo.appendChild(productPrice)
    productInfo.appendChild(productDescription)
    contentContainer.appendChild(productInfo);
    contentContainer.appendChild(dropdownDiv)
    contentContainer.appendChild(ratingDiv)
};

export { loadProductPage };