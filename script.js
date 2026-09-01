// =========================
// MONEY FORMAT
// =========================

function formatMoney(amount) {

    return "₦" + amount.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


// =========================
// ORDER BUTTON
// =========================

let orderButton = document.getElementById("orderButton");

let today = new Date().toISOString().split("T")[0];

document.getElementById("deliveryDate").min = today;


orderButton.addEventListener("click", function() {


    // =========================
    // MAIN DISHES
    // =========================

    let foodItems = document.querySelectorAll(".food-item");

    let foodTotal = 0;
    let foodOrders = [];

    foodItems.forEach(function(item) {

        let checkbox = item.querySelector(".food-checkbox");

        let quantity = Number(
            item.querySelector(".food-quantity").value
        );

        if (checkbox.checked && quantity > 0) {

            let name = checkbox.dataset.name;
            let price = Number(checkbox.value);

            let itemTotal = price * quantity;

            foodTotal += itemTotal;

            foodOrders.push({
                name: name,
                quantity: quantity,
                total: itemTotal
            });

        }

    });


    // =========================
    // SOUPS AND SWALLOWS
    // =========================

    let soupItems = document.querySelectorAll(".soup-item");

    let soupTotal = 0;
    let soupOrders = [];

    soupItems.forEach(function(item) {

        let checkbox = item.querySelector(".soup-checkbox");

        let quantity = Number(
            item.querySelector(".soup-quantity").value
        );

        if (checkbox.checked && quantity > 0) {

            let name = checkbox.dataset.name;
            let price = Number(checkbox.value);

            let itemTotal = price * quantity;

            soupTotal += itemTotal;

            soupOrders.push({
                name: name,
                quantity: quantity,
                total: itemTotal
            });

        }

    });


    // =========================
    // GRILLED AND FASTFOOD
    // =========================

    let grilledItems =
        document.querySelectorAll(".grilled-item");

    let grilledTotal = 0;
    let grilledOrders = [];

    grilledItems.forEach(function(item) {

        let checkbox =
            item.querySelector(".grilled-checkbox");

        let quantity =
            Number(
                item.querySelector(".grilled-quantity").value
            );

        if (checkbox.checked && quantity > 0) {

            let name = checkbox.dataset.name;
            let price = Number(checkbox.value);

            let itemTotal = price * quantity;

            grilledTotal += itemTotal;

            grilledOrders.push({
                name: name,
                quantity: quantity,
                total: itemTotal
            });

        }

    });


    // =========================
    // SIDES AND DRINKS
    // =========================

    let side =
        document.getElementById("side");

    let sideName =
        side.options[side.selectedIndex].text;

    let sidePrice =
        Number(side.value);

    let sideQuantity =
        Number(
            document.getElementById("sideQuantity").value
        );

    let sideTotal =
        sidePrice * sideQuantity;


    // =========================
    // CUSTOMER INFORMATION
    // =========================

    let deliveryDate =
        document.getElementById("deliveryDate").value;

    let customerName =
        document.getElementById("customerName").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let address =
        document.getElementById("address").value.trim();


    // =========================
    // VALIDATION
    // =========================

    if (
        foodOrders.length === 0 &&
        soupOrders.length === 0 &&
        grilledOrders.length === 0 &&
        sideQuantity === 0
    ) {

        alert("Please select at least one item.");

        return;
    }


    if (deliveryDate === "") {

        alert("Please select a delivery date.");

        return;
    }


    if (customerName === "") {

        alert("Please enter your name.");

        return;
    }


    if (phone === "") {

        alert("Please enter your phone number.");

        return;
    }


    if (address === "") {

        alert("Please enter your delivery address.");

        return;
    }


    // =========================
    // GRAND TOTAL
    // =========================

    let total =
        foodTotal +
        soupTotal +
        grilledTotal +
        sideTotal;


    // =========================
    // ORDER SUMMARY
    // =========================

    let summary =
        "<h2>🍴 Ola's Fastfood</h2>" +
        "<p><strong>Order Summary</strong></p>";


    // =========================
    // MAIN DISHES
    // =========================

    foodOrders.forEach(function(order) {

        summary +=
            "<p>" +
            order.name +
            " x " +
            order.quantity +
            " = " +
            formatMoney(order.total) +
            "</p>";

    });


    // =========================
    // SOUPS
    // =========================

    soupOrders.forEach(function(order) {

        summary +=
            "<p>" +
            order.name +
            " x " +
            order.quantity +
            " = " +
            formatMoney(order.total) +
            "</p>";

    });


    // =========================
    // GRILLED AND FASTFOOD
    // =========================

    grilledOrders.forEach(function(order) {

        summary +=
            "<p>" +
            order.name +
            " x " +
            order.quantity +
            " = " +
            formatMoney(order.total) +
            "</p>";

    });


    // =========================
    // SIDE AND DRINK
    // =========================

    if (sideQuantity > 0) {

        summary +=
            "<p>" +
            sideName.split(" - ")[0] +
            " x " +
            sideQuantity +
            " = " +
            formatMoney(sideTotal) +
            "</p>";

    }


    // =========================
    // CUSTOMER DETAILS
    // =========================

    summary +=

        "<hr>" +

        "<h3>Total = " +
        formatMoney(total) +
        "</h3>" +

        "<h3>Customer Information</h3>" +

        "<p>Name: " +
        customerName +
        "</p>" +

        "<p>Phone: " +
        phone +
        "</p>" +

        "<p>Address: " +
        address +
        "</p>" +

        "<p>Delivery Date: " +
        deliveryDate +
        "</p>";


    // =========================
    // DISPLAY ORDER
    // =========================

    document.getElementById("orderSummary").innerHTML =

        "<h2>Order Confirmed! 🎉</h2>" +

        "<p>Thank you for your order!</p>" +

        summary;

});


// =========================
// CLEAR ORDER BUTTON
// =========================

let clearButton =
    document.getElementById("clearButton");


clearButton.addEventListener("click", function() {


    // Clear Main Dishes

    document.querySelectorAll(".food-checkbox")
        .forEach(function(checkbox) {

            checkbox.checked = false;

        });


    document.querySelectorAll(".food-quantity")
        .forEach(function(quantity) {

            quantity.value = 0;

        });


    // Clear Soups

    document.querySelectorAll(".soup-checkbox")
        .forEach(function(checkbox) {

            checkbox.checked = false;

        });


    document.querySelectorAll(".soup-quantity")
        .forEach(function(quantity) {

            quantity.value = 0;

        });


    // Clear Grilled Items

    document.querySelectorAll(".grilled-checkbox")
        .forEach(function(checkbox) {

            checkbox.checked = false;

        });


    document.querySelectorAll(".grilled-quantity")
        .forEach(function(quantity) {

            quantity.value = 0;

        });


    // Clear Side

    document.getElementById("sideQuantity").value = 0;


    // Clear Customer Information

    document.getElementById("customerName").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("address").value = "";

    document.getElementById("deliveryDate").value = "";


    // Clear Order Summary

    document.getElementById("orderSummary").innerHTML = "";


    // Clear Shopping Cart

    updateCart();

});


// =========================
// LIVE SHOPPING CART
// =========================

function updateCart() {

    let cartItems =
        document.getElementById("cartItems");

    let cartTotal =
        document.getElementById("cartTotal");

    let total = 0;

    let items = [];


    // =========================
    // MAIN DISHES
    // =========================

    document.querySelectorAll(".food-item")
        .forEach(function(item) {

            let checkbox =
                item.querySelector(".food-checkbox");

            let quantityInput =
                item.querySelector(".food-quantity");

            let quantity =
                Number(quantityInput.value);


            if (checkbox.checked && quantity > 0) {

                let name =
                    checkbox.dataset.name;

                let price =
                    Number(checkbox.value);

                let itemTotal =
                    price * quantity;

                total += itemTotal;


                items.push({

                    name: name,

                    price: price,

                    quantity: quantity,

                    total: itemTotal,

                    input: quantityInput,

                    checkbox: checkbox

                });

            }

        });


    // =========================
    // SOUPS
    // =========================

    document.querySelectorAll(".soup-item")
        .forEach(function(item) {

            let checkbox =
                item.querySelector(".soup-checkbox");

            let quantityInput =
                item.querySelector(".soup-quantity");

            let quantity =
                Number(quantityInput.value);


            if (checkbox.checked && quantity > 0) {

                let name =
                    checkbox.dataset.name;

                let price =
                    Number(checkbox.value);

                let itemTotal =
                    price * quantity;

                total += itemTotal;


                items.push({

                    name: name,

                    price: price,

                    quantity: quantity,

                    total: itemTotal,

                    input: quantityInput,

                    checkbox: checkbox

                });

            }

        });


    // =========================
    // GRILLED FOOD
    // =========================

    document.querySelectorAll(".grilled-item")
        .forEach(function(item) {

            let checkbox =
                item.querySelector(".grilled-checkbox");

            let quantityInput =
                item.querySelector(".grilled-quantity");

            let quantity =
                Number(quantityInput.value);


            if (checkbox.checked && quantity > 0) {

                let name =
                    checkbox.dataset.name;

                let price =
                    Number(checkbox.value);

                let itemTotal =
                    price * quantity;

                total += itemTotal;


                items.push({

                    name: name,

                    price: price,

                    quantity: quantity,

                    total: itemTotal,

                    input: quantityInput,

                    checkbox: checkbox

                });

            }

        });


    // =========================
    // SIDES AND DRINKS
    // =========================

    let sideQuantity =
        Number(
            document.getElementById("sideQuantity").value
        );


    if (sideQuantity > 0) {

        let side =
            document.getElementById("side");

        let sideName =
            side.options[side.selectedIndex].text;

        let sidePrice =
            Number(side.value);

        let sideTotal =
            sidePrice * sideQuantity;

        total += sideTotal;


        items.push({

            name:
                sideName.split(" - ")[0],

            price:
                sidePrice,

            quantity:
                sideQuantity,

            total:
                sideTotal,

            input:
                document.getElementById("sideQuantity"),

            side:
                true

        });

    }


    // =========================
    // DISPLAY CART
    // =========================

    if (items.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    } else {

        cartItems.innerHTML = "";


        items.forEach(function(item, index) {

            let cartItem =
                document.createElement("div");


            cartItem.style.padding =
                "12px 0";

            cartItem.style.borderBottom =
                "1px solid #eeeeee";


            cartItem.innerHTML =

                "<strong>" +
                item.name +
                "</strong>" +

                "<br>" +

                "<small>" +
                formatMoney(item.price) +
                " each</small>" +

                "<br><br>" +


                "<button class='minus-button' " +
                "data-index='" +
                index +
                "'>" +

                "−" +

                "</button>" +


                "<strong style='margin: 0 12px;'>" +

                item.quantity +

                "</strong>" +


                "<button class='plus-button' " +
                "data-index='" +
                index +
                "'>" +

                "+" +

                "</button>" +


                "<span style='float:right; font-weight:bold; color:#8b0000;'>" +

                formatMoney(item.total) +

                "</span>" +


                "<br><br>" +


                "<button class='remove-button' " +
                "data-index='" +
                index +
                "' " +
                "style='background-color:#555; padding:7px 12px; font-size:13px;'>" +

                "🗑 Remove" +

                "</button>";


            cartItems.appendChild(cartItem);

        });


        // =========================
        // PLUS BUTTON
        // =========================

        document.querySelectorAll(".plus-button")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        let index =
                            Number(button.dataset.index);

                        let item =
                            items[index];


                        item.input.value =
                            Number(item.input.value) + 1;


                        updateCart();

                    }
                );

            });


        // =========================
        // MINUS BUTTON
        // =========================

        document.querySelectorAll(".minus-button")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        let index =
                            Number(button.dataset.index);

                        let item =
                            items[index];


                        let newQuantity =
                            Number(item.input.value) - 1;


                        if (newQuantity <= 0) {

                            item.input.value = 0;


                            if (item.checkbox) {

                                item.checkbox.checked = false;

                            }

                        } else {

                            item.input.value =
                                newQuantity;

                        }


                        updateCart();

                    }
                );

            });


        // =========================
        // REMOVE BUTTON
        // =========================

        document.querySelectorAll(".remove-button")
            .forEach(function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        let index =
                            Number(button.dataset.index);

                        let item =
                            items[index];


                        item.input.value = 0;


                        if (item.checkbox) {

                            item.checkbox.checked = false;

                        }


                        updateCart();

                    }
                );

            });

    }


    // =========================
    // CART TOTAL
    // =========================

    cartTotal.innerHTML =
        "Total: " +
        formatMoney(total);

}


// =========================
// CART EVENT LISTENERS
// =========================

document.querySelectorAll(
    ".food-checkbox, .food-quantity, " +
    ".soup-checkbox, .soup-quantity, " +
    ".grilled-checkbox, .grilled-quantity"
).forEach(function(element) {

    element.addEventListener(
        "change",
        updateCart
    );

});


document.getElementById("side")
    .addEventListener(
        "change",
        updateCart
    );


document.getElementById("sideQuantity")
    .addEventListener(
        "input",
        updateCart
    );


// =========================
// INITIAL CART
// =========================

updateCart();
