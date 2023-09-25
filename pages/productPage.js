import { countCartItems } from '../functions/countCartItems.js';

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

    let selectedSize = 'Sizes';
    let selectedColour = 'Colours'

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

        if (size.includes("(Out of Stock)")) {
            option.disabled = true;
        }
        sizeFormSelect.appendChild(option);
    });

    sizeFormSelect.addEventListener('change', () => {
        selectedSize = sizeFormSelect.value;
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
    });

    colourFormSelect.addEventListener('change', () => {
        selectedColour = colourFormSelect.value;
    });

    colourDiv.appendChild(colourFormSelect)

    // Cart div

    const cartDiv = document.createElement('div');
    cartDiv.id = 'add-to-cart'

    const cartSVG = document.createElement('img');
    cartSVG.src = 'svgs/add_to_cart.svg'
    cartDiv.appendChild(cartSVG)

    const checkmarkSVG = document.createElement('img');
    checkmarkSVG.src = 'svgs/checkmark.svg'
    checkmarkSVG.classList.add('hidden', 'checkmark')
    cartDiv.appendChild(checkmarkSVG)

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('hidden', 'form-error');
    errorDiv.innerHTML = '<p>Size/Colour not selected.</p>'
    

    cartDiv.addEventListener('click', (e) => {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        if (selectedColour === 'Colours' || selectedSize === 'Sizes') {
            errorDiv.classList.remove('hidden');
        } else {
            const newProduct = {
                product_id: `${product.id}`,
                product_image: `${product.image}`,
                product_name: `${product.product_name}`,
                product_price: `${product.price}`,
                product_size: selectedSize,
                product_colour: selectedColour
            };
            cart.push(newProduct);
            sessionStorage.setItem('cart', JSON.stringify(cart))
            countCartItems();
            
            cartSVG.classList.add('hidden');
            checkmarkSVG.classList.remove('hidden');

            setTimeout(() => {
                cartSVG.classList.remove('hidden');
                checkmarkSVG.classList.add('hidden');
                }, 2000);
            }
        
        
    })

    dropdownDiv.appendChild(cartDiv)
    // Rating!

    const ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('id', 'rating');

    const sizingChart = document.createElement('h4');
    sizingChart.id = 'sizing-chart-h4'
    sizingChart.innerHTML = 'Sizing Chart'
    ratingDiv.appendChild(sizingChart)

    const sizingChartImage = document.createElement('img');
    sizingChartImage.src = 'images/sizingchart.jpg'
    sizingChartImage.classList.add('hidden');
    sizingChartImage.id = 'sizing-chart-image'

    sizingChart.addEventListener('click', () => {
        const image = document.getElementById('sizing-chart-image');
        if (image.style.display === 'none' || image.style.display === '') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        };
    });

    ratingDiv.appendChild(sizingChartImage)

    const reviewTitle = document.createElement('h3')
    reviewTitle.innerHTML = `Reviews (${product.num_of_ratings})`
    ratingDiv.appendChild(reviewTitle)

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

    // Reviews

    const reviewsDiv = document.createElement('div');
    reviewsDiv.setAttribute('id', 'reviews-container');

    const reviews = product.reviews
    reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.setAttribute('class', 'review')
        reviewsDiv.appendChild(reviewDiv)

        const reviewTitle = document.createElement('p');
        reviewTitle.setAttribute('class', 'review-title')
        reviewTitle.innerHTML = `"${review.title}" by ${review.author} | ${review.rating}/5`
        reviewDiv.appendChild(reviewTitle)

        const reviewDescription = document.createElement('p');
        reviewDescription.setAttribute('class', 'review-description')
        reviewDescription.innerHTML = `${review.description}`
        reviewDiv.appendChild(reviewDescription)
        
    })

    // Related
    const relatedItems = products.filter((item) => {
        return(
            item.id !== product.id && item.tags.some((tag) => product.tags.includes(tag))
        );
    });   
    

    const relatedDiv = document.createElement('div');
    relatedDiv.setAttribute('id', 'related-container');

    const relatedTitle = document.createElement('h3')
    relatedTitle.innerHTML = `Related`
    relatedDiv.appendChild(relatedTitle)

    const relatedItemsContainer = document.createElement('div');
    relatedItemsContainer.setAttribute('id', 'items-container');
    relatedDiv.appendChild(relatedItemsContainer)

    relatedItems.forEach((item) => {
        const relatedItem = document.createElement('div');
        relatedItem.setAttribute('class', 'related-item');

        const itemLink = document.createElement('a');
        itemLink.href = `#/product?id=${item.id}`
        relatedItem.appendChild(itemLink)

        const itemImage = document.createElement('img');
        itemImage.src = `${item.image}`;
        itemLink.appendChild(itemImage);

        relatedItemsContainer.appendChild(relatedItem)
    })

    // Attach it all!
    productInfo.appendChild(productImage)
    productInfo.appendChild(productName)
    productInfo.appendChild(productPrice)
    productInfo.appendChild(productDescription)
    contentContainer.appendChild(productInfo);
    contentContainer.appendChild(dropdownDiv)
    contentContainer.appendChild(errorDiv)
    contentContainer.appendChild(ratingDiv)
    contentContainer.appendChild(reviewsDiv)
    contentContainer.appendChild(relatedDiv)
};

export { loadProductPage };