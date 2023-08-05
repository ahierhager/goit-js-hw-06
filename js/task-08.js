const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = new FormData(loginForm);
  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (formDataObject.email.trim() === "" || formDataObject.password.trim() === "") {
    alert("Please fill in all fields.");
  } else {
    console.log(formDataObject); 
    loginForm.reset(); 
  }
});





