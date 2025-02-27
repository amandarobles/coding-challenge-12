// task 1: Business Dashboard- DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard"); //selecting dashboard container
const revenueCard = document.createElement("div"); //representing the metric card
revenueCard.setAttribute("class", "metric-card"); //assigning a class
revenueCard.setAttribute("id", "revenueCard");//assigning an id to the new element
revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p"; //populating the card with title and a placeholder value
dashboard.appendChild(revenueCard); //appending the new metric card to the dashboard

// task 2: Updating Dashboard Metrics- NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card"); //selecting elements with the class "metric-card"
const metricCardsArray = Array.from(metricCards); //convert Nodelist to an array
metricCardsArray.forEach(card => { //updating card's inner text and style
    card.style.backgroundColor = "lighblue"; //changing the background color
    card.innerHTML += "- Updated"; //appending to the current text
})

// task 3: Dynamic Inventory Management- Adding and Removing Items
function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newItem = document.createElement("li"); //function to create a new product item
    newItem.setAtttribute("class", "product-item"); //set class attribute
    newItem.setAttribute("data-product", productName); //set custom data attribute
    newItem.innerText = productName; //populating item with product name
    inventoryList.appendChild(newItem); //appending new product item to inventory list
    newItem.addEventListener("click", ()=> {inventoryList.removeChild(newItem); //adding click event to remove item when clicked
    })
}
document.getElementById("addProductBtn").addEventListener("click", ()=> {
    const productName = prompt("Enter product name:");
    if(productName) {
        addProductItem(productName); //event listener for the add product button
    }
});

// task 4: Business Customer Section- Handling Event Bubbling
const customerSection = document.getElementById("customerSection"); //selecting customer section container
customerSection.addEventListener("click", () =>{
    console.log("Customer section clicked"); //adding event listener to customer section
});
document.querySelectorAll(".customer-card".forEach(card => {
    card.addEventListener("click", (event)=> {
        console.log("Customer card clicked"); //adding event listeners to each customer card
        event.stopPropagation(); //preventing event bubbling to parent
    });
}));

//test data
document.querySelectorAll(".customer-card").forEach(card => {
    card.addEventListener("click", ()=> {
        console.log("Customer card clicked");
        //event.stopPropagation();
    })
})