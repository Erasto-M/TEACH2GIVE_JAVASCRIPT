

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products-list');


    (async function getProducts() {
        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();

            if (response.ok) {
                const responseData = data['data'];
                
                responseData.forEach(product => {
                    //Setting the divs and there classes
                    const productContainer = document.createElement('div');
                    const price_stockContainer = document.createElement('div');
                    productContainer.classList.add('product-item');
                    price_stockContainer.classList.add('price_stockContainer');
                    const price_div = document.createElement('div');
                    price_div.classList.add('price-div')

                    //the product details
                    const productName = document.createElement('h3');
                    productName.innerHTML = product.name;
                    productContainer.appendChild(productName);

                    const description = document.createElement('p');
                    description.innerHTML =  product.description;
                    productContainer.appendChild(description);

                    const category = document.createElement('p');
                    category.innerHTML = "category:   " +  product.category;
                    productContainer.appendChild(category);

                    const  price = document.createElement('p');
                    price.innerHTML ="$" + product.price;
                    price_div.appendChild(price);
                    
                    const  stock = document.createElement('p');
                    stock.innerHTML = "stock: " + product.stock;
                    price_stockContainer.appendChild(stock);

                    //appending the items to the containers
                    price_stockContainer.appendChild(price_div);
                    productContainer.appendChild(price_stockContainer);
                    productList.appendChild(productContainer);
                });
            } else {
                console.log(data['message'])
            }
        } catch (e) {
            console.log(e);
        }
    })();
    
});



