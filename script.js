// Calculate Price Button
document.getElementById("calculateBtn").addEventListener("click", function() {

    let car = document.getElementById("car").value;
    let days = document.getElementById("days").value;

    if (car === "" || days === "" || Number(days) <= 0) {
        alert("Please select a car and enter rental days.");
        return;
    }

    let amount = Number(car) * Number(days);

    document.getElementById("total").innerHTML =
        "Total Amount: Rs. " + amount;
});


// Confirm Booking Button
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let car = document.getElementById("car");
    let days = Number(document.getElementById("days").value);

    let carName = car.options[car.selectedIndex].text;
    let amount = Number(car.value) * days;

    document.getElementById("summary").innerHTML =
        "<h3>Booking Confirmed!</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Phone: " + phone + "</p>" +
        "<p>Car: " + carName + "</p>" +
        "<p>Rental Days: " + days + "</p>" +
        "<p>Total Amount: Rs. " + amount + "</p>";

});


// FAQ Button
document.getElementById("faqBtn").addEventListener("click", function() {

    let answer = document.getElementById("faqAnswer");

    answer.classList.toggle("hidden");

});