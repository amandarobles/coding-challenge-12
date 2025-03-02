// task 1: Business Dashboard- DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard"); //selecting dashboard container
const dashboardQuery = document.querySelector("#dashboard");// querySelector
const revenueCard = document.createElement("div"); //representing the metric card
revenueCard.setAttribute("class", "metric-card"); //assigning a class
revenueCard.setAttribute("id", "revenueCard");//assigning an id to the new element
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p"; //populating the card with title and a placeholder value
dashboard.appendChild(revenueCard); //appending the new metric card to the dashboard

// task 2: Updating Dashboard Metrics- NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card"); //selecting elements with the class "metric-card"
const metricCardsArray = [...metricCards]; //convert Nodelist to an array
metricCardsArray.forEach(card => { //updating card's inner text and style
    card.style.backgroundColor = "lightblue"; //changing the background color
    card.innerText += "- Updated"; //appending to the current text
})

// task 3: Dynamic Inventory Management- Adding and Removing Items
function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newProductItem = document.createElement("li"); //function to create a new product item
    newProductItem.setAtttribute("class", "product-item"); //set class attribute
    newProductItem.setAttribute("data-product", productName); //set custom data attribute
    newProductItem.innerText = productName; //populating item with product name
    inventoryList.appendChild(newProductItem); //appending new product item to inventory list
    newProductItem.addEventListener("click", ()=> {removeProductItem(newProductItem); //adding click event to remove item when clicked
    });
    function removeProductItem(item){
        const inventoryList = document.getElementById("inventoryList");
        inventoryList.removeChild(item);
    };
    document.getElementById("addProductButton").addEventListener("click", () => {
        addProductItem("New Product");
});

    addProductItem("Ninetendo Switch"); //adding products
    addProductItem("Gamecube");

// task 4: Business Customer Section- Handling Event Bubbling
const customerSection = document.getElementById("customerSection"); //selecting customer section container
customerSection.addEventListener("click", () =>{
    console.log("Has been selected"); //adding event listener to customer section
});
const customerCards = document.querySelectorAll(".customer-card");
    customerCards.forEach((card => {
    card.addEventListener("click", (event)=> {
        console.log("Has been selected"); //adding event listeners to each customer card
        event.stopPropagation(); //preventing event bubbling to parent
    });
}));}