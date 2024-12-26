const path = new THREE.Path();

path.moveTo(0.3, 1.5);
path.lineTo(0.9, 2.2);
path.lineTo(1.4, 1.7);
path.lineTo(1.9, 2.2);
path.lineTo(2.5, 1.5);
path.lineTo(1.4, 0.3);
path.lineTo(0.3, 1.5);

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
