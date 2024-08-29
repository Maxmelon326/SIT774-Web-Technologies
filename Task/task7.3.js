function resetform()
{
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("unit").value = "";
  document.getElementById("phone").value = "";
}

//validate name
function validateName() 
{
  var nameInput = document.getElementById("name").value;
  var messageElement = document.getElementById("namemessage");
  if (nameInput === "") 
  {
    messageElement.innerHTML = "You did not enter your name";
    messageElement.style.color="red";
    return false;
  } 
  else 
  {
    messageElement.innerHTML = "Valid";
    messageElement.style.color = "green";
    return true;
  }
}


//validate email
function validateEmail() 
{
  var emailInput = document.getElementById("email").value;
  var messageElement = document.getElementById("emailmessage");
  // Check if the email input is empty
  if (emailInput === "") 
  {
    messageElement.innerHTML = "Please enter your email";
    messageElement.style.color="red";
    return false;
  } 

  // Check if the email ends with "@deakin.edu.au"
  if(!emailInput.endsWith("@deakin.edu.au") )
  {
    messageElement.innerHTML = "Must be your Deakin email ending with '@deakin.edu.au'";
    messageElement.style.color="red";
    return false;
  }
  //valid email
  messageElement.innerHTML = "Valid";
  messageElement.style.color = "green";
  return true;
}

//validate unit
function validateUnit() 
{
  var unitInput = document.getElementById("unit").value;
  var messageElement = document.getElementById("unitmessage");
  // Check if the input is empty
  if (unitInput === "") 
  {
    messageElement.innerHTML = "Please enter your Deakin Unit";
    messageElement.style.color="red";
    return false;
  } 

  // check unit format
  var unitRegex = /^[a-zA-Z]{3}\d{3}$/;//正则验证,[a-zA-Z]代表字母,\d代表0-9
  if(!unitRegex.test(unitInput))
  {
    messageElement.innerHTML = "Unit code MUST be in format 'ABC123'";
    messageElement.style.color="red";
    return false;
  }
  //valid unit
  messageElement.innerHTML = "Valid";
  messageElement.style.color = "green";
  return true;

}

function validatePhone()
{
  var phoneInput = document.getElementById("phone").value;
  var messageElement = document.getElementById("phonemessage");
  // Check if the input is emptyt
  if (phoneInput === "") 
  {
    messageElement.innerHTML = "Please enter your phone number";
    messageElement.style.color="red";
    return false;
  } 

  var phoneRegex = /^\d{10}$/;
  if(!phoneRegex.test(phoneInput))
  {
    var nonDigitMatch = phoneInput.match(/\D/);
    if (nonDigitMatch) 
    {
      messageElement.innerHTML = "Contains character '" + nonDigitMatch[0] + "'. Numbers only!";
    }
    else
    {
    messageElement.innerHTML = "Phone number must be exactly 10 digits";
    }
    messageElement.style.color="red";
    return false;
  }

   //valid phone
   messageElement.innerHTML = "Valid";
   messageElement.style.color = "green";
   return true;
}



function submit() 
{
  // Call validation functions for each field
  var isNameValid = validateName();
  var isEmailValid = validateEmail();
  var isUnitValid = validateUnit();
  var isPhoneValid = validatePhone();

  // Check if all validations are successful
  if (isNameValid && isEmailValid && isUnitValid && isPhoneValid) 
  {
    alert("Submit Successful!");
  }
}