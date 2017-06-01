window.addEventListener("load", function() {
	var toDoForm =document.getElementById("to-do-form");
	toDoForm.addEventListener("submit",function(e){
		e.preventDefault();

		var contenedor = document.getElementById("posts")
		var mensajeContenedor = document.getElementById("message");
		var mensaje = mensajeContenedor.value;
		var postContenedor = document.createElement("article");
		var post= document.createElement("p");
		postContenedor.className="jumbotron";
		post.textContent = mensaje;

		postContenedor.appendChild(post);

		contenedor.appendChild(postContenedor);

		mensajeContenedor.value="";
	});
	
});

/* una función que usaba addEevent listener convertida a jQuery
$postecheck.click(eliminarTodo);

trim quita los espacios a loas laddos de los textos
*/