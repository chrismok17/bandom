const contentContainer = document.getElementById('content');

const loadHomePage = () => {
    // Set Document title and clear any content
    document.title = 'Bandom | Home';
    contentContainer.innerHTML= '';

    // Create the Newest Styles div
    const newestStyles = document.createElement('div');
    newestStyles.setAttribute('id', 'newest-styles')

    // Create and attach background image
    const newestStylesImage = document.createElement('img');
    newestStylesImage.setAttribute('id', 'newest-style-img');
    newestStylesImage.src = '/images/newest_styles.jpg';
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
    exclusivesImage.src = '/images/exclusives.jpg';
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
        wishlistItem.textContent = `ITEM ${i}`;
        wishlistItemContainer.appendChild(wishlistItem)
    }
    
    // Create the Catalogue div
    const catalogue = document.createElement('div');
    catalogue.setAttribute('id', 'catalogue');
    catalogue.innerHTML = '<h1><a href="#/catalogue">Catalogue</a></h1>'

    // Add all created divs to the Content div
    contentContainer.appendChild(newestStyles)
    contentContainer.appendChild(exclusives)
    contentContainer.appendChild(wishlist)
    contentContainer.appendChild(catalogue)
};

const loadAccountPage = () => {
    document.title = 'Bandom | Account';
    contentContainer.innerHTML= '';
};


const loadCartPage = () => {
    document.title = 'Bandom | Cart';
    contentContainer.innerHTML= '';
};

const loadCataloguePage = () => {
    document.title = 'Bandom | Catalogue';
    contentContainer.innerHTML= '';
};

const handleRouteChange = () => {
    const route = window.location.hash.substring(1);
    switch (route) {
        case '/':
            loadHomePage();
            break
        case '/account':
            loadAccountPage();
            break
        case '/cart':
            loadCartPage();
            break
        case '/catalogue':
            loadCataloguePage();
    };
};

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

loadHomePage();