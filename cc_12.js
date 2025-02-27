// task 1: Business Dashboard- DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard"); //selecting dashboard container
const revenueCard = document.createElement("div"); //representing the metric card
revenueCard.setAttribute("class", "metric-card"); //assigning a class
revenueCard.setAttribute("id", "revenueCard");//assigning an id to the new element
revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p"; //populating the card with title and a placeholder value
dashboard.appendChild(revenueCard); //appending the new metric card to the dashboard