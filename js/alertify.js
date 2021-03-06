window.onload = function () {
  document.getElementById("send").addEventListener("click", function (e) {
    
    /* VARIABLES */

    var username = document.getElementById("username").value,
      email = document.getElementById("email").value,
      password = document.getElementById("password").value,
      cPassword = document.getElementById("cPassword").value;

    /* ERROR CONTROLS */

    if (username.length > 20) {
      alertify.alert(
        "Watch out !",
        "Username too long ! 20 characters maximum !"
      );
    } else if (username == "" || password == "" || email == "") {
      alertify.alert("Watch out !", "You can´t leave an empty field !");
      e.preventDefault();
    } else if (password.length < 8) {
      alertify.alert("Watch out !", "Password too much short and weak !");
      e.preventDefault();
    } else if (password != cPassword) {
      alertify.alert(
        "Watch out !",
        "Password and confirm password don´t coincide!"
      );
      e.preventDefault();
    }
  });
};
