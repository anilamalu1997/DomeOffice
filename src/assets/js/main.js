

function checkPass() {

    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (pass1.value == pass2.value) {
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        document.getElementById('pass2').style.borderColor = "red";
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    } else {
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        document.getElementById('pass2').style.borderColor = "green";
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}

function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}

function validatephone(phone) {
    var maintainplus = '';
    var numval = phone.value
    if (numval.charAt(0) == '+') {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}


function validatepin(pin) {
    var maintainpluss = '';
    var numvall = pin.value
    if (numvall.charAt(0) == '+') {
        var maintainpluss = '';
    }
    curpinvar = numvall.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    pin.value = maintainpluss + curpinvar;
    var maintainpluss = '';
    pin.focus;
}
// validate email
function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    var msg = document.getElementById('status');
    var gdcolor = "green"
    var bdcolor = "red"
    if (regMail.test(email) == false) {
        document.getElementById('email').style.borderColor = "red"; //red color for input field
        msg.style.color = bdcolor;
        msg.innerHTML = "Email address is not valid yet"
    } else {
        document.getElementById('email').style.borderColor = "green"; //green for input field
        msg.style.color = gdcolor;
        msg.innerHTML = "OK! Good to go!!!"
    }
}
// validate date of birth
function dob_validate(dob) {
    var date1 = new Date();
    var dob = document.getElementById("dob").value;
    var date2 = new Date(dob);
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //Regex to validate date format (dd/mm/yyyy)
    var mesg = document.getElementById('dobstatus');
    if (pattern.test(dob)) {
        var y1 = date1.getFullYear(); //getting current year
        var y2 = date2.getFullYear(); //getting dob year
        var age = y1 - y2; //calculating age 
        mesg.innerHTML = 'Age:  ' + age;
        return true;
    } else {

        mesg.style.color = "red";
        mesg.innerHTML = "Invalid date format. Please Input in (dd/mm/yyyy) format!"
        return false;
    }
}


//user

function validatephone(phone) {
    var maintainplus = '';
    var numval = phone.value
    if (numval.charAt(0) == '+') {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}


function validatepin(pin) {
    var maintainpluss = '';
    var numvall = pin.value
    if (numvall.charAt(0) == '+') {
        var maintainpluss = '';
    }
    curpinvar = numvall.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g, '');
    pin.value = maintainpluss + curpinvar;
    var maintainpluss = '';
    pin.focus;
}
// validate email
function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    var msg = document.getElementById('status');
    var gdcolor = "green"
    var bdcolor = "red"
    if (regMail.test(email) == false) {
        document.getElementById('email').style.borderColor = "red"; //red color for input field
        msg.style.color = bdcolor;
        msg.innerHTML = "Email address is not valid yet"
    } else {
        document.getElementById('email').style.borderColor = "green"; //green for input field
        msg.style.color = gdcolor;
        msg.innerHTML = "OK! Good to go!!!"
    }
}


$(document).ready(function() {
    // Prepare the preview for profile picture
    $("#wizard-picture").change(function() {
        readURL(this);
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}





