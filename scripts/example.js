document.addEventListener('DOMContentLoaded', () => {
    stateDropdown();
    parkTypeDropdown();
    parkFilter(); 

    let stateSelect = document.querySelector('#state-dropdown');
    stateSelect.addEventListener('change', parkFilter);

    let parkTypeSelect = document.querySelector('#parkTypeDropdown');
    parkTypeSelect.addEventListener('change', parkFilter);
}); 

// --------- creates a filter and puts all the parks in the dropdown -------

function parkTypeDropdown() {
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    if (!parkTypeDropdown) return; //truethy or falsey

    parkTypesArray.forEach(type => {
        const option = new Option(type);
        parkTypeDropdown.add(option);
    });

}

// --------- creates a filter and puts all states in the dropdown-----

function stateDropdown() {
    const stateDropdown = document.querySelector('#state-dropdown');

    if (!stateDropdown) return; //truethy or falsey

    locationsArray.forEach(state => {
        const option = new Option(state);
        stateDropdown.add(option);
    });
}



// ----------------- Park Filters-------


function parkFilter() {
    // getting the values from the dropdowns

    const stateSelected = document.querySelector('#state-dropdown').value;
    const parkTypeSelected = document.querySelector('#parkTypeDropdown').value;

    // logging the data gathered

    console.log(`Selected park type: ${parkTypeSelected}`);
    console.log(`Selected state: ${stateSelected}`);

    // filtering the parks based on the dropdown values

    filteredParks = nationalParksArray;

   if (stateSelected !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.State === stateSelected);
   } if (parkTypeSelected !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.LocationName.includes(parkTypeSelected));
   } 

   console.log(filteredParks);
   displayParks(filteredParks);

}



function displayParks(filteredParks) {
    const parksContain = document.querySelector('#content');
    parksContain.classList.add("text-center"); //styling the container

    parksContain.innerText = ''; //clearing the container

    filteredParks.forEach(parkFilter => {
        displayPark(parkFilter, parksContain);
    });
}


function displayPark(parkFilter, parksContain) {
    
    const parkCard = document.createElement('div'); //creating the card
    parkCard.classList.add('card') //styling the card
    parkCard.id = parkFilter.LocationID; //setting the card id to the park id

    parksContain.appendChild(parkCard); //adding the card to the container

    // creating the card body
    const parkCardBody = document.createElement('div');
    parkCardBody.classList.add('card-body'); 
    parkCard.appendChild(parkCardBody); 

    // setting the park name
    const parkName = document.createElement('h5'); 
    parkName.classList.add('card-title'); 
    parkName.innerText = parkFilter.LocationName;
    parkCardBody.appendChild(parkName); 

    // setting the park location
    const parkLocation = document.createElement('h6'); 
    parkLocation.classList.add('card-subtitle'); 
    parkLocation.innerText = parkFilter.State; 
    parkCardBody.appendChild(parkLocation);

    // setting park link
    if (parkFilter.Visit) {
        const parkLink = document.createElement('a'); 
        parkLink.classList.add('card-link');
        parkLink.href = parkFilter.Visit; 
        parkLink.innerText = 'Visit Website'; 
        parkCardBody.appendChild(parkLink); 
    }

    // setting the park button
    const parkButton = document.createElement('button');
    parkButton.classList.add('btn', 'btn-primary', 'text-center', 'm-4'); 
    parkButton.innerText = 'Explore More'; 

    parkButton.addEventListener('click', () => {
        addFavorite(parkFilter.LocationID);
    });

    parkCardBody.appendChild(parkButton); 
}

























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

