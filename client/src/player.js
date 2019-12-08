export default class Player {
    constructor(controller) {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.angle = 180.0;
        this.target = new THREE.Vector3(0.0, 0.0, 1.0);
        this.controller = controller;
        this.controller.handleKeyInput();
        this.controller.handleMouseMove(this);
        this.yVelocity = 0.0;
        this.gravity = -0.0015;
    }

    update(stage) {
        if (this.controller.moveKeys.get(37) || this.controller.moveKeys.get(65)) { // Left
            this.camera.translateX(-0.1);
        }
        if (this.controller.moveKeys.get(39) || this.controller.moveKeys.get(68)) { // Right
            this.camera.translateX(0.1);
        }
        if (this.controller.moveKeys.get(38) || this.controller.moveKeys.get(87)) { // Forward
            this.camera.translateZ(-0.1);
            // this.camera.translateY(2.0 - this.camera.position.y);
        }
        if (this.controller.moveKeys.get(40) || this.controller.moveKeys.get(83)) { // Back
            this.camera.translateZ(0.1);
            // this.camera.translateY(2.0 - this.camera.position.y);
        }
        this.yVelocity += this.gravity;
        this.camera.position.y += this.yVelocity;

        // プレイヤーの位置をインデックスにして床との当たり判定
        const x = Math.round(this.camera.position.x);
        const y = Math.round((this.camera.position.y - 2.0) / 10);
        const z = Math.round(this.camera.position.z);

        if (0 < x && x < stage.cubes[0].length &&
            0 < z && z < stage.cubes[0][0].length) {
            if (this.camera.position.x < stage.cubes[y][x][z].mesh.position.x + 1.0 &&
                this.camera.position.x > stage.cubes[y][x][z].mesh.position.x - 1.0 &&
                this.camera.position.z < stage.cubes[y][x][z].mesh.position.z + 1.0 &&
                this.camera.position.z > stage.cubes[y][x][z].mesh.position.z - 1.0 &&
                this.camera.position.y > stage.cubes[y][x][z].mesh.position.y + 1.0 &&
                this.camera.position.y < stage.cubes[y][x][z].mesh.position.y + 9.0 ) {
                this.gravity = -0.0015;
                this.yVelocity += this.gravity;
                this.camera.position.y += this.yVelocity;
                this.jumping = false;
            }

            if (this.camera.position.x < stage.cubes[y][x][z].mesh.position.x + 1.0 &&
                this.camera.position.x > stage.cubes[y][x][z].mesh.position.x - 1.0 &&
                this.camera.position.y <= stage.cubes[y][x][z].mesh.position.y + 1.0 &&
                this.camera.position.y > stage.cubes[y][x][z].mesh.position.y &&
                this.camera.position.z < stage.cubes[y][x][z].mesh.position.z + 1.0 &&
                this.camera.position.z > stage.cubes[y][x][z].mesh.position.z - 1.0 ) {
                this.yVelocity = 0.0;
                this.camera.position.y = stage.cubes[y][x][z].mesh.position.y + 1.0;
                this.jumping = true;

                if (this.controller.moveKeys.get(32)) {
                    if (this.jumping) {
                        this.gravity = 0.0015;
                        this.yVelocity = 0.1;
                        this.camera.position.y += this.yVelocity;
                    }
                }
            }
        }

        for (const cube of stage.stairs) {
            if (this.camera.position.x < cube.mesh.position.x + 1.0 &&
                this.camera.position.x > cube.mesh.position.x - 1.0 &&
                this.camera.position.y <= cube.mesh.position.y + 1.0 &&
                this.camera.position.y > cube.mesh.position.y &&
                this.camera.position.z < cube.mesh.position.z + 1.0 &&
                this.camera.position.z > cube.mesh.position.z - 1.0 ) {
                this.yVelocity = 0.0;
                this.camera.position.y = cube.mesh.position.y + 1.0;
                this.jumping = true;

                if (this.controller.moveKeys.get(32)) {
                    if (this.jumping) {
                        this.gravity = 0.0015;
                        this.yVelocity = 0.1;
                        this.camera.position.y += this.yVelocity;
                    }
                }
            }
        }

        for (const cube of stage.blocks) {
            if (this.camera.position.x < cube.mesh.position.x + 1.2 &&
                this.camera.position.x > cube.mesh.position.x &&
                this.camera.position.y < cube.mesh.position.y + 1.0 &&
                this.camera.position.y > cube.mesh.position.y - 1.0 &&
                this.camera.position.z < cube.mesh.position.z + 1.0 &&
                this.camera.position.z > cube.mesh.position.z - 1.0 ) {
                this.camera.position.x = cube.mesh.position.x + 1.2;
            }
            if (this.camera.position.x < cube.mesh.position.x &&
                this.camera.position.x > cube.mesh.position.x - 1.2 &&
                this.camera.position.y < cube.mesh.position.y + 1.0 &&
                this.camera.position.y > cube.mesh.position.y - 1.0 &&
                this.camera.position.z < cube.mesh.position.z + 1.0 &&
                this.camera.position.z > cube.mesh.position.z - 1.0 ) {
                this.camera.position.x = cube.mesh.position.x - 1.2;
            }
            if (this.camera.position.x < cube.mesh.position.x + 1.0 &&
                this.camera.position.x > cube.mesh.position.x - 1.0 &&
                this.camera.position.y < cube.mesh.position.y + 1.0 &&
                this.camera.position.y > cube.mesh.position.y - 1.0 &&
                this.camera.position.z < cube.mesh.position.z + 1.2 &&
                this.camera.position.z > cube.mesh.position.z) {
                this.camera.position.z = cube.mesh.position.z + 1.2;
            }
            if (this.camera.position.x < cube.mesh.position.x + 1.0 &&
                this.camera.position.x > cube.mesh.position.x - 1.0 &&
                this.camera.position.y < cube.mesh.position.y + 1.0 &&
                this.camera.position.y > cube.mesh.position.y - 1.0 &&
                this.camera.position.z < cube.mesh.position.z &&
                this.camera.position.z > cube.mesh.position.z - 1.2) {
                this.camera.position.z = cube.mesh.position.z - 1.2;
            }

        }
        // this.camera.position.y = 2.0; // Prevent take-off...
    }
}