
// canvas
import * as THREE from './three.module.js';
import { FBXLoader } from './FBXLoader.js';

let container,camera, scene, renderer, light, group, cameraTarget, plane, plane1, planeSize, planeSize1,winWidth, winHeight;

winWidth = window.innerWidth;
winHeight = window.innerHeight;
if(winWidth < 500 || winHeight > winWidth) {
    winHeight = window.innerHeight / 2;
}
else {
    winHeight = window.innerHeight;
}
let targetRotation = 0;
let targetRotationOnMouseDown = 0;
let mouseX = 0;
let mouseXOnMouseDown = 0;
let windowHalfX = winWidth / 2;
let boxWidth = document.querySelector('.main-bn').offsetWidth;
let boxHeight = document.querySelector('.main-bn').offsetHeight;
init();
animate();

function init() {
    container = document.createElement( 'div' );
    container.classList.add('canvas-box');
    document.querySelector('.main-bn').appendChild( container );
    camera = new THREE.PerspectiveCamera( 40, winWidth / winHeight, 1, 2500 );
    camera.position.set( 500, 270, 400 );
    cameraTarget = new THREE.Vector3( 0, 100, 0 );
    scene = new THREE.Scene();

    light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    light.position.set( 0, 200, 0 );
    scene.add( light );

    scene.background = new THREE.Color( 0xaa2afb7 );
    scene.fog = new THREE.Fog( 0xa0a0a0, 200, 100 );
    group = new THREE.Group();
    group.position.y = 0;
    group.position.z = -150;
    group.position.x = 150;
    scene.add( group );

    // EVENTS
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
    function onDocumentMouseDown( event ) {
        event.preventDefault();
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'mouseup', onDocumentMouseUp, false );
        document.addEventListener( 'mouseout', onDocumentMouseOut, false );
        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;
    }
    function onDocumentMouseMove( event ) {
        mouseX = event.clientX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
    }
    function onDocumentMouseUp() {
        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
    }
    function onDocumentMouseOut() {
        document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
    }
    function onDocumentTouchStart( event ) {
        if ( event.touches.length == 1 ) {
            event.preventDefault();
            mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;
        }
    }
    function onDocumentTouchMove( event ) {
        if ( event.touches.length == 1 ) {
            event.preventDefault();
            mouseX = event.touches[ 0 ].pageX - windowHalfX;
            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
        }
    }
    let carTextureF = new THREE.TextureLoader().load( './images/car1.jpg' );
    let carTextureS = new THREE.TextureLoader().load( './images/car3.jpg' );
    if(window.innerWidth < 500 && window.innerHeight < 400 || window.innerWidth > 800 && window.innerHeight < 400) {
        planeSize = new THREE.PlaneBufferGeometry( winWidth, winHeight * 1.7);
        planeSize1 = new THREE.PlaneBufferGeometry( winWidth, winHeight * 1.7);
    }
    else if (window.innerWidth < 500) {
        planeSize = new THREE.PlaneBufferGeometry( winWidth * 1.5, winWidth);
        planeSize1 = new THREE.PlaneBufferGeometry( winWidth * 1.5, winWidth);
    }
    else if (window.innerWidth < 800) {
        planeSize = new THREE.PlaneBufferGeometry( winWidth * 1.3, winWidth);
        planeSize1 = new THREE.PlaneBufferGeometry( winWidth * 1.3, winWidth);
    }
    else {
        planeSize = new THREE.PlaneBufferGeometry( winWidth, winHeight);
        planeSize1 = new THREE.PlaneBufferGeometry( winWidth, winHeight);
    }
    plane = new THREE.Mesh(
        planeSize,
        new THREE.MeshBasicMaterial( { map: carTextureS, opacity: 1, transparent: true } )
    );
    plane1 = new THREE.Mesh(
        planeSize1,
        new THREE.MeshBasicMaterial( { map: carTextureF, opacity: 1, transparent: true } )
    );
    if(window.innerWidth < 500 && window.innerHeight < 400 || window.innerWidth > 800 && window.innerHeight < 400) {
        plane.position.set(0,winWidth / 2, -winWidth / 1.7);
        plane1.position.set(-winWidth / 1.65, winWidth / 2, 0);
    }
    else if(window.innerWidth < 500) {
        plane.position.set(0,winWidth / 2, -winWidth / 1.45);
        plane1.position.set(-winWidth / 1.22, winWidth / 2.05, 0);
    }
    else if (window.innerWidth < 800) {
        plane.position.set(0,winWidth / 2, -winWidth / 1.5);
        plane1.position.set(-winWidth / 1.59, winWidth / 2, 0);
    }
    else {
        plane.position.set(0,winWidth / 12, -winWidth / 2);
        plane1.position.set(-winWidth / 2, winWidth / 12, 0);
    }
    plane1.rotateY(Math.PI / 2);
    scene.add(plane);
    scene.add(plane1);
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 200, 100 );
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = - 100;
    light.shadow.camera.left = - 120;
    light.shadow.camera.right = 120;
    scene.add( light );
    let mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add( mesh );

    let grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add( grid );
    let loader = new FBXLoader();
    loader.load( 'models/2015 Ford Mustang GT .fbx', function ( object ) {
        group.add( object );
    }, undefined, function ( error ) {
        console.error( error );
    } );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( boxWidth, boxHeight );
    renderer.shadowMap.enabled = true;
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    camera.aspect = winWidth / winHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( winWidth, winHeight );
}
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
    camera.lookAt( cameraTarget );
}