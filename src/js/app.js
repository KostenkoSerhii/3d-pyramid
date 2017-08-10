// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){

	var container = document.getElementById("container")
var width = container.clientWidth;
var height = container.clientHeight;
var aspect = width / height;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height);
container.appendChild(renderer.domElement);

var geometry = new THREE.Geometry(1,1,1);
geometry.vertices = [
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0, 1, 0 ),
    new THREE.Vector3( 1, 1, 0 ),
    new THREE.Vector3( 1, 0, 0 ),
    new THREE.Vector3( 0.5, 0.5, 1 )
];
geometry.faces = [
    new THREE.Face3( 0, 1, 2 ),
    new THREE.Face3( 0, 2, 3 ),
    new THREE.Face3( 1, 0, 4 ),
    new THREE.Face3( 2, 1, 4 ),
    new THREE.Face3( 3, 2, 4 ),
    new THREE.Face3( 0, 3, 4 )
]; 
var material = new THREE.MeshBasicMaterial({
  wireframe: true, 
  color: 0xFFFF00
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3

function render() {
  requestAnimationFrame(render);
  
   //cube.rotation.x += 0.02;
   //cube.rotation.y += 0.02;
   //cube.rotation.z += 0.02;
  
  renderer.render(scene, camera);
}

render();

(function(){
var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45 
		, window.innerWidth / window.innerHeight , 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	//renderer.setClearColorHex(0xEEEEEE);
	renderer.setSize(window.innerWidth, window.innerHeight);
	var axes = new THREE.AxisHelper( 20 );
	scene.add(axes);
	var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
	var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
	var plane = new THREE.Mesh(planeGeometry,planeMaterial);
	plane.rotation.x=-0.5*Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;
	scene.add(plane);
	var cubeGeometry = new THREE.CubeGeometry(4,4,4);
	var cubeMaterial = new THREE.MeshBasicMaterial(
		{color: 0xff0000, wireframe: true});
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;
	scene.add(cube);
	var sphereGeometry = new THREE.SphereGeometry(4,20,20);
	var sphereMaterial = new THREE.MeshBasicMaterial(
		{color: 0x7777ff, wireframe: true});
	var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;
	scene.add(sphere);
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);
	$("#WebGL-output").append(renderer.domElement);
	renderer.render(scene, camera);

}())
})