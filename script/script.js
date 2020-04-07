function main()
{
    console.log("Javascript up and running");
    document.getElementById('submit').addEventListener('click', formValidate, false)
}

function formValidate()
{
    console.log("Inside formValidate");

    var fullName = document.getElementById("full-nme");
    var email = document.getElementById("mail");
    var phone = document.getElementById("phone");

    if(fullName.value.length == 0)
    {
        window.alert("Full Name cannot be null.");
        return false;
    }
    if(email.value.indexOf("@") == -1)
    {
        window.alert("Invalid Email. Email should be of format abc@xyz.com");
        return false;
    }
    if(phone.value.length > 10)
    {
        window.alert("Invalid Email. Make sure you are entering the phone number" + 
                     "without country code.");
        return false;
    }
}


window.addEventListener("load", main, false)