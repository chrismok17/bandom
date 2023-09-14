const contentContainer = document.getElementById('content');

const loadHomePage = () => {
    // Set Document title and clear any content
    document.title = 'Bandom | Home';
    contentContainer.innerHTML= '';

    // Create the Newest Styles div
    const newestStyles = document.createElement('div');
    newestStyles.setAttribute('id', 'newest-styles')
    newestStyles.innerHTML = '<h1>Our Newest Styles</h1>'

    // Create Exclusives div
    const exclusives = document.createElement('div');
    exclusives.setAttribute('id', 'exclusives')
    exclusives.innerHTML = '<h1>Bandom Exclusives</h1>'

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