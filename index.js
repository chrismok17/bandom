const contentContainer = document.getElementById('content');

const loadHomePage = () => {
    document.title = 'Bandom | Home';
};

const loadAccountPage = () => {
    document.title = 'Bandom | Account';
};


const loadCartPage = () => {
    document.title = 'Bandom | Cart';
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
    }
};

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);

loadHomePage();