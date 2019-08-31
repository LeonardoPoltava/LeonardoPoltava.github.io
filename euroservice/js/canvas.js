
// canvas
import * as THREE from './three.module.js';
import { FBXLoader } from './FBXLoader.js';

let container,camera, scene, renderer, light, group, cameraTarget, plane, plane1, planeSize, planeSize1,winWidth, winHeight, boxWidth, boxHeight, carTextureF, carTextureS;

boxWidth = document.querySelector('.main-bn').offsetWidth;
boxHeight = document.querySelector('.main-bn').offsetHeight;
winWidth = window.innerWidth;
winHeight = window.innerHeight;
// if(winWidth < 500 || winHeight > winWidth) {
//     boxHeight = document.querySelector('.main-bn').offsetHeight / 2;
// }
// else {
//     boxHeight = document.querySelector('.main-bn').offsetHeight;
// }
let targetRotation = 0;
let targetRotationOnMouseDown = 0;
let mouseX = 0;
let mouseXOnMouseDown = 0;
let windowHalfX = winWidth / 2;
init();
animate();

function init() {
    container = document.createElement( 'div' );
    container.classList.add('canvas-box');
    document.querySelector('.main-bn').appendChild( container );
    camera = new THREE.PerspectiveCamera( 40, boxWidth / boxHeight, 1, 2500 );
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
    carTextureF = new THREE.TextureLoader().load( './images/car1.jpg' );
    carTextureS = new THREE.TextureLoader().load( './images/car3.jpg' );
    if(boxWidth < 500 && boxHeight < 400 || boxWidth > 800 && boxHeight < 400) {
        planeSize = new THREE.PlaneBufferGeometry( boxWidth, boxHeight * 1.7);
        planeSize1 = new THREE.PlaneBufferGeometry( boxWidth, boxHeight * 1.7);
    }
    else if (boxWidth < 500) {
        planeSize = new THREE.PlaneBufferGeometry( boxWidth * 1.5, boxWidth);
        planeSize1 = new THREE.PlaneBufferGeometry( boxWidth * 1.5, boxWidth);
    }
    else if (boxWidth < 800) {
        planeSize = new THREE.PlaneBufferGeometry( boxWidth * 1.3, boxWidth);
        planeSize1 = new THREE.PlaneBufferGeometry( boxWidth * 1.3, boxWidth);
    }
    else {
        planeSize = new THREE.PlaneBufferGeometry( boxWidth, boxHeight);
        planeSize1 = new THREE.PlaneBufferGeometry( boxWidth, boxHeight);
    }
    plane = new THREE.Mesh(
        planeSize,
        new THREE.MeshBasicMaterial( { map: carTextureS, opacity: 1, transparent: true } )
    );
    plane1 = new THREE.Mesh(
        planeSize1,
        new THREE.MeshBasicMaterial( { map: carTextureF, opacity: 1, transparent: true } )
    );
    if(boxWidth < 500 && boxHeight < 400 || boxWidth > 800 && boxHeight < 400) {
        plane.position.set(0,boxWidth / 2, -boxWidth / 1.7);
        plane1.position.set(-boxWidth / 1.65, boxWidth / 2, 0);
    }
    else if(boxWidth < 500) {
        plane.position.set(0,boxWidth / 2, -boxWidth / 1.45);
        plane1.position.set(-boxWidth / 1.22, boxWidth / 2.05, 0);
    }
    else if (boxWidth < 800) {
        plane.position.set(0,boxWidth / 2.018, -boxWidth / 1.5);
        plane1.position.set(-boxWidth / 1.59, boxWidth / 2, 0);
    }
    else {
        plane.position.set(0,boxWidth / 12, -boxWidth / 2);
        plane1.position.set(-boxWidth / 2, boxWidth / 12, 0);
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
    boxWidth = document.querySelector('.main-bn').offsetWidth;
    boxHeight = document.querySelector('.main-bn').offsetHeight;
    camera.aspect = boxWidth / boxHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( boxWidth, boxHeight );
}
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
    camera.lookAt( cameraTarget );
}