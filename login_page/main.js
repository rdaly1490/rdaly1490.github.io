$(document).on('ready', start);

function start(eventObj) {

var $top = $("#top");
var $logo = $("#logo");
var $bottom = $("#bottom");
var $user = $("#username");
var $pw = $("#password");
var $signIn = $("#sign-in");

$signIn.on("click", logIn);

function logIn(e) {
	var email = validator.isEmail($user.val());
	var emailNull = validator.isNull($user.val());
	var passwordNull = validator.isNull($pw.val());

	var signInArray = [{
		username:"aaron@theironyard.com",
		password:"password123"
		},
		{
		username:"admin@google.com",
		password:"pandas"
		},
		{
		username:"rdaly1490@gmail.com",
		password:"honeycrisp"
		}];

	var inputObj = {
		username:$user.val(),
		password:$pw.val()
	};


	if (emailNull) {
		$("#bottom #container div").children().eq(2).html("Invalid Input: Username cannot be blank");
		$("#bottom #container div").children().eq(6).html("");
	}
	else if (!email) {
		$("#bottom #container div").children().eq(2).html("Invalid Input: Username must be a valid email address");
		$("#bottom #container div").children().eq(6).html("");
	}
	else {
		$("#bottom #container div").children().eq(2).html("");
	}
	if (passwordNull) {
		$("#bottom #container div").children().eq(5).html("Invalid Input: Password cannot be blank");
		$("#bottom #container div").children().eq(6).html("");
	}
	else {
		$("#bottom #container div").children().eq(5).html("");
	}

	var userObj = null;

	for (var i=0; i<signInArray.length; i++) {
			if (signInArray[i].username === inputObj.username) {
				var userObj = signInArray[i];
			}
		}

	if (userObj === null) {
		$("#bottom #container div").children().eq(2).html("Username Not Found, please try again");
	}
	else if (inputObj.password !== userObj.password) {
		$("#bottom #container div").children().eq(5).html("Password Incorrect, please try again");
	}
	else {
		window.location.href="http://theironyard.com";
	}









	// if (!emailNull && email && !passwordNull) {
	// 	for (var i=0; i<signInArray.length; i++) {

	// 		if (signInArray[i].username === inputObj.username && signInArray[i].password === inputObj.password) {
	// 			console.log("you did it!");
	// 		}
			
	// 		else if (signInArray[i].username === inputObj.username && signInArray[i].password !== inputObj.password && inputObj.password !== null) {
	// 			$("#bottom #container div").children().eq(5).html("Incorrect Password, please try again");
	// 			$("#bottom #container div").children().eq(2).html("");
	// 			$("#bottom #container div").children().eq(6).html("");
	// 			console.log("working");
	// 		}
	// 		// else {
	// 		// 	$("#bottom #container div").children().eq(5).html("");
	// 		// }
	// 		else if (signInArray[i].username !== inputObj.username && signInArray[i].password === inputObj.password && inputObj.username !== null) {
	// 			$("#bottom #container div").children().eq(2).html("Username Not Found, please try again");
	// 			$("#bottom #container div").children().eq(5).html("");
	// 			$("#bottom #container div").children().eq(6).html("");
	// 		}
	// 		// else {
	// 		// 	$("#bottom #container div").children().eq(2).html("");
	// 		// }
	// 		else if (signInArray[i].username !== inputObj.username && signInArray[i].password !== inputObj.password  && inputObj.username !== null && inputObj.password !== null) {
	// 			$("#bottom #container div").children().eq(6).html("Incorrect Username and Password, please try again");
	// 			$("#bottom #container div").children().eq(2).html("");
	// 			$("#bottom #container div").children().eq(5).html("");
	// 		}
	// 		else {
	// 			$("#bottom #container div").children().eq(6).html("");
	// 		}



	// 	}		
	// } 













	// if (!emailNull && email && !passwordNull) {
		// for (var i=0; i<signInArray.length; i++) {
		// 	if (signInArray[i].username === inputObj.username && signInArray[i].password === inputObj.password) {
		// 		console.log("you did it!");
		// 	}
		// 	else if (signInArray[i].username === inputObj.username && signInArray[i].password !== inputObj.password) {
		// 		$("#bottom #container div").children().eq(5).html("Incorrect Password, please try again");
		// 	}
		// 	else if (signInArray[i].username !== inputObj.username && signInArray[i].password === inputObj.password) {
		// 		$("#bottom #container div").children().eq(2).html("Username Not Found, please try again");
		// 	}

		// } 
	// }

}











$top.css("width", "100%");
$top.css("height", "350px");
$top.css("background", "url(bg-login-top.png)");
$top.css("paddingTop", "230px");
$top.css("boxSizing", "border-box");

$bottom.css("width", "100%");
$bottom.css("height", "350px");
$bottom.css("background", "url(bg-login.png)");
$bottom.css("paddingTop", "20px");

$logo.css("marginLeft", "auto");
$logo.css("marginRight", "auto");
$logo.css("width", "30%");
$logo.css("height", "150px");

$user.css("display", "inline-block");
$user.css("width", "70%");
$user.css("textAlign", "left");
$user.css("marginLeft", "15px");
$user.css("float", "right");

$pw.css("display", "inline-block");
$pw.css("width", "70%");
$pw.css("textAlign", "left");
$pw.css("marginLeft", "22px");
$pw.css("float", "right");

$signIn.css("float", "right");
$signIn.css("backgroundColor", "#89bc3f");
$signIn.css("borderRadius", "5px");
$signIn.css("width", "25%");
$signIn.css("height", "30px");
$signIn.css("color", "white");
$signIn.css("fontWeight", "bold");

$("#container").css("width", "50%");
$("#container").css("marginLeft", "auto");
$("#container").css("marginRight", "auto");

$("#bottom #container div").css("width", "100%");
$("#bottom div").css("marginLeft", "auto");
$("#bottom div").css("marginRight", "auto");
$("#bottom div").css("marginBottom", "20px");
$("#bottom div").css("color", "white");

// $(".img-responsive").css("backgroundPosition", "center");
// $(".img-responsive").css("backgroundSize", "cover");
$(".img-responsive").css("height", "60%");
$(".img-responsive").css("maxWidth", "100%");
$(".img-responsive").css("display", "block");

$("#bottom #container div p").css("color", "red");











}