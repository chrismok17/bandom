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
            let resizeTimeout;
            const handleResize = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    // Call your function here (e.g., loadCataloguePage)
                    const screenWidth = window.innerWidth;
                    let itemsPerPage;
            
                    if (screenWidth < 768) {
                        itemsPerPage = 6; // For mobile screens (< 768px)
                    } else if (screenWidth >= 768 && screenWidth <= 1000) {
                        itemsPerPage = 8; // For medium screens (768px to 1000px)
                    } else {
                        itemsPerPage = 12; // For large screens (> 1000px)
                    }
            
                    // Call your loadCataloguePage function with the updated itemsPerPage value
                    loadCataloguePage(1, itemsPerPage);
                }, 300); // Adjust the delay (in milliseconds) as needed
            };
            window.removeEventListener('resize', handleResize);

            handleResize();

            window.addEventListener('resize', handleResize);

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