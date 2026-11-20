fetch("http://localhost:8080/products/")
    .then(response => response.json())
    .then(products => {

        let productList = document.getElementById("product-list");

        products.forEach(product => {
            productList.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price}</p>
                </div>
            `;
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });


fetch("http://localhost:8080/products/{id}")
    .then(response => response.json())
    .then(products => {

        let productList = document.getElementById("product-list");
        for(let product : products){
            if(product.id === id){
                productList.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price}</p>
                </div>
            `;
                
            }
        }

    })
    .catch(error => {
        console.log("Error:", error);
    });