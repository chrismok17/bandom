import { loadHomePage } from './pages/homePage.js';
import { loadAccountPage } from './pages/accountPage.js';
import { loadCartPage } from './pages/cartPage.js';
import { loadCataloguePage } from './pages/cataloguePage.js';
import { loadProductPage } from './pages/productPage.js';
import { loadCheckoutPage } from './pages/checkoutPage.js'

// Handles which page should be rendered based on url
const handleRouteChange = () => {
    const route = window.location.hash.substring(1);
    switch (route) {
        case '':
        case '/':
            loadHomePage();
            backButton.classList.add('hidden'); // Hide the back button on the home page
            break;
        case '/account':
            loadAccountPage();
            backButton.classList.remove('hidden'); // Show the back button on other pages
            break;
        case '/cart':
            loadCartPage();
            backButton.classList.remove('hidden'); // Show the back button on other pages
            break;
        case '/catalogue':
            loadCataloguePage();
            backButton.classList.remove('hidden'); // Show the back button on other pages
            break;
        case '/cart/checkout':
            loadCheckoutPage();
            backButton.classList.remove('hidden'); // Show the back button on other pages
            break;
        default:
            if (route.startsWith('/product')) {
                const params = new URLSearchParams(window.location.hash.split('?')[1]);
                const productID = params.get('id');
                loadProductPage(productID);
                backButton.classList.remove('hidden'); // Show the back button on other pages
                break;
            }
    }
};

// Find the back button by its ID
const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () => {
    window.history.back(); // Go back to the previous page
});

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

// Loads home page by default
loadHomePage();