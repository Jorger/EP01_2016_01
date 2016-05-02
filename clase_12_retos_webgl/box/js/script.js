window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho,alto);
	document.body.appendChild(lienzo.domElement);
	var escena = new THREE.Scene;
	var rangoDimension	= {min : 50, max : 200},
		rangoPosicion 	= {x : 300, y : 400, z : 500};

	//Crea un cubo...
	var creaCubo = function(data)
	{
		var geometria = new THREE.CubeGeometry(data.dimension.ancho, data.dimension.alto, data.dimension.profundidad);
		var textura = THREE.ImageUtils.loadTexture(data.img);
		var material = new THREE.MeshBasicMaterial({map : textura});
		var cubo = new THREE.Mesh(geometria, material);
		cubo.position = {x : data.posicion.x, y : data.posicion.y, z : data.posicion.z};
		return cubo;
	};

	//Ubica una posición aleatorio el Cubo...
	var posicion = {
						x : Math.floor(Math.random() * (rangoPosicion.x - (-rangoPosicion.x) + 1)) + (-rangoPosicion.x),
						y : Math.floor(Math.random() * (rangoPosicion.y - (-rangoPosicion.y) + 1)) + (-rangoPosicion.y),
						z : Math.floor(Math.random() * (rangoPosicion.z - (-rangoPosicion.z) + 1)) + (-rangoPosicion.z)
					},
		numImg 	  = Math.floor(Math.random() * 7) + 1,
		dimension = Math.floor(Math.random() * (rangoDimension.max - rangoDimension.min + 1)) + rangoDimension.min;

	//Crear sólo un cubo...
	var cubo = creaCubo({
							dimension : {ancho : dimension, alto : dimension, profundidad : dimension},
							posicion  : {x : posicion.x, y : posicion.y, z : posicion.z},
							img		  : "img/box_0" + numImg + ".jpg"
						});
	escena.add(cubo);
	var camara = new THREE.PerspectiveCamera(60, (ancho / alto), 0.1, 10000);
	camara.position.z = 1200;
	escena.add(camara);
	function renderizar()
	{
		cubo.rotation.y += Math.PI * 0.5 / 180;
		cubo.rotation.x += Math.PI * 0.1 / 180;
		cubo.rotation.z += Math.PI * 0.5 / 180;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
