# Creando un Web Componente
Este es un proyecto para practicar el uso de los componentes web solo con "JavaScript".

# Pasos realizados

✅ Crear el esqueleto del proyecto
``` sh
user@pc:~$ mkdir -P assets/css assets/js assets/img assets/js/components
user@pc:~$ touch index.html css/style.css js/index.js js/components/UserCard.js

```
✅ Escribimos la estructura HTML
``` html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Sitio de prueba">
	<title>Web Components</title>
	<link rel="shortcut icon" href="./assets/img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="./assets/css/style.css">
	<script type="module" src="./assets/js/index.js"></script>
</head>
<body>
	<user-card name="Homero Simpson"></user-card>
	<user-card name="Lisa Simpson"></user-card>
	<user-card name="Marge Simpson"></user-card>
</body>
</html>
```

✅ Escribimos las reglas CSS
``` css
:root{
	--color-1:#27191c;
	--color-2:#2d3839;
	--color-3:#114d4d;
	--color-4:#6e9987;
	--color-5:#e0e4ce;
}
* {
	padding: 0;
	margin: 0;
	box-sizing:border-box;
	font-family: system-ui;
}

body {
  background-color: Canvas;
  color: CanvasText;
  color-scheme: dark;
}

```

✅ Diseñamos nuestro **UserCard.js**
``` javascript
export default class UserCard extends HTMLElement {
	constructor(){
		super()
		const name = this.getAttribute('name') || "Nameless";
		const html = `<h2>${name.toUpperCase()}</h2>`

		this.style = `
		color:var(--color-5);
		background:var(--color-3);
		border:2px solid var(--color-4);
		display:block;
		width:250px;
		text-align:center;
		padding:1rem;
		margin: 1rem;
		border-radius:1rem;
		box-shadow:0 2px 3px var(--color-1);
		`;

		this.insertAdjacentHTML("beforeend",html)
	}

}
```

✅ Registramos nuestro componente en **index.js**
``` javascript
import UserCard from './components/UserCard.js'
customElements.define('user-card',UserCard)
```

## Autor
[César Grisel](mailto:griselcesar@gmail.com)

**NOTA:** usar un servidor para hacer la prueba del código.