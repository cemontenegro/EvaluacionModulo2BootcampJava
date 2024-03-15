$(document).ready(function() {

    var sess = JSON.parse(window.localStorage.getItem('session'));

    $("#deposit-form").submit(function(event) {
        event.preventDefault();

        var monto = $("#monto").val();

        // Validación del monto
        if (monto === "" || isNaN(monto)) {
            $(".error-message").text("Por favor, ingrese un monto válido");
            return;
        }

        // Simulación de depósito (reemplazar con API real)
        var saldoActual = parseFloat($("#saldo-cuenta").text());
        var nuevoSaldo = saldoActual + parseFloat(monto);
        $("#saldo-cuenta").text("S/. " + nuevoSaldo.toFixed(2));

        // Mostrar mensaje de éxito
        $(".error-message").text("Creo destinatario y Depósito realizado exitosamente");

        // Redirigir al menú principal después de unos segundos
        setTimeout(function() {
            window.location.href = "menu.html";
        }, 2000);
    });
});