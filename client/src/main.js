import Stage from './stage';
import Player from './player';
import Cube from './cube';
import Controller from './controller';
import Stats from './jsm/libs/stats.module.js';
class GameApp {
    constructor(player) {
        this.scene = new THREE.Scene();
        this.stage = new Stage();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.socket = io('/', {path: '/ws/socket.io'});
        this.connected = false;
        this.player = player;
        this.players = new Map();
        this.id = Math.floor(Math.random() * 10000);
    }

    init() {
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setClearColor(0x00aaff, 1.0);
        document.body.appendChild( this.renderer.domElement );
        this.renderer.domElement.addEventListener('click', () => {
            this.renderer.domElement.requestPointerLock();
        });

        this.stage.init(this.scene);

        // 平行光源
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(25, 1000, 25);
        this.scene.add(directionalLight);
        let f = 0x888888;
        this.directionalLight1 = new THREE.DirectionalLight(f);
        this.directionalLight1.position.set(-2500, 100, 2500);
        this.scene.add(this.directionalLight1);
        this.directionalLight2 = new THREE.DirectionalLight(f);
        this.directionalLight2.position.set(2500, 100, -2500);
        this.scene.add(this.directionalLight2);
        this.directionalLight3 = new THREE.DirectionalLight(f);
        this.directionalLight3.position.set(2500, 100, 2500);
        this.scene.add(this.directionalLight3);
        this.directionalLight4 = new THREE.DirectionalLight(f);
        this.directionalLight4.position.set(-2500, 100, -2500);
        this.scene.add(this.directionalLight4);


        // スポットライト光源を作成
        // new THREE.SpotLight(色, 光の強さ, 距離, 角度, ボケ具合, 減衰率)
        const spotLight = new THREE.SpotLight(0xffffff, 2, 40, Math.PI / 2, 1, 0.5);
        spotLight.position.set( 25.0, 35.0, 25.0 );
        this.scene.add(spotLight);

//        this.scene.add(this.player.cube.mesh);
        for (const c of this.player.cubeArray) {
            this.scene.add(c.mesh);
        }
//        this.player.camera.position.set(25.0, 4.0, 25.0);

        this.stats = new Stats();
        // 右上に設定
        // this.stats.getDomElement().style.position = "fixed";
        // this.stats.getDomElement().style.right    = "5px";
        // this.stats.getDomElement().style.top      = "5px";
        document.body.appendChild(this.stats.dom);
    }

    connect() {
        this.socket.emit('connected', {
            clientID: this.id,
            position: this.player.position
        });
        
        this.socket.on('disconnect', () => {});

        this.socket.on('connected', data => {
            if (data.newUser.clientID !== this.id) {
                this.addUser(data.newUser);
            } else {
                data.currentUsers.filter(user => {
                    return !this.players.has(user.clientID);
                }).forEach(user => {
                    this.addUser(user);
                }) 
                this.connected = true;
            }
        });

        this.socket.on('disconnected', data => {
            let target = this.players.get(data);

            this.scene.remove(target.mesh);
            target.geometry.dispose();
            target.material.dispose();

            this.players.delete(data);
        });

        this.socket.on('updatePosition', data => {
            if (data.clientID !== this.id && this.connected) {
                this.updatePosition(data);
            }
        });
    }

    addUser(data) {
        let player = new Cube();
        player.mesh.position.x = data.position.x;
        player.mesh.position.y = data.position.y;
        player.mesh.position.z = data.position.z;
//        this.scene.add(player.mesh);
        for (const c of player.cubeArray) {
            this.scene.add(c.mesh);
        }
        
        this.players.set(data.clientID, player);
    }

    updatePosition(data) {
        let target = this.players.get(data.clientID);
        target.mesh.position.x = data.position.x;
        target.mesh.position.y = data.position.y;
        target.mesh.position.z = data.position.z;
    }

    render() {
        this.renderer.render( this.scene, this.player.camera );
    }
}

function main() {
    const app = new GameApp(new Player(new Controller));
    app.init();
    app.scene.add(app.player.camera);
    app.connect();

    loop();

    function loop() {
        app.stats.update();
        app.player.prevPos = Object.assign({}, app.player.position);
        app.player.update(app.stage);
        if (JSON.stringify(app.player.position) != JSON.stringify(app.player.prevPos)) {
            app.socket.emit('updatePosition', {
                clientID: app.id,
                position: app.player.position
            });
        };

        app.render();
        
        requestAnimationFrame( loop );
    }
}

document.addEventListener('DOMContentLoaded', main);