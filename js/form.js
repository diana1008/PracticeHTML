$(function(){
	Parse.$ = jQuery;
	Parse.initialize("OLW5Wrede7rlBJxHeY42cj6Dv1isSXbvG8mpFC9Z", "4YBEubY2lRyhVzl0XSlr0WqarISt7pZ20qlmzKbp");

 var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
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
