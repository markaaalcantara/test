document.addEventListener("DOMContentLoaded", function() {

	document
		.getElementById("form")
		.addEventListener("button", function(event)  {
			event.preventDefault();

			// Assign variables for name and email
			var name = document.getElementByName("name").value;
			var email = document.getElementByName("email").value;

			//Check to make sure name and email are not blank
			if (name === "" || email === "") {
				alert("Please enter your name and email");
				return;
			}

		
		});
});