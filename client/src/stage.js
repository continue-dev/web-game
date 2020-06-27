import Cube from './cube';

const MAX = 50;

export default class Stage {
    init(scene) {
        this.cubes = [];
        for (let y = 0; y < 4; ++y) {
            const array21 = [];
            for (let x = 0; x < MAX; ++x) {
                let index = 0;
                const array = [];
                for (let z = 0; z < MAX; ++z) {
                    array.push( new Cube() );
                    array[index].mesh.position.x = x;
                    array[index].mesh.position.y = y * 10.0;
                    array[index].mesh.position.z = z;
                    array[index].mesh.material = new THREE.MeshLambertMaterial({ color: 0x664422 });
                    // 3D空間にメッシュを追加
                    scene.add( array[index].mesh );
                    ++index;
                }
                array21.push( array );
            }
            this.cubes.push( array21 );
        }
/*        // 2階
        for (let x = 0; x < MAX; ++x) {
            for (let z = 0; z < MAX; ++z) {
                this.cubes.push( new Cube() );
                this.cubes[this.cubes.length - 1].mesh.position.x = x;
                this.cubes[this.cubes.length - 1].mesh.position.y = 10.0;
                this.cubes[this.cubes.length - 1].mesh.position.z = z;
                // 3D空間にメッシュを追加
                scene.add( this.cubes[this.cubes.length - 1].mesh );
            }
        }

        // 3階
        for (let x = 0; x < MAX; ++x) {
            for (let z = 0; z < MAX; ++z) {
                this.cubes.push( new Cube() );
                this.cubes[this.cubes.length - 1].mesh.position.x = x * 1.2;
                this.cubes[this.cubes.length - 1].mesh.position.y = 20.0;
                this.cubes[this.cubes.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.cubes[this.cubes.length - 1].mesh );
            }
        }

        // 4階
        for (let x = 0; x < MAX; ++x) {
            for (let z = 0; z < MAX; ++z) {
                this.cubes.push( new Cube() );
                this.cubes[this.cubes.length - 1].mesh.position.x = x * 1.2;
                this.cubes[this.cubes.length - 1].mesh.position.y = 30.0;
                this.cubes[this.cubes.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.cubes[this.cubes.length - 1].mesh );
            }
        }
*/
        this.stairs = [];
        // 1階から2階
        for (let x = 30; x < 32; ++x) {
            for (let z = 30; z < 32; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 2.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 28; x < 30; ++x) {
            for (let z = 28; z < 30; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 5.0;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 26; x < 28; ++x) {
            for (let z = 26; z < 28; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 7.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }

        // 2階から3階
        for (let x = 30; x < 32; ++x) {
            for (let z = 30; z < 32; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 12.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 28; x < 30; ++x) {
            for (let z = 28; z < 30; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 15.0;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 26; x < 28; ++x) {
            for (let z = 26; z < 28; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 17.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }

        // 3階から4階
        for (let x = 30; x < 32; ++x) {
            for (let z = 30; z < 32; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 22.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 28; x < 30; ++x) {
            for (let z = 28; z < 30; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 25.0;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }
        for (let x = 26; x < 28; ++x) {
            for (let z = 26; z < 28; ++z) {
                this.stairs.push( new Cube() );
                this.stairs[this.stairs.length - 1].mesh.position.x = x * 1.2;
                this.stairs[this.stairs.length - 1].mesh.position.y = 27.5;
                this.stairs[this.stairs.length - 1].mesh.position.z = z * 1.2;
                // 3D空間にメッシュを追加
                scene.add( this.stairs[this.stairs.length - 1].mesh );
            }
        }

        // 障害物
        this.blocks = [];
        for (let xx = 0; xx < 2; ++xx) {
            for (let zz = 0; zz < 2; ++zz) {
                for (let x = 0; x < 3; ++x) {
                    for (let y = 0; y < 3; ++y) {
                        for (let z = 0; z < 3; ++z) {
                            this.blocks.push( new Cube() );
                            this.blocks[this.blocks.length - 1].mesh.position.x = 10 * 1.2 + x * 1.2 + xx * 25 * 1.2;
                            this.blocks[this.blocks.length - 1].mesh.position.y = 1.2 + y * 1.2;
                            this.blocks[this.blocks.length - 1].mesh.position.z = 10 * 1.2 + z * 1.2 + zz * 25 * 1.2;
                            this.blocks[this.blocks.length - 1].mesh.material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

                            scene.add(this.blocks[this.blocks.length - 1].mesh);
                        }
                    }
                }
            }
        }        
    }
}