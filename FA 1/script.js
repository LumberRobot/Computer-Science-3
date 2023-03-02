//FA1 part 1
var nickname = "Kae";
var heightin = 68.12;
var weightkg = 62;

heightcm = heightin * 2.54;
heightft = heightcm / 30.48;
heightdm = heightft % 1;
heightin = heightdm * 12;
heightin = Math.floor(heightin)
heightn = Math.floor(heightft)
heightnew = heightn + "'" + heightin + '"';

weightnew = weightkg * 2.205;

alert("Name: " + nickname + "\n" + "Height: " + heightnew + "\n" + "Weight: " + weightnew + " lbs");

//FA1 part 2
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var birthYear = prompt("What is your birth year?");

year = new Date().getFullYear();
age = year - birthYear;

document.getElementById("hello").innerText = "Hello, " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";

var userdata = confirm("Do you agree to share your personal information with the site?");
if(userdata == true){
    document.write("Name: " + nickname + "<br>" + "Height: " + heightnew + "<br>" + "Weight: " + weightnew + " lbs");
}
else {
    document.write("User does not wish to share his/her information");
}