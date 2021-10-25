/* Add your JavaScript to this file */
window.onload= ()=>{
    let subscipt = document.querySelector(".newsletter form button.btn");
    let useremail = document.querySelector(".newsletter form input[type=\"email\"]");
    useremail.setAttribute("placeholder", "Email address");
    let message = document.querySelector(".newsletter div.message");

    const conditioncheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    
    subscipt.onclick = (event)=>{
        event.preventDefault();
        if (useremail.value.length != 0 && conditioncheck.test(useremail.value.toLowerCase())){
            message.innerHTML = `Thank you! Your email address ${useremail.value} has been added to our mailing list!`;
        }
        else{
            message.innerHTML = "Please enter a valid email address."
        }
    }
}