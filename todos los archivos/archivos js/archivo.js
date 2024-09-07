

// foro de comentarios

// ******************* IMPORTANTE *********************
// El elemento con id "comentario-form" existe únicamente en el HTML "pagina de inicio salud mental"
// Por lo tanto, al ejecutar este archivo JS en "test de bienestar.html", el código se rompe, porque 
// intenta escuchar un evento de un elemento que no existe
// La solución sería crear un archivo distinto JS, tal cual hicieron con los CSS,
// y vincular cada JS con su HTML correspondiente :)

// Cuando quieran probar el test de bienestar, por ahora, deberían comentar
// esta porción de código para que funcione
// *****************************************************

document.getElementById("comentario-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;
	agregarComentario(nombre, comentario);
});

function agregarComentario(nombre, comentario) {
	var contenedorComentarios = document.getElementById("comentarios");
	var comentarioHTML = `
		<div class="comentario">
			<span class="nombre">${nombre}</span>
			<span class="texto">${comentario}</span>
		</div>
    `;
	contenedorComentarios.innerHTML += comentarioHTML;
};

// test de bienestar
// const form = document.getElementById('test-form');
// const resultados = document.getElementById('resultados');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;
// 	const pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;
	
// 	// Lógica para calcular el resultado del test
// 	let resultado = '';
// 	if (pregunta1 === 'Bien' && pregunta2 === '5-7 horas') {
// 		resultado = 'Tu bienestar es excelente!';
// 	} else if (pregunta1 === 'Regular' && pregunta2 === '5-7 horas') {
// 		resultado = 'Tu bienestar es bueno, pero podrías mejorar.';
// 	} else {
// 		resultado = 'Tu bienestar es regular, debes tomar medidas para mejorar.';
// 	}
	
	
// 	resultados.innerHTML = resultado;
// });

const resultados = document.getElementById('resultados');
const botonEnviar = document.getElementById('enviar-test'); // utilizo este boton, y no el "submit" del formulario, asi no se refresca la página
const respuestasTest = document.getElementsByClassName("respuestas"); // array con todas las respuestas

botonEnviar.addEventListener("click", () => {
	let valorResultado = 0;

	for (let index = 0; index < respuestasTest.length; index++) {
		let nameInput = "pregunta" + (index + 1); // Construimos el name "pregunta1", "pregunta2", etc
		let valorRespuesta = document.querySelector(`input[name="${nameInput}"]:checked`).value;
		console.log("Para la pregunta: " + nameInput + " se seleccionó el valor: " + valorRespuesta);
		valorResultado += (+valorRespuesta); // Acumulamos en "valorResultado" la suma de los puntajes totales, convirtiendo el texto de valorRespuesta a un numero
		console.log("Puntaje hasta ahora: " + valorResultado);
	}

	resultados.innerHTML =  "El puntaje de tu test es: " + valorResultado;

	// Les dejo a ustedes mejorar esta idea! Por ejemplo, utilizando los textos que habían hecho anteriormente
	// Ej: "si la pregunta1 vale 3, es que descansa Bien, entonces podemos decirle 'Tu bienestar es excelente!'"
});

