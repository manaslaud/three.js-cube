// Scene Mesh Camera Renderer


//Scene
const scene = new THREE.Scene();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, and far value is 2000
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);
const clock=new THREE.Clock
//Renderer
const canvas = document.querySelector(".draw"); 
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); 
// renderer.render(scene, camera); 

const animate =()=>{

  renderer.render(scene, camera); 
  const time= clock.getElapsedTime()
  console.log(time)
  mesh.rotation.y=time*1;
  window.requestAnimationFrame(animate)
}
animate();