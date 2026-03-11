document.querySelector(".button").addEventListener("click", function () {
  const initialInput = document.querySelector("#initial_user_password");
  const confirmInput = document.querySelector("#check_user_password");

  const initial = initialInput.value;
  const confirm = confirmInput.value;

  if (initial == confirm) {
    initialInput.setCustomValidity("");
    confirmInput.setCustomValidity("");
  } else {
    initialInput.setCustomValidity("This field is invalid");
    confirmInput.setCustomValidity("This field is invalid");
  }
});
