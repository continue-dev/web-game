import Cube from "./cube";

export default class Player {
    constructor(controller) {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.position = new THREE.Vector3(25.0, 4.0, 25.0);
        this.direction = new THREE.Vector3(0.0, 0.0, 0.1);
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
        this.camera.lookAt(this.position.x, this.position.y, this.position.z);
        if (this.changeCameraFlag) {
            this.camera.position.set(this.position.x + this.direction.x * 0.1, this.position.y + 0.0, this.position.z + this.direction.z * 0.1);
        } else {
            this.camera.position.set(this.position.x + this.direction.x * 30, this.position.y + 1.0, this.position.z + this.direction.z * 30);
        }
        // this.camera.position.y = 2.0; // Prevent take-off...
    }
}