$(document).ready(function() {

	$("#contact-form").on("submit", function(e) {
		var $name = $("#name");
		var $email = $("#email");
		var $message = $("#message");

		$("#invalid-name").html("");
		$("#invalid-email").html("");
		$("#invalid-msg").html("");

		joinedName = ($name.val().replace(/\s+/g, ''));
		var names = validator.isAlpha(joinedName);
		var namesNull = validator.isNull($name.val());
		var emails = validator.isEmail($email.val());
		var emailsNull = validator.isNull($email.val());
		var messageArea = validator.isNull($message.val());
		var messageLength = $message.val().length > 1;
		console.log(messageLength);

		if (names && emails && webContain && !txt && !messageLength) {
			console.log("good");	
		}
		if (namesNull) {
			e.preventDefault();
			$("#invalid-name").html("Field cannot be left blank");
		}	
		else if (!names) {
			e.preventDefault();
			$("#invalid-name").html("Name must contain letters only");
		}
		if (emailsNull) {
			e.preventDefault();
			$("#invalid-email").html("Field cannot be left blank");
		}
		else if (!emails) {
			e.preventDefault();
			$("#invalid-email").html("Email must contain @ symbol and be valid");
		}
		if (messageArea || messageLength) {
			e.preventDefault();
			$("#invalid-msg").html("Field cannot be left blank");
		}



	});

});


