const loadProductPage = async (productID) => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML= '';
    
    const response = await fetch('data.json');
    const products = await response.json();
    
    const product = products.find((item) => item.id === parseInt(productID));

    document.title = `Bandom | ${product.product_name}`;

    // Div
    const productInfo = document.createElement('div');
    productInfo.setAttribute('id', 'product-info');

    // Image
    const productImage = document.createElement('img');
    productImage.src = product.image

    // Name
    const productName = document.createElement('div');
    productName.innerHTML = `<h3>${product.product_name}</h3>`

    // Price
    const productPrice = document.createElement('div');
    productPrice.innerHTML = `<p>${product.price}</p>`

    // Description
    const productDescription = document.createElement('div');
    productDescription.innerHTML = `<p>${product.description}</p>`

    // Attach it all!
    productInfo.appendChild(productImage)
    productInfo.appendChild(productName)
    productInfo.appendChild(productPrice)
    productInfo.appendChild(productDescription)
    contentContainer.appendChild(productInfo);
};

export { loadProductPage };