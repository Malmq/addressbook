//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + ", " + this.state;
}

var timesClicked = 0;

//User Interface Logic
$(document).ready( function() {
  $("#new-contact").submit( function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    console.log(newContact);

    var inputtedStreet = $("input.new-street").val();
    var inputtedCity = $("input.new-city").val();
    var inputtedState = $("input.new-state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    console.log(newAddress);

    $("ul#contacts").append("<li>" + newContact.fullName() + "</li>");

    $("ul#addresses").append("<li>" + newAddress.fullAddress() + "</li>");

    $(".first-name").text(inputtedFirstName);
    $(".last-name").text(inputtedLastName);
  });

  $("#add-address").click( function() {
    $("#second-address").show();
    timesClicked++;

    if (timesClicked>1) {
      alert("Error 521! Only 2 Addresses May Be Submitted!")
    }
  })


    $("#menu_button").click(function() {
      timesClicked++;

      if (timesClicked>1) {
    } else {
  }

  })

});
