// ===================== OPTION 1 =====================

const loginForm = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Please, fill in all fields!!!");
  } else {
    const inputDataCollection = {
      email,
      password,
    };
    console.log(inputDataCollection);

    loginForm.reset();
  }
}

// ===================== OPTION 2 =====================

// const loginForm = document.querySelector(".login-form");
// const inputEl = document.querySelectorAll("input");

// loginForm.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((name, value) => {
//     console.log(value);
//     console.log(name);
//   });

//   const email = event.currentTarget.elements.email.value;
//   const password = event.currentTarget.elements.password.value;

//   if (email === "" || password === "") {
//     console.log(alert("Please, fill in all fields!!!"));
//   } else {
//     loginForm.reset();
//   }
// }
