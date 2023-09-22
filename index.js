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
            break
        case '/cart/checkout':
            loadCheckoutPage();
        default:
            if (route.startsWith('/product')) {
                const params = new URLSearchParams(window.location.hash.split('?')[1]);
                const productID = params.get('id');
                loadProductPage(productID);
                break
            };
    };
};

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

// Loads home page by default
loadHomePage();