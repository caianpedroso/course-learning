const path = new THREE.Path();

path.moveTo(1, 3);
path.bezierCurveTo(3, 4, 5,5, 8, 3);

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
