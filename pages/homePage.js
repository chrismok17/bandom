const loadHomePage = () => {
    const contentContainer = document.getElementById('content');
    // Set Document title and clear any content
    document.title = 'Bandom | Home';
    contentContainer.innerHTML= '';

    // Create the Newest Styles div
    const newestStyles = document.createElement('div');
    newestStyles.setAttribute('id', 'newest-styles')

    // Create and attach background image
    const newestStylesImage = document.createElement('img');
    newestStylesImage.setAttribute('id', 'newest-style-img');
    newestStylesImage.src = 'images/newest_styles.jpg';
    newestStyles.appendChild(newestStylesImage);

    // Create and attach image text
    const newestStylesText = document.createElement('div');
    newestStylesText.setAttribute('class', 'centered-text')
    newestStylesText.innerHTML = '<h1>OUR NEWEST STYLES</h1>';
    newestStyles.appendChild(newestStylesText);

    // Create Exclusives div
    const exclusives = document.createElement('div');
    exclusives.setAttribute('id', 'exclusives')
    
    // Create and attach background image
    const exclusivesImage = document.createElement('img');
    exclusivesImage.setAttribute('id', 'exclusives-img');
    exclusivesImage.src = 'images/exclusives.jpg';
    exclusives.appendChild(exclusivesImage);

    // Create and attach image text
    const exclusivesText = document.createElement('div');
    exclusivesText.setAttribute('class', 'centered-text')
    exclusivesText.innerHTML = '<h1>BANDOM EXCLUSIVES</h1>';
    exclusives.appendChild(exclusivesText);

    // Create Wishlist div
    const wishlist = document.createElement('div');
    wishlist.setAttribute('id', 'wishlist');
    wishlist.innerHTML = '<h2>Wishlist</h2>'

    const wishlistItemContainer = document.createElement('div');
    wishlistItemContainer.setAttribute('id', 'wishlist-container');
    wishlist.appendChild(wishlistItemContainer)

    // Create 3 Wishlist Item divs
    for (let i = 1; i <= 3; i++) {
        const wishlistItem = document.createElement('div');
        wishlistItem.setAttribute('class', 'wishlist-item');
        wishlistItem.setAttribute('id', `item-${i}`)

        // Attach link to image's id product page
        const itemLink = document.createElement('a');
        itemLink.href = `#/product?id=${i}`;
        
        // Attach appropriate image to each item
        const itemImage = document.createElement('img');
        itemImage.src = `images/wishlist${i}.jpg`;

        itemLink.appendChild(itemImage)
        wishlistItem.appendChild(itemLink)
        wishlistItemContainer.appendChild(wishlistItem)
    };
    
    // Create the Catalogue div
    const catalogueLink = document.createElement('a');
    catalogueLink.setAttribute('href', '#/catalogue');

    const catalogue = document.createElement('div');
    catalogue.setAttribute('id', 'catalogue');
    catalogueLink.appendChild(catalogue)
    
    // Attach the text and anchor
    const catalogueText = document.createElement('div');
    catalogueText.setAttribute('class', 'centered-text');
    catalogueText.innerHTML = '<h1>Catalogue</h1>';
    
    catalogue.appendChild(catalogueText);
    
    // catalogue.appendChild(catalogueLink);

    // Add all created divs to the Content div
    contentContainer.appendChild(newestStyles)
    contentContainer.appendChild(exclusives)
    contentContainer.appendChild(wishlist)
    contentContainer.appendChild(catalogueLink)
};

export { loadHomePage };