const material = new THREE.MeshLambertMaterial(
  { color: 0x348feb },
);

const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(
    1, 1, 1
  ),
  material
);

scene.add(cube);

const cicle = new THREE.Mesh(
  new THREE.CircleBufferGeometry(
    0.5, 20
  ),
  material
);
cicle.position.x = -2;
cicle.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(cicle);

const cone = new THREE.Mesh(
  new THREE.ConeBufferGeometry(
    0.3, 0.5
  ),
  material
);
cone.position.x = -2;
cone.position.y = 2;
scene.add(cone);

x3.add(cone, { label: 'cone'});
x3.add(cicle, { label: 'circle'});
x3.add(cube, { label: 'cube'});

renderer.setAnimationLoop(() => {
  x3.tick();

  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
