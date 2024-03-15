function mostrarTransacciones(transacciones) {
	$("#transacciones").html("");
	for (var i = 0; i < transacciones.length; i++) {
		$("#transacciones").append(
			"<tr>" +
				"<td>" + transacciones[i].fecha + "</td>" +
				"<td>" + transacciones[i].tipo + "</td>" +
				"<td>" + transacciones[i].monto + "</td>" +
			"</tr>"
		);
	}
}

$(document).ready(function() {
	// Simular la obtención de transacciones recientes (reemplazar con API real)
	var transacciones = [
		{
			"fecha": "2024-03-01",
			"tipo": "deposito",
			"monto": 1000.50
		},
		{
			"fecha": "2024-02-28",
			"tipo": "envio",
			"monto": 500.00
		},
		{
			"fecha": "2024-02-25",
			"tipo": "deposito",
			"monto": 200.00
		}
	];

	
	// Mostrar las transacciones en la tabla
	mostrarTransacciones(transacciones);

	// Filtrar las transacciones por tipo, fecha de inicio y fecha fin
	$("#filter-form").submit(function(event) {
		event.preventDefault();

		var tipo = $("#tipo").val();
		var fechaInicio = $("#fecha-inicio").val();
		var fechaFin = $("#fecha-fin").val();

		var transaccionesFiltradas = transacciones.filter(function(transaccion) {
			var fechaTransaccion = new Date(transaccion.fecha);
			// poner codigo que returna TRUE si hay que mostrar la trans y FALSE si no
			return 1;
		});
		mostrarTransacciones(transaccionesFiltradas);
	});
});