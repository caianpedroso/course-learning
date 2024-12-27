const path = new THREE.Path();

path.moveTo(0.3, 1.5);
path.quadraticCurveTo(0.3,2.2,0.9, 2.2);
path.quadraticCurveTo(1.3, 2.2,1.4, 1.7);
path.quadraticCurveTo(1.5, 2.2,1.9, 2.2);
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
path.quadraticCurveTo(2.5,1.0, 1.4, 0.3);
path.quadraticCurveTo(0.3, 1.0,0.3, 1.5);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(path.getPoints());

const material = new THREE.LineBasicMaterial(
  {
    color: 0xFFFFFF,
  }
);

const draw = new THREE.Line(geometry, material);

scene.add(draw);

renderer.setAnimationLoop(() => {
  x3.tick();

  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
