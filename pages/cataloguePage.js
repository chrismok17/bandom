const loadCataloguePage = async (page = 1, itemsPerPage = 5) => {
    const contentContainer = document.getElementById('content');
    document.title = 'Bandom | Catalogue';
    contentContainer.innerHTML= '';

    const response = await fetch('data.json');
    const products = await response.json();

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImageDiv = document.createElement('div');
        productImageDiv.classList.add('product-image-container');
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImageDiv.appendChild(productImage);
        productDiv.appendChild(productImageDiv)

        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');
        const productName = document.createElement('div');
        productName.innerHTML = `<h3>${product.product_name}</h3>`
        productInfoDiv.appendChild(productName)
        productDiv.appendChild(productInfoDiv)

        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.innerHTML = `<p>$${product.price}</p>`;
        productDiv.appendChild(productPrice)

        productDiv.addEventListener('click', () => {
            window.location.href = `#/product?id=${product.id}`
        })

        contentContainer.appendChild(productDiv);
    });

    addPaginationControls(page, itemsPerPage, products.length);

    function addPaginationControls(currentPage, itemsPerPage, totalProducts) {
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        const totalPages = Math.ceil(totalProducts / itemsPerPage);

        if (currentPage > 1) {
            const prevPageButton = document.createElement('button');
            prevPageButton.textContent = 'Previous Page';
            prevPageButton.classList.add('prev-page');
            prevPageButton.addEventListener('click', () => {
                loadCataloguePage(currentPage - 1, itemsPerPage);
            });
            paginationContainer.appendChild(prevPageButton);
        };

        if (currentPage < totalPages) {
            const nextPageButton = document.createElement('button');
            nextPageButton.textContent = 'Next Page';
            nextPageButton.classList.add('next-page');
            nextPageButton.addEventListener('click', () => {
                loadCataloguePage(currentPage + 1, itemsPerPage);
            });
            paginationContainer.append(nextPageButton);
        };

        contentContainer.appendChild(paginationContainer)
    };
};

export { loadCataloguePage };