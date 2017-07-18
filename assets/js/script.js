$(document).ready(function() {
	$('#conversacion').append(localStorage.getItem('mensajes'));

	$('form').submit(function(e) {
		e.preventDefault();
	   nuevoMensaje();
	});

	$("#enter").on("click", function(e){
	    e.preventDefault();
	    nuevoMensaje();
	});
});

function nuevoMensaje() {
	var msg = $("#text-msg").val();
	if( msg != "" ){
		console.log("Mensaje enviado: " + msg);
		$('#conversacion').append('<div class="bubble card pull-right"><p>' + msg +'</p><small class="pull-right text-right">11:18</small></div>')
	    localStorage.setItem("mensajes", $('#conversacion').html());
	}
	$("#text-msg").val("");
}