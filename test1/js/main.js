// function createCanvas() {
    // let width = window.innerWidth;
    // let height = window.innerHeight;
    // let canvas = document.querySelector('#canvas');
    // canvas.setAttribute('width', width);
    // canvas.setAttribute('height', height);
    //
    // let ball = {
    //   rotationY: 0,
    //   rotationX: 0,
    //   rotationZ: 0,
    //   positionX: 0,
    //   positionY: 0,
    //   positionZ: 0
    // };
    // // gui
    // let gui = new dat.GUI();
    // gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
    // gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);
    // gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001);
    // gui.add(ball, 'positionX').min(-5).max(5).step(0.1);
    // gui.add(ball, 'positionY').min(-5).max(5).step(0.1);
    // gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);
    // // rendere
    // let renderer = new THREE.WebGLRenderer({canvas: canvas});
    // renderer.setClearColor(0x000000);
    //
    // let scene = new THREE.Scene();
    //
    // let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    // camera.position.set(0, 0, 1000);
    //
    // let light = new THREE.AmbientLight(0xffffff);
    // scene.add(light);
    //
    // // let texture = new THREE.TextureLoader().load( './images/7.jpg' );
    // let geometry = new THREE.SphereGeometry(300, 12, 12);
    // let material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors});
    //
    // for(let i=0;i<geometry.faces.length;i++) {
    //     geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random())
    // }
    //
    // let mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);
    // function loop() {
    //     mesh.rotation.x += ball.rotationX;
    //     mesh.rotation.y += ball.rotationY;
    //     mesh.rotation.z += ball.rotationZ;
    //     mesh.position.x += ball.positionX;
    //     mesh.position.y += ball.positionY;
    //     mesh.position.z += ball.positionZ;
    //     renderer.render(scene, camera);
    //     requestAnimationFrame(function () {
    //         loop();
    //     })
    // }
    // //
    // loop();
// }
// window.onload = function () {
//     createCanvas();
// };
// window.onresize = function () {
//     createCanvas();
// }



// let scene, camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 5000;
// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
//     camera.position.z = 1;
//     camera.rotation.x = 1.16;
//     camera.rotation.y = -0.12;
//     camera.rotation.z = 0.27;
//
//     ambient = new THREE.AmbientLight(0x555555);
//     scene.add(ambient);
//
//     directionalLight = new THREE.DirectionalLight(0xffeedd);
//     directionalLight.position.set(0,0,1);
//     scene.add(directionalLight);
//
//     flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
//     flash.position.set(200,300,100);
//     scene.add(flash);
//
//     renderer = new THREE.WebGLRenderer();
//     scene.fog = new THREE.FogExp2(0x1c1c2a, 0.002);
//     renderer.setClearColor(scene.fog.color);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//
//     rainGeo = new THREE.Geometry();
//     for(let i =0;i<rainCount;i++) {
//         rainDrop = new THREE.Vector3(
//             Math.random()*400 - 200,
//             Math.random()*500 - 250,
//             Math.random()*400 - 200
//         );
//         rainDrop.velocity = {};
//         rainDrop.velocity = 0;
//         rainGeo.vertices.push(rainDrop);
//     }
//     rainMaterial = new THREE.PointsMaterial({
//         color: 0xaaaaaa,
//         size: 0.1,
//         transparent: true
//     });
//     rain = new THREE.Points(rainGeo, rainMaterial);
//     scene.add(rain);
//
//     let loader = new THREE.TextureLoader();
//     loader.load("./images/smoke.png", function (texture) {
//         cloudGeo = new THREE.PlaneBufferGeometry(500,500);
//         cloudMaterial = new THREE.MeshLambertMaterial({
//             map: texture,
//             transparent: true
//         });
//
//         for(let p=0;p<25;p++) {
//             let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//             cloud.position.set(
//                 Math.random()*800 - 400,
//                 500,
//                 Math.random()*500 - 450
//             );
//             cloud.rotation.x = 1.16;
//             cloud.rotation.y = -0.12;
//             cloud.rotation.z = Math.random()*360;
//             cloud.material.opacity = 0.6;
//             cloudParticles.push(cloud);
//             scene.add(cloud);
//         }
//         animate();
//     });
//     let listener = new THREE.AudioListener();
//     camera.add( listener );
//     let sound = new THREE.Audio( listener );
//     let audioLoader = new THREE.AudioLoader();
//     audioLoader.load( './sounds/neizvesten-zvuk-grozy.mp3', function( buffer ) {
//         sound.setBuffer( buffer );
//         sound.setLoop( true );
//         sound.setVolume( 0.5 );
//         sound.play();
//     });
// }
// function animate() {
//     cloudParticles.forEach(p => {
//         p.rotation.z -= 0.002;
//     });
//     rainGeo.vertices.forEach(p=> {
//        p.velocity -= 0.1 + Math.random() * 0.1;
//        p.y += p.velocity;
//        if(p.y < -200) {
//            p.y = 200;
//            p.velocity = 0;
//        }
//     });
//     rainGeo.verticesNeedUpdate = true;
//     rain.rotation.y += 0.002;
//     if(Math.random() > 0.93 || flash.power > 100) {
//         if(flash.power < 100) {
//             flash.position.set(
//                 Math.random()*400,
//                 300 + Math.random()*200,
//                 100
//             );
//         }
//         flash.power = 50 + Math.random() * 500;
//     }
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }
// init();

window.onload = function () {
    let camera, cameraTarget, scene, renderer, cloudParticles = [];
    let group, textMesh1, textSubMesh,textSub1Mesh, textGeo, materials, size, hover, winWidth, winHeight;
    winWidth = document.documentElement.clientWidth;
    winHeight = document.documentElement.clientHeight;
    let text = "СОЗДАЕМ ИННОВАЦИОННЫЕ ИТ-ПРОДУКТЫ\n";
        let height = 5,
        curveSegments = 4,
        bevelThickness = 1,
        bevelSize = 0.5,
        bevelEnabled = true,
        font = undefined,
        fontName = "Roboto_Regular";
    if(winWidth < 500) {
        size = 16;
        hover = 65;
        winHeight = document.documentElement.clientHeight / 2;
    }
    else if(winWidth < 991) {
        size = 18;
        hover = 70;
    }
    else {
        size = 20;
        hover = 100;
    }
    let textSub = "Разработка веб-сервисов, программ, игр, мобильных приложений для бизнеса,";
    let textSub1 = "государственного сектора и не коммерческих организаций.";

    let targetRotation = 0;
    let targetRotationOnMouseDown = 0;
    let mouseX = 0;
    let mouseXOnMouseDown = 0;
    let windowHalfX = winWidth / 2;
    let fontIndex = 1;

    function init() {
        container = document.createElement( 'div' );
        document.body.appendChild( container );
        // CAMERA
        camera = new THREE.PerspectiveCamera( 30, winWidth / winHeight, 1, 5000 );
        camera.position.set( 0, 300, 800 );
        cameraTarget = new THREE.Vector3( 0, 100, 0 );
        // SCENE
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x000000 );
        scene.fog = new THREE.Fog( 0x000000, 1000, 0 );
        // LIGHTS
        let dirLight = new THREE.DirectionalLight( 0xffffff, 0.500 );
        dirLight.position.set( 0, 0, 1 ).normalize();
        scene.add( dirLight );
        let pointLight = new THREE.PointLight( 0xffffff, 1.5 );
        pointLight.position.set( 100, 100, 90 );
        scene.add( pointLight );
        pointLight.color.setHSL( 53, 0, 91 );
        materials = [
            new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
            new THREE.MeshPhongMaterial( { color: 0x000 } ) // side
        ];
        group = new THREE.Group();
        group.position.y = 100;
        scene.add( group );
        loadFont();
        let texture = new THREE.TextureLoader().load( './images/main-bn.jpg' );
        let planeSize;
        if(winWidth < 500) {
            planeSize = new THREE.PlaneBufferGeometry( winWidth * 4, winHeight * 4);
        }
        else if(winWidth < 991) {
            planeSize = new THREE.PlaneBufferGeometry( winWidth * 2, winHeight * 2);
        }
        else {
            planeSize = new THREE.PlaneBufferGeometry( winWidth, winHeight);
        }
        let plane = new THREE.Mesh(
            planeSize,
            new THREE.MeshBasicMaterial( { map: texture, opacity: 1, transparent: true } )
        );
        plane.position.z = -400;
        scene.add( plane );

        ambient = new THREE.AmbientLight(0x555555);
        scene.add(ambient);

        directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);
        // RENDERER
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( winWidth, winHeight );
        container.appendChild( renderer.domElement );
        // EVENTS
        document.addEventListener( 'mousedown', onDocumentMouseDown, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize() {
            let winWidth = document.documentElement.clientWidth;
            let winHeight = document.documentElement.clientHeight;
            if(winWidth < 500) {
                size = 16;
                hover = 65;
                winHeight = document.documentElement.clientHeight / 2;
            }
            else if(winWidth < 991) {
                size = 18;
                hover = 70;
            }
            else {
                size = 20;
                hover = 100;
            }
            windowHalfX = winWidth / 2;
            camera.aspect = winWidth / winHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( winWidth, winHeight );
            refreshText();
            renderer.setSize( winWidth, winHeight );
        }
        function loadFont() {
            let loader = new THREE.FontLoader();
            loader.load( 'fonts/' + fontName + '.json', function ( response ) {
                font = response;
                refreshText();
            } );
        }
        function createText() {
            textGeo = new THREE.TextGeometry( text, {
                font: font,
                size: size,
                height: height,
                curveSegments: curveSegments,
                bevelThickness: bevelThickness,
                bevelSize: bevelSize,
                bevelEnabled: bevelEnabled
            } );
            textGeo.computeBoundingBox();
            textGeo.computeVertexNormals();

            if(textSub) {
                textGeoSub = new THREE.TextGeometry( textSub, {
                    font: font,
                    size: size - 5,
                    height: height,
                    curveSegments: curveSegments,
                    bevelThickness: bevelThickness,
                    bevelSize: bevelSize,
                    bevelEnabled: bevelEnabled
                } );
                textGeoSub.computeBoundingBox();
                textGeoSub.computeVertexNormals();
            }
            let centerSubOffset = - 0.5 * ( textGeoSub.boundingBox.max.x - textGeoSub.boundingBox.min.x );
            textGeoSub = new THREE.BufferGeometry().fromGeometry( textGeoSub );
            textSubMesh = new THREE.Mesh( textGeoSub, materials );
            textSubMesh.position.x = centerSubOffset;
            textSubMesh.position.y = hover * -0.01;
            textSubMesh.position.z = 0;
            textSubMesh.rotation.x = 0;
            textSubMesh.rotation.y = Math.PI * 2;
            group.add( textSubMesh );
            let centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
            textGeo = new THREE.BufferGeometry().fromGeometry( textGeo );
            textMesh1 = new THREE.Mesh( textGeo, materials );
            textMesh1.position.x = centerOffset;
            textMesh1.position.y = hover;
            textMesh1.position.z = 0;
            textMesh1.rotation.x = 0;
            textMesh1.rotation.y = Math.PI * 2;
            group.add( textMesh1 );

            textGeoSub1 = new THREE.TextGeometry( textSub1, {
                font: font,
                size: size - 5,
                height: height,
                curveSegments: curveSegments,
                bevelThickness: bevelThickness,
                bevelSize: bevelSize,
                bevelEnabled: bevelEnabled
            } );
            textGeoSub1.computeBoundingBox();
            textGeoSub1.computeVertexNormals();
            let centerSub1Offset = - 0.5 * ( textGeoSub1.boundingBox.max.x - textGeoSub1.boundingBox.min.x );
            textGeoSub1 = new THREE.BufferGeometry().fromGeometry( textGeoSub1 );
            textSub1Mesh = new THREE.Mesh( textGeoSub1, materials );
            textSub1Mesh.position.x = centerSub1Offset;
            textSub1Mesh.position.y = hover * -0.3;
            textSub1Mesh.position.z = 0;
            textSub1Mesh.rotation.x = 0;
            textSubMesh.rotation.y = Math.PI * 2;
            group.add( textSub1Mesh );
        }
        let cubeGeometry = new THREE.BoxGeometry( window.innerWidth / 12, window.innerHeight / 150 );
        let cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffe000 } );
        let cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
        cube.position.y = hover * 0.6;
        group.add( cube );
        function refreshText() {
            group.remove( textMesh1 );
            group.remove( textSubMesh );
            group.remove( textSub1Mesh );
            createText();
        }
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
        ambient = new THREE.AmbientLight(0x555555);
        scene.add(ambient);

        directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0,0,1);
        scene.add(directionalLight);
        let loader = new THREE.TextureLoader();
        loader.load("./images/smoke1.png", function (texture) {
            cloudGeo = new THREE.PlaneBufferGeometry(250,250);
            cloudMaterial = new THREE.MeshLambertMaterial({
                map: texture,
                transparent: true
            });

            for(let p=0;p<20;p++) {
                let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                cloud.position.set(
                    Math.random()*800 - 400,
                    hover - 100,
                    Math.random()*800 - 450
                );
                cloud.rotation.x = 0;
                cloud.rotation.y = 0;
                cloud.rotation.z = 0;
                cloud.material.opacity = 0.45;
                cloudParticles.push(cloud);
                scene.add(cloud);
            }
            animate();
        });
    }
    function render() {
        group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
        camera.lookAt( cameraTarget );
        renderer.clear();
        renderer.render( scene, camera );
    }
    function animate() {
        cloudParticles.forEach(p => {
            p.rotation.z -= 0.002;
        });
        requestAnimationFrame( animate );
        render();
    }
    init();
};