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
    // // let texture = new THREE.TextureLoader().load( '../images/7.jpg' );
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
let scene, camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 5000;
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);

    directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
    flash.position.set(200,300,100);
    scene.add(flash);

    renderer = new THREE.WebGLRenderer();
    scene.fog = new THREE.FogExp2(0x1c1c2a, 0.002);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    rainGeo = new THREE.Geometry();
    for(let i =0;i<rainCount;i++) {
        rainDrop = new THREE.Vector3(
            Math.random()*400 - 200,
            Math.random()*500 - 250,
            Math.random()*400 - 200
        );
        rainDrop.velocity = {};
        rainDrop.velocity = 0;
        rainGeo.vertices.push(rainDrop);
    }
    rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.1,
        transparent: true
    });
    rain = new THREE.Points(rainGeo, rainMaterial);
    scene.add(rain);

    let loader = new THREE.TextureLoader();
    loader.load("images/smoke.png", function (texture) {
        cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });

        for(let p=0;p<25;p++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
                Math.random()*800 - 400,
                500,
                Math.random()*500 - 450
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random()*360;
            cloud.material.opacity = 0.6;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
        animate();
    });
    let listener = new THREE.AudioListener();
    camera.add( listener );
    let sound = new THREE.Audio( listener );
    let audioLoader = new THREE.AudioLoader();
    audioLoader.load( 'sounds/neizvesten-zvuk-grozy.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.5 );
        sound.play();
    });
}
function animate() {
    cloudParticles.forEach(p => {
        p.rotation.z -= 0.002;
    });
    rainGeo.vertices.forEach(p=> {
       p.velocity -= 0.1 + Math.random() * 0.1;
       p.y += p.velocity;
       if(p.y < -200) {
           p.y = 200;
           p.velocity = 0;
       }
    });
    rainGeo.verticesNeedUpdate = true;
    rain.rotation.y += 0.002;
    if(Math.random() > 0.93 || flash.power > 100) {
        if(flash.power < 100) {
            flash.position.set(
                Math.random()*400,
                300 + Math.random()*200,
                100
            );
        }
        flash.power = 50 + Math.random() * 500;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();