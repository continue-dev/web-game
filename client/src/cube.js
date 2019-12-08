export default class Cube {
    constructor() {
        this.geometry = new THREE.BoxGeometry( 0.9, 0.9, 0.9 );
        this.material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
}
