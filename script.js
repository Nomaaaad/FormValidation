const form = document.querySelector('.form');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('.message');


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error;
    if(!isValid){
        message.textContent = 'Please fill out all fields';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value){
        passwordsMatch = true;
    }  else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

function proccessFormData(e) {
    e.preventDefault();
    // Validate form
    validateForm();

    if(isValid && passwordsMatch){
        storeFormData();
    }
}

// Event Listeners
form.addEventListener('submit', proccessFormData);