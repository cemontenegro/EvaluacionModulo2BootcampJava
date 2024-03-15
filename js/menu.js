$(document).ready(function() {

    var sess = JSON.parse(window.localStorage.getItem('session'));

    // Simular la obtención del saldo actual (reemplazar con API real)
    var saldoActual = 1000.50;
    $("#saldo-cuenta").text("S/. " + saldoActual.toFixed(2));

    $("#ver-transacciones").click(function() {
        window.location.href = "transactions.html";
    });

    $("#realizar-deposito").click(function() {
        window.location.href = "deposit.html";
    });

    $("#enviar-dinero").click(function() {
        window.location.href = "sendmoney.html";
    });
});

