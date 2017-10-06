//Validating fullname field
function validateFullname(field) {
    var error = "";

    if (field.value == "") {
        field.style.background = '#FB7F7F'; 
        error = "Please enter your fullname.\n";
    } 
    else {
        field.style.background = 'White';
    } 
    return error;
}

//Validating phone number field
function validatePhone(field) {
    var error = "";
    var stripped = field.value.replace(/[\(\)\.\-\ ]/g, '');     

   if (field.value == "") {
        error = "Please enter your phone number.\n";
        field.style.background = '#FB7F7F';
    } else if (isNaN(parseInt(stripped))) {
        error = "Invalid phone number.\n";
        field.style.background = '#FB7F7F';
    } else if (!(stripped.length == 10)) {
        error = "Invalid phone number\n";
        field.style.background = '#FB7F7F';
    } 
    return error;
}

//Validating question/text field
function validateEmpty(field) {
    var error = "";
  
    if (field.value.length == 0) {
        field.style.background = '#FB7F7F';
        error = "Please enter your question.\n"
    } else {
        field.style.background = 'White';
    }
    return error;   
}

//Validation on submit button
function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateFullname(theForm.fullname);
  reason += validatePhone(theForm.phone);
  reason += validateEmpty(theForm.question);   

  if(reason == "") {
    // document.getElementById("thankyouMessage").text('Thank You!!\n\nYour information was submitted successfully. We will now connect you to the next available chat agent.');
    alert("Thank You!!\n\nYour information was submitted successfulley. We will now connect you to the next available chat agent."  );
    return true;
  }
  else {
    alert("Some fields need attention:\n\n" + reason);
    return false; 
  }
}

//Select state option
var usStates = [
    { name: 'Please select a state'},
    { name: 'ALABAMA'},
    { name: 'ALASKA'},
    { name: 'AMERICAN SAMOA'},
    { name: 'ARIZONA'},
    { name: 'ARKANSAS'},
    { name: 'CALIFORNIA'},
    { name: 'COLORADO'},
    { name: 'CONNECTICUT'},
    { name: 'DELAWARE'},
    { name: 'DISTRICT OF COLUMBIA'},
    { name: 'FEDERATED STATES OF MICRONESIA'},
    { name: 'FLORIDA'},
    { name: 'GEORGIA'},
    { name: 'GUAM'},
    { name: 'HAWAII'},
    { name: 'IDAHO'},
    { name: 'ILLINOIS'},
    { name: 'INDIANA'},
    { name: 'IOWA'},
    { name: 'KANSAS'},
    { name: 'KENTUCKY'},
    { name: 'LOUISIANA'},
    { name: 'MAINE'},
    { name: 'MARSHALL ISLANDS'},
    { name: 'MARYLAND'},
    { name: 'MASSACHUSETTS'},
    { name: 'MICHIGAN'},
    { name: 'MINNESOTA'},
    { name: 'MISSISSIPPI'},
    { name: 'MISSOURI'},
    { name: 'MONTANA'},
    { name: 'NEBRASKA'},
    { name: 'NEVADA'},
    { name: 'NEW HAMPSHIRE'},
    { name: 'NEW JERSEY'},
    { name: 'NEW MEXICO'},
    { name: 'NEW YORK'},
    { name: 'NORTH CAROLINA'},
    { name: 'NORTH DAKOTA'},
    { name: 'NORTHERN MARIANA ISLANDS'},
    { name: 'OHIO'},
    { name: 'OKLAHOMA'},
    { name: 'OREGON'},
    { name: 'PALAU'},
    { name: 'PENNSYLVANIA'},
    { name: 'PUERTO RICO'},
    { name: 'RHODE ISLAND'},
    { name: 'SOUTH CAROLINA'},
    { name: 'SOUTH DAKOTA'},
    { name: 'TENNESSEE'},
    { name: 'TEXAS'},
    { name: 'UTAH'},
    { name: 'VERMONT'},
    { name: 'VIRGIN ISLANDS'},
    { name: 'VIRGINIA'},
    { name: 'WASHINGTON'},
    { name: 'WEST VIRGINIA'},
    { name: 'WISCONSIN'},
    { name: 'WYOMING'}
];

for(var i = 0;i<usStates.length;i++){
    var option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = i;
    var select = document.getElementById("states");
    select.appendChild(option);
}