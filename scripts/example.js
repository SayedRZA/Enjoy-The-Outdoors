
 document.addEventListener("DOMContentLoaded", () => {

    const stateSelect = document.getElementById("state-select");

    locationsArray.forEach(state => {
        const stateOption = new Option (state)
        stateSelect.add(stateOption);
    });

    const parkType = document.getElementById("parkType-select");

    parkTypesArray.forEach(type => {
        const typeOption = new Option (type)
        parkType.add(typeOption); 
    });



    filterParks();

    stateSelect.addEventListener("change", filterParks)
    parkType.addEventListener("change", filterParks)

 })

    function filterParks(){
        const selectedState = document.getElementById("state-select").value;
        const selectedParkType = document.getElementById("parkType-select").value;

        parksFilter = nationalParksArray;
        if(selectedState != "Show All"){
            parksFilter = nationalParksArray.filter(s => s.State == selectedState)
        }


        displayParks(parksFilter);

    }

    function displayParks(parksFilter) {

        const parksContainer = document.querySelector("#content")
        parksContainer.classList.add("text-center")
        // clear all elements
        parksContainer.innerHTML = "";
    
        parksFilter.forEach(parksFilters => {
    
            displayParks(parksFilters, parksContainer);
            
        });
    }

    
//  --------------------------------

        function displayNationalPark(parksFilters, parentDiv) {
            const parksFiltersDiv = document.createElement("div");
            parksFiltersDiv.classList.add("parksFilters");
            parksFiltersDiv.id = "parksfilters-" + parksFilters.LocationID;
            parentDiv.appendChild(parksFiltersDiv);
    
            addParkHeader(parksFilters, parksFiltersDiv);
            addParkDetails(parksFilters, parksFiltersDiv);
            // You can add more functions here to display other details of the park
        }
    
        function addParkHeader(parksFilter, parksFiltersDiv) {
            const parkInfoDiv = document.createElement("div");
            parksFiltersDiv.appendChild(parkInfoDiv);
    
            const parkHeader = document.createElement("h4");
            parkHeader.innerText = parksFilter.LocationName;
            parkInfoDiv.appendChild(parkHeader);
        }
    
        function addParkDetails(nationalPark, parkDiv) {
            const detailsDiv = document.createElement("div");
            parkDiv.appendChild(detailsDiv);
    
            const address = document.createElement("p");
            address.innerText = `Address: ${nationalPark.Address}, ${nationalPark.City}, ${nationalPark.State} ${nationalPark.ZipCode}`;
            detailsDiv.appendChild(address);
    
            const phone = document.createElement("p");
            phone.innerText = `Phone: ${nationalPark.Phone}`;
            detailsDiv.appendChild(phone);
    
            // You can add more details such as Fax, Latitude, Longitude, etc.
        }
    
        function displayNationalParks(nationalParks) {
            const parksContainer = document.querySelector("#content");
            parksContainer.innerHTML = "";
    
            nationalParks.forEach(park => {
                displayNationalPark(park, parksContainer);
            });
        }
    
        // Call the function to initially display all national parks
        displayNationalParks(nationalParksArray);
  
    

























// ------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
   

//     function displayNationalPark(nationalPark, parentDiv) {
//         const parkDiv = document.createElement("div");
//         parkDiv.classList.add("national-park");
//         parkDiv.id = "park-" + nationalPark.LocationID;
//         parentDiv.appendChild(parkDiv);

//         addParkHeader(nationalPark, parkDiv);
//         addParkDetails(nationalPark, parkDiv);
        
//     }

//     function addParkHeader(nationalPark, parkDiv) {
//         const parkInfoDiv = document.createElement("div");
//         parkDiv.appendChild(parkInfoDiv);

//         const parkHeader = document.createElement("h4");
//         parkHeader.innerText = nationalPark.LocationName;
//         parkInfoDiv.appendChild(parkHeader);
//     }

//     function addParkDetails(nationalPark, parkDiv) {
//         const detailsDiv = document.createElement("div");
//         parkDiv.appendChild(detailsDiv);

//         const address = document.createElement("p");
//         address.innerText = `Address: ${nationalPark.Address}, ${nationalPark.City}, ${nationalPark.State} ${nationalPark.ZipCode}`;
//         detailsDiv.appendChild(address);

//         const phone = document.createElement("p");
//         phone.innerText = `Phone: ${nationalPark.Phone}`;
//         detailsDiv.appendChild(phone);

      
//     }

//     function displayNationalParks(nationalParks) {
//         const parksContainer = document.querySelector("#content");
//         parksContainer.innerHTML = "";

//         nationalParks.forEach(park => {
//             displayNationalPark(park, parksContainer);
//         });
//     }

    
//     displayNationalParks(nationalParksArray);
// });


// ------------------------------------------------------------------------




// document.addEventListener("DOMContentLoaded", () => {
//     const categorySelect = document.getElementById("category-select");
//     const minimumPrice = document.getElementById("min-price");
//     const maximumPrice = document.getElementById("max-price");
//     const colorSelect = document.getElementById("color-select");

//     categorySelect.addEventListener("change", filterProducts)
//     minimumPrice.addEventListener("change", filterProducts)
//     maximumPrice.addEventListener("change", filterProducts)
//     colorSelect.addEventListener("change", filterProducts)

//     displayProducts(products);
// })

// function filterProducts() {
//     const category = document.getElementById("category-select").value
//     const minimumPrice = document.getElementById("min-price").value;
//     const maximumPrice = document.getElementById("max-price").value;
//     const color = document.getElementById("color-select").value;

//     // category
//     let filteredProducts = products;
//     if(category !== "Show All")
//     {
//         filteredProducts = products.filter(p => p.category == category);
//     }

//     // min/max price
//     document.getElementById("min-price-display").innerText = minimumPrice;
//     document.getElementById("max-price-display").innerText = maximumPrice;
//     filteredProducts = filteredProducts.filter(p => p.price >= minimumPrice && p.price <= maximumPrice);

//     // color
//     if(color !== "Show All"){
//         filteredProducts = filteredProducts.filter(p => p.color == color)
//     }

//     displayProducts(filteredProducts);
// }

// function displayProducts(products) {

//     const productsContainer = document.querySelector("#content")
//     // clear all elements
//     productsContainer.innerHTML = "";

//     products.forEach(product => {

//         displayProduct(product, productsContainer)
        
//     });
// }

// function displayProduct(product, parentDiv) {
//     // create a div for each product
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product") ;
//     productDiv.id = "product-" + product.productId ;
//     // add product to the container
//     parentDiv.appendChild(productDiv);

//     addProductHeader(product, productDiv);
//     addImageRow(product, productDiv);
//     addDescription(product, productDiv);
//     addCartButton(product, productDiv);
// }

// function addProductHeader(product, productDiv) {
    

//     // create the product info div 
//     const productInfoDiv = document.createElement("div");
//     productDiv.appendChild(productInfoDiv);

//     // add product header
//     const productHeader = document.createElement("h4")
//     productHeader.innerText = product.name;
//     productInfoDiv.appendChild(productHeader);
// }

// function addImageRow(product, parent) {
//     // create the image div (image and price)
//     const imageRow = document.createElement("div");
//     imageRow.classList.add("photo")
//     parent.appendChild(imageRow)

//     // add product image
//     const img = document.createElement("img");
//     img.src = "images/products/" + product.imageUrl
//     imageRow.appendChild(img)

//     // add price
//     const price = document.createElement("h4");
//     price.classList.add("price")
//     price.innerText = `$${product.price}`
//     imageRow.appendChild(price)
// }

// function addDescription(product, parent) {
//     // add description container
//     const descriptionRow = document.createElement("div");
//     parent.appendChild(descriptionRow);
//     //add description pargraph
//     const descriptionParagraph = document.createElement("p");
//     descriptionParagraph.innerText = product.description;
//     descriptionRow.appendChild(descriptionParagraph);
// }

// function addCartButton(product, parent) {

//     // add cart button div
//     const cartButtonDiv = document.createElement("div");
//     cartButtonDiv.classList.add("add-button")
//     parent.appendChild(cartButtonDiv);
//     // add button
//     const cartButton = document.createElement("button");
//     cartButton.classList.add("btn");
//     cartButton.classList.add("btn-success");
//     cartButton.innerText = "Add to Cart";
//     cartButtonDiv.appendChild(cartButton)
// }

