$(document).ready(function() {
    var sess = JSON.parse(window.localStorage.getItem('session'));

    $("#login-form").submit(function(event) {
        event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        // Validación de campos
        if (email === "" || password === "") {
            $(".error-message").text("Por favor, complete todos los campos");
            return;
        }

        // Simulación de inicio de sesión (reemplazar con API real)
        if (email === "ejemplo@gmail.com" && password === "12345") {
            // Redirigir a la página principal
            localStorage.setItem("session", JSON.stringify({"username": "ejemplo@gmail.com"}));
            window.location.href = "../templates/menu.html";
        } else {
            $(".error-message").text("Correo electrónico o contraseña incorrectos");
        }
    });
});