import Cube from "./cube";

const quin = {"voxel":[{"x":1,"y":0,"z":2,"m":15},{"x":1,"y":0,"z":0,"m":15},{"x":1,"y":1,"z":2,"m":14},{"x":1,"y":1,"z":0,"m":14},{"x":1,"y":2,"z":2,"m":14},{"x":1,"y":3,"z":3,"m":13},{"x":2,"y":3,"z":-1,"m":13},{"x":1,"y":3,"z":-1,"m":13},{"x":1,"y":3,"z":1,"m":14},{"x":2,"y":3,"z":1,"m":14},{"x":1,"y":4,"z":2,"m":14},{"x":1,"y":4,"z":1,"m":14},{"x":1,"y":4,"z":0,"m":14},{"x":2,"y":4,"z":1,"m":14},{"x":2,"y":4,"z":2,"m":14},{"x":2,"y":4,"z":0,"m":14},{"x":2,"y":3,"z":2,"m":13},{"x":2,"y":3,"z":0,"m":13},{"x":3,"y":2,"z":-1,"m":13},{"x":2,"y":2,"z":-1,"m":13},{"x":3,"y":2,"z":0,"m":13},{"x":3,"y":2,"z":1,"m":13},{"x":3,"y":2,"z":2,"m":13},{"x":3,"y":2,"z":3,"m":13},{"x":2,"y":3,"z":3,"m":13},{"x":2,"y":2,"z":3,"m":13},{"x":1,"y":2,"z":3,"m":13},{"x":0,"y":2,"z":3,"m":13},{"x":2,"y":2,"z":4,"m":13},{"x":1,"y":2,"z":4,"m":13},{"x":0,"y":2,"z":2,"m":13},{"x":0,"y":2,"z":1,"m":13},{"x":0,"y":2,"z":0,"m":13},{"x":1,"y":2,"z":0,"m":14},{"x":1,"y":2,"z":-1,"m":13},{"x":2,"y":2,"z":-2,"m":13},{"x":1,"y":2,"z":-2,"m":13},{"x":2,"y":5,"z":2,"m":13},{"x":2,"y":5,"z":0,"m":13},{"x":1,"y":5,"z":0,"m":14},{"x":1,"y":5,"z":1,"m":14},{"x":1,"y":5,"z":2,"m":14},{"x":1,"y":6,"z":1,"m":14},{"x":2,"y":6,"z":2,"m":14},{"x":2,"y":6,"z":1,"m":14},{"x":2,"y":6,"z":0,"m":14},{"x":1,"y":6,"z":0,"m":14},{"x":1,"y":6,"z":2,"m":14},{"x":1,"y":6,"z":3,"m":14},{"x":1,"y":6,"z":-1,"m":14},{"x":1,"y":6,"z":4,"m":13},{"x":1,"y":6,"z":-2,"m":13},{"x":1,"y":6,"z":-3,"m":14},{"x":1,"y":6,"z":5,"m":14},{"x":1,"y":7,"z":1,"m":14},{"x":1,"y":8,"z":1,"m":14},{"x":1,"y":8,"z":0,"m":14},{"x":1,"y":8,"z":-1,"m":14},{"x":1,"y":8,"z":2,"m":14},{"x":1,"y":8,"z":3,"m":14},{"x":2,"y":8,"z":3,"m":14},{"x":2,"y":8,"z":2,"m":14},{"x":2,"y":8,"z":1,"m":14},{"x":2,"y":8,"z":0,"m":14},{"x":2,"y":8,"z":-1,"m":14},{"x":3,"y":8,"z":0,"m":14},{"x":3,"y":8,"z":1,"m":14},{"x":3,"y":8,"z":2,"m":14},{"x":3,"y":9,"z":2,"m":14},{"x":3,"y":9,"z":1,"m":14},{"x":3,"y":9,"z":0,"m":14},{"x":3,"y":10,"z":2,"m":14},{"x":3,"y":10,"z":1,"m":14},{"x":3,"y":10,"z":0,"m":14},{"x":2,"y":9,"z":-1,"m":14},{"x":2,"y":9,"z":0,"m":14},{"x":2,"y":9,"z":1,"m":14},{"x":2,"y":9,"z":2,"m":14},{"x":2,"y":9,"z":3,"m":14},{"x":1,"y":9,"z":3,"m":14},{"x":1,"y":9,"z":2,"m":14},{"x":1,"y":9,"z":1,"m":14},{"x":1,"y":9,"z":0,"m":14},{"x":1,"y":9,"z":-1,"m":14},{"x":2,"y":10,"z":-1,"m":14},{"x":2,"y":10,"z":0,"m":14},{"x":2,"y":10,"z":1,"m":14},{"x":2,"y":10,"z":2,"m":14},{"x":2,"y":10,"z":3,"m":14},{"x":1,"y":10,"z":3,"m":14},{"x":1,"y":10,"z":2,"m":14},{"x":1,"y":10,"z":1,"m":14},{"x":1,"y":10,"z":0,"m":14},{"x":1,"y":10,"z":-1,"m":14},{"x":0,"y":10,"z":-1,"m":14},{"x":0,"y":10,"z":0,"m":14},{"x":0,"y":10,"z":1,"m":14},{"x":0,"y":10,"z":2,"m":14},{"x":0,"y":10,"z":3,"m":14},{"x":0,"y":9,"z":3,"m":14},{"x":0,"y":9,"z":2,"m":14},{"x":0,"y":9,"z":1,"m":14},{"x":0,"y":9,"z":0,"m":14},{"x":0,"y":9,"z":-1,"m":14},{"x":0,"y":8,"z":-1,"m":14},{"x":0,"y":8,"z":0,"m":14},{"x":0,"y":8,"z":1,"m":14},{"x":0,"y":8,"z":2,"m":14},{"x":0,"y":8,"z":3,"m":14},{"x":3,"y":9,"z":3,"m":8},{"x":3,"y":9,"z":-1,"m":8},{"x":3,"y":8,"z":3,"m":12},{"x":3,"y":8,"z":-1,"m":12},{"x":3,"y":10,"z":3,"m":14},{"x":3,"y":10,"z":-1,"m":14},{"x":4,"y":10,"z":3,"m":3},{"x":4,"y":10,"z":-1,"m":3},{"x":4,"y":11,"z":-1,"m":3},{"x":4,"y":11,"z":3,"m":3},{"x":4,"y":11,"z":2,"m":3},{"x":4,"y":11,"z":0,"m":3},{"x":3,"y":10,"z":-2,"m":3},{"x":2,"y":10,"z":-2,"m":3},{"x":1,"y":10,"z":-2,"m":3},{"x":0,"y":10,"z":-2,"m":3},{"x":0,"y":9,"z":-2,"m":3},{"x":1,"y":9,"z":-2,"m":3},{"x":2,"y":9,"z":-2,"m":3},{"x":3,"y":9,"z":-2,"m":3},{"x":3,"y":8,"z":-2,"m":3},{"x":1,"y":8,"z":-2,"m":3},{"x":0,"y":8,"z":-2,"m":3},{"x":3,"y":11,"z":-2,"m":3},{"x":3,"y":11,"z":-1,"m":3},{"x":3,"y":11,"z":0,"m":3},{"x":3,"y":11,"z":1,"m":3},{"x":3,"y":11,"z":2,"m":3},{"x":3,"y":11,"z":3,"m":3},{"x":2,"y":11,"z":3,"m":3},{"x":2,"y":11,"z":2,"m":3},{"x":2,"y":11,"z":1,"m":3},{"x":2,"y":11,"z":0,"m":3},{"x":2,"y":11,"z":-1,"m":3},{"x":2,"y":11,"z":-2,"m":3},{"x":1,"y":11,"z":3,"m":3},{"x":1,"y":11,"z":2,"m":3},{"x":1,"y":11,"z":1,"m":3},{"x":1,"y":11,"z":0,"m":3},{"x":1,"y":11,"z":-1,"m":3},{"x":1,"y":11,"z":-2,"m":3},{"x":0,"y":11,"z":3,"m":3},{"x":0,"y":11,"z":2,"m":3},{"x":0,"y":11,"z":1,"m":3},{"x":0,"y":11,"z":0,"m":3},{"x":0,"y":11,"z":-1,"m":3},{"x":0,"y":11,"z":-2,"m":3},{"x":0,"y":11,"z":4,"m":3},{"x":1,"y":11,"z":4,"m":3},{"x":2,"y":11,"z":4,"m":3},{"x":3,"y":11,"z":4,"m":3},{"x":3,"y":10,"z":4,"m":3},{"x":3,"y":9,"z":4,"m":3},{"x":3,"y":8,"z":4,"m":3},{"x":2,"y":10,"z":4,"m":3},{"x":2,"y":9,"z":4,"m":3},{"x":1,"y":10,"z":4,"m":3},{"x":1,"y":9,"z":4,"m":3},{"x":1,"y":8,"z":4,"m":3},{"x":0,"y":10,"z":4,"m":3},{"x":0,"y":9,"z":4,"m":3},{"x":0,"y":8,"z":4,"m":3},{"x":4,"y":10,"z":4,"m":3},{"x":4,"y":9,"z":4,"m":3},{"x":4,"y":8,"z":4,"m":3},{"x":4,"y":7,"z":4,"m":3},{"x":4,"y":10,"z":-2,"m":3},{"x":4,"y":9,"z":-2,"m":3},{"x":4,"y":8,"z":-2,"m":3},{"x":4,"y":7,"z":-2,"m":3},{"x":3,"y":8,"z":5,"m":3},{"x":3,"y":9,"z":5,"m":3},{"x":3,"y":10,"z":5,"m":3},{"x":3,"y":11,"z":5,"m":3},{"x":2,"y":9,"z":5,"m":14},{"x":2,"y":11,"z":5,"m":3},{"x":2,"y":10,"z":5,"m":3},{"x":1,"y":10,"z":5,"m":3},{"x":1,"y":9,"z":5,"m":3},{"x":1,"y":8,"z":5,"m":3},{"x":0,"y":7,"z":4,"m":3},{"x":1,"y":12,"z":4,"m":3},{"x":2,"y":12,"z":4,"m":3},{"x":3,"y":8,"z":-3,"m":3},{"x":3,"y":9,"z":-3,"m":3},{"x":3,"y":10,"z":-3,"m":3},{"x":3,"y":11,"z":-3,"m":3},{"x":2,"y":11,"z":-3,"m":3},{"x":2,"y":10,"z":-3,"m":3},{"x":1,"y":10,"z":-3,"m":3},{"x":1,"y":9,"z":-3,"m":3},{"x":1,"y":8,"z":-3,"m":3},{"x":2,"y":9,"z":-3,"m":14},{"x":0,"y":7,"z":-2,"m":3},{"x":1,"y":12,"z":-2,"m":3},{"x":2,"y":12,"z":-2,"m":3},{"x":3,"y":12,"z":3,"m":3},{"x":3,"y":12,"z":2,"m":3},{"x":3,"y":12,"z":1,"m":3},{"x":3,"y":12,"z":0,"m":3},{"x":3,"y":12,"z":-1,"m":3},{"x":2,"y":12,"z":-1,"m":3},{"x":2,"y":12,"z":0,"m":3},{"x":2,"y":12,"z":1,"m":3},{"x":2,"y":12,"z":3,"m":3},{"x":2,"y":12,"z":2,"m":3},{"x":1,"y":12,"z":3,"m":3},{"x":1,"y":12,"z":2,"m":3},{"x":1,"y":12,"z":1,"m":3},{"x":1,"y":12,"z":0,"m":3},{"x":1,"y":12,"z":-1,"m":3},{"x":-1,"y":10,"z":-1,"m":3},{"x":-1,"y":10,"z":0,"m":3},{"x":-1,"y":10,"z":1,"m":3},{"x":-1,"y":10,"z":2,"m":3},{"x":-1,"y":10,"z":3,"m":3},{"x":-1,"y":9,"z":3,"m":3},{"x":-1,"y":9,"z":2,"m":3},{"x":-1,"y":9,"z":1,"m":3},{"x":-1,"y":9,"z":0,"m":3},{"x":-1,"y":9,"z":-1,"m":3},{"x":-1,"y":8,"z":-1,"m":3},{"x":-1,"y":8,"z":0,"m":3},{"x":-1,"y":8,"z":1,"m":3},{"x":-1,"y":8,"z":2,"m":3},{"x":-1,"y":8,"z":3,"m":3},{"x":2,"y":13,"z":-1,"m":3},{"x":2,"y":13,"z":3,"m":3},{"x":2,"y":13,"z":2,"m":3},{"x":2,"y":13,"z":0,"m":3},{"x":3,"y":13,"z":-1,"m":13},{"x":3,"y":13,"z":-2,"m":13},{"x":4,"y":13,"z":-2,"m":13},{"x":4,"y":14,"z":-2,"m":13},{"x":3,"y":13,"z":3,"m":13},{"x":3,"y":13,"z":4,"m":13},{"x":4,"y":13,"z":4,"m":13},{"x":4,"y":14,"z":4,"m":13},{"x":-1,"y":7,"z":1,"m":3},{"x":-1,"y":7,"z":2,"m":3},{"x":-1,"y":7,"z":0,"m":3},{"x":0,"y":2,"z":-1,"m":13},{"x":1,"y":3,"z":0,"m":13},{"x":1,"y":3,"z":2,"m":13},{"x":-1,"y":2,"z":1,"m":13},{"x":-2,"y":2,"z":1,"m":13},{"x":-2,"y":1,"z":1,"m":13},{"x":-3,"y":1,"z":1,"m":13},{"x":-4,"y":1,"z":1,"m":13},{"x":-5,"y":2,"z":1,"m":13},{"x":-5,"y":3,"z":1,"m":13},{"x":-4,"y":4,"z":1,"m":13},{"x":-3,"y":4,"z":1,"m":13},{"x":2,"y":5,"z":1,"m":13}],"material":[{"r":1,"g":0,"b":0,"a":1},{"r":0,"g":1,"b":0,"a":1},{"r":0,"g":0,"b":1,"a":1},{"r":1,"g":1,"b":0,"a":1},{"r":0,"g":1,"b":1,"a":1},{"r":1,"g":0,"b":1,"a":1},{"r":1,"g":1,"b":1,"a":1},{"r":0.4666666666666667,"g":0.4666666666666667,"b":0.4666666666666667,"a":1},{"r":0,"g":0,"b":0,"a":1},{"r":0.4666666666666667,"g":0,"b":0,"a":1},{"r":0,"g":0.4666666666666667,"b":0,"a":1},{"r":0,"g":0,"b":0.4666666666666667,"a":1},{"r":1,"g":0.6,"b":0.6,"a":1},{"r":0.3333333333333333,"g":0.3333333333333333,"b":0.3333333333333333,"a":1},{"r":1,"g":0.8,"b":0.6,"a":1},{"r":0.4,"g":0.2,"b":0,"a":1}]};


export default class Player {
    constructor(controller) {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.position = new THREE.Vector3(25.0, 4.0, 25.0);
        this.direction = new THREE.Vector3(0.0, 0.0, 0.1);

        this.color16 = [
            "#ffffff","#ffffff","#ffffff","#ffffff",
            "#ffffff","#ffffff","#ffffff","#ffffff",
            "#ffffff","#ffffff","#ffffff","#ffffff",
            "#ffffff","#ffffff","#ffffff","#ffffff",
        ];
        this.material16 = [];
        for (const q of quin.voxel ) {
            let ffffff = '#';
            const hex6 = [
                quin.material[q.m].r,
                quin.material[q.m].r,
                quin.material[q.m].g,
                quin.material[q.m].g,
                quin.material[q.m].b,
                quin.material[q.m].b
            ];
            for (let l = 0; l < 6; ++l) {
                //const hex = q.material[q.m];
                const hex = Math.floor(hex6[l] * 15);
                let f1 = hex;
                if (hex == 15) {f1 = 'f';}
                if (hex == 14) {f1 = 'e';}
                if (hex == 13) {f1 = 'd';}
                if (hex == 12) {f1 = 'c';}
                if (hex == 11) {f1 = 'b';}
                if (hex == 10) {f1 = 'a';}
    
                ffffff += f1 + '';
            }
            this.color16[q.m] = ffffff;
        }

        for (const c of this.color16) {
            this.material16.push( new THREE.MeshLambertMaterial({ color: c }) );
        }


        this.cubeArray = [];
        for (const q of quin.voxel ) {
            const c = new Cube();
            c.mesh.scale.set(0.1, 0.1, 0.1);
            c.mesh.position.set(0.1 * q.x + 25.0, 0.1 * q.y, 0.1 * q.z + 25.0);
            c.mesh.material = this.material16[q.m]; //new THREE.MeshLambertMaterial({ color: color });
            this.cubeArray.push(c);
        }
        this.cube = new Cube();
        this.cube.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.angle = 0.0;
        this.target = new THREE.Vector3(0.0, 0.0, 1.0);
        this.controller = controller;
        this.controller.handleKeyInput();
        this.controller.handleMouseMove(this);
        this.yVelocity = 0.0;
        this.gravity = -0.0015;
        this.changeCameraFlag = false;
    }

    update(stage) {
        if (this.controller.moveKeys.get(37) || this.controller.moveKeys.get(65)) { // Left
            this.angle += 1.0;
            this.direction.x = Math.sin(Math.PI / 180.0 * this.angle) * 0.1;
            this.direction.z = Math.cos(Math.PI / 180.0 * this.angle) * 0.1;
//            this.camera.translateX(-0.1);
        }
        if (this.controller.moveKeys.get(39) || this.controller.moveKeys.get(68)) { // Right
            this.angle -= 1.0;
            this.direction.x = Math.sin(Math.PI / 180.0 * this.angle) * 0.1;
            this.direction.z = Math.cos(Math.PI / 180.0 * this.angle) * 0.1;
//            this.camera.translateX(0.1);
        }
        if (this.controller.moveKeys.get(38) || this.controller.moveKeys.get(87)) { // Forward
            // this.camera.translateZ(-0.1);
            this.position.x -= this.direction.x;
            this.position.z -= this.direction.z;
            // this.camera.translateY(2.0 - this.camera.position.y);
        }
        if (this.controller.moveKeys.get(40) || this.controller.moveKeys.get(83)) { // Back
            // this.camera.translateZ(0.1);
            this.position.x += this.direction.x;
            this.position.z += this.direction.z;
            // this.camera.translateY(2.0 - this.camera.position.y);
        }
        if (this.controller.moveKeys.get(84)) {
            this.changeCameraFlag = true;
        }
        if (this.controller.moveKeys.get(89)) {
            this.changeCameraFlag = false;
        }
        this.yVelocity += this.gravity;
        this.camera.position.y += this.yVelocity;
        this.position.y += this.yVelocity;

        // プレイヤーの位置をインデックスにして床との当たり判定
        const x = Math.round(this.position.x);
        const y = Math.round((this.position.y - 2.0) / 10);
        const z = Math.round(this.position.z);

        if (0 < x && x < stage.cubes[0].length &&
            0 < z && z < stage.cubes[0][0].length) {
            if (this.position.x < stage.cubes[y][x][z].mesh.position.x + 1.0 &&
                this.position.x > stage.cubes[y][x][z].mesh.position.x - 1.0 &&
                this.position.z < stage.cubes[y][x][z].mesh.position.z + 1.0 &&
                this.position.z > stage.cubes[y][x][z].mesh.position.z - 1.0 &&
                this.position.y > stage.cubes[y][x][z].mesh.position.y + 1.0 &&
                this.position.y < stage.cubes[y][x][z].mesh.position.y + 9.0 ) {
                this.gravity = -0.0015;
                this.yVelocity += this.gravity;
                this.position.y += this.yVelocity;
                this.jumping = false;
            }

            if (this.position.x < stage.cubes[y][x][z].mesh.position.x + 1.0 &&
                this.position.x > stage.cubes[y][x][z].mesh.position.x - 1.0 &&
                this.position.y <= stage.cubes[y][x][z].mesh.position.y + 1.0 &&
                this.position.y > stage.cubes[y][x][z].mesh.position.y &&
                this.position.z < stage.cubes[y][x][z].mesh.position.z + 1.0 &&
                this.position.z > stage.cubes[y][x][z].mesh.position.z - 1.0 ) {
                this.yVelocity = 0.0;
                this.position.y = stage.cubes[y][x][z].mesh.position.y + 1.0;
                this.jumping = true;

                if (this.controller.moveKeys.get(32)) {
                    if (this.jumping) {
                        this.gravity = 0.0015;
                        this.yVelocity = 0.1;
                        this.camera.position.y += this.yVelocity;
                        this.position.y += this.yVelocity;
                    }
                }
            }
        }

        for (const cube of stage.stairs) {
            if (this.position.x < cube.mesh.position.x + 1.0 &&
                this.position.x > cube.mesh.position.x - 1.0 &&
                this.position.y <= cube.mesh.position.y + 1.0 &&
                this.position.y > cube.mesh.position.y &&
                this.position.z < cube.mesh.position.z + 1.0 &&
                this.position.z > cube.mesh.position.z - 1.0 ) {
                this.yVelocity = 0.0;
                this.position.y = cube.mesh.position.y + 1.0;
                this.jumping = true;

                if (this.controller.moveKeys.get(32)) {
                    if (this.jumping) {
                        this.gravity = 0.0015;
                        this.yVelocity = 0.1;
                        this.camera.position.y += this.yVelocity;
                        this.position.y += this.yVelocity;
                    }
                }
            }
        }

        for (const cube of stage.blocks) {
            if (this.position.x < cube.mesh.position.x + 1.2 &&
                this.position.x > cube.mesh.position.x &&
                this.position.y < cube.mesh.position.y + 1.0 &&
                this.position.y > cube.mesh.position.y - 1.0 &&
                this.position.z < cube.mesh.position.z + 1.0 &&
                this.position.z > cube.mesh.position.z - 1.0 ) {
                this.position.x = cube.mesh.position.x + 1.2;
            }
            if (this.position.x < cube.mesh.position.x &&
                this.position.x > cube.mesh.position.x - 1.2 &&
                this.position.y < cube.mesh.position.y + 1.0 &&
                this.position.y > cube.mesh.position.y - 1.0 &&
                this.position.z < cube.mesh.position.z + 1.0 &&
                this.position.z > cube.mesh.position.z - 1.0 ) {
                this.position.x = cube.mesh.position.x - 1.2;
            }
            if (this.position.x < cube.mesh.position.x + 1.0 &&
                this.position.x > cube.mesh.position.x - 1.0 &&
                this.position.y < cube.mesh.position.y + 1.0 &&
                this.position.y > cube.mesh.position.y - 1.0 &&
                this.position.z < cube.mesh.position.z + 1.2 &&
                this.position.z > cube.mesh.position.z) {
                this.position.z = cube.mesh.position.z + 1.2;
            }
            if (this.position.x < cube.mesh.position.x + 1.0 &&
                this.position.x > cube.mesh.position.x - 1.0 &&
                this.position.y < cube.mesh.position.y + 1.0 &&
                this.position.y > cube.mesh.position.y - 1.0 &&
                this.position.z < cube.mesh.position.z &&
                this.position.z > cube.mesh.position.z - 1.2) {
                this.position.z = cube.mesh.position.z - 1.2;
            }

        }
        this.cube.mesh.position.set(this.position.x, this.position.y, this.position.z);


        let i = 0;
        for (const q of quin.voxel ) {
            this.cubeArray[i].mesh.position.set(
                this.position.x + 0.1 * q.x,
                this.position.y + 0.1 * q.y - 0.4,
                this.position.z + 0.1 * q.z
            );
            ++i;
        }
        this.camera.lookAt(this.position.x, this.position.y, this.position.z);
        if (this.changeCameraFlag) {
            this.camera.position.set(this.position.x + this.direction.x * 0.1, this.position.y + 0.0, this.position.z + this.direction.z * 0.1);
        } else {
            this.camera.position.set(this.position.x + this.direction.x * 30, this.position.y + 1.0, this.position.z + this.direction.z * 30);
        }
        // this.camera.position.y = 2.0; // Prevent take-off...
    }
}