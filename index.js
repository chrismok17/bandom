import { loadHomePage } from './pages/homePage.js';
import { loadAccountPage } from './pages/accountPage.js';
import { loadCartPage } from './pages/cartPage.js';
import { loadCataloguePage } from './pages/cataloguePage.js';
import { loadProductPage } from './pages/productPage.js';

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
        default:
            if (route.startsWith('/product')) {
                const params = new URLSearchParams(window.location.hash.split('?')[1]);
                const productID = params.get('id');
                loadProductPage(productID);
                break
            } else {
                const contentContainer = document.getElementById('content');
                const notFoundMessage = document.createElement('div');
                notFoundMessage.textContent = 'Page Not Found';
                contentContainer.innerHTML = ''; // Clear existing content
                contentContainer.appendChild(notFoundMessage);
            }
    };
};

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

// Loads home page by default
loadHomePage();