$(function(){
	Parse.initialize("6LQBaZBoMePgPQzYmeKLfgMjDA4SsCmXW0HsVB7X", "f2J2nEaENTZK8g4PbwXtgdyRWTuPsG7wxJs3RzZw");
	var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  var msgbox = Windows.UI.Popups.MessageDialog("yay! it worked");
  return msgbox.showAsync();
	initialize();
});





/*document).ready(function(){
	$('#reg-form').submit(function(e){
		e.preventDefault();
		saveUser();
	});
});
function saveUser(){
	$("#reg").on('click',function(e){
		e.preventDefault();
		var user = new Parse.User();
		firstName = $('#Fname').val();
		lastName = $('#Lname').val();
		address = $('#adress').val()
		city = $('#city').val()
		state = $('#state').val()
		zip-code = $('#zip-code').val()
		username = $('#user').val()
		password = $('#pass').val()
		
		if (username == '' || password == '' || email == ''){
			alert("Please complete all fields");
			return;
		}
		createNewUser(firstName, lastName, adress, city, state, zip-code, username,password);
	});

}*/
