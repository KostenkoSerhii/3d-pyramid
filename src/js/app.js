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
})