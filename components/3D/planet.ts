 import gsap from "gsap";
import earthVertex from "./shaders/earth/vertex.glsl";
import earthFragment from "./shaders/earth/fragment.glsl";
import atmosphereVertex from "./shaders/atmosphere/vertex.glsl";
import atmosphereFragment from "./shaders/atmosphere/fragment.glsl";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import * as THREE from "three";

const initPlanet = (canvas: HTMLCanvasElement) => {
  // scene
  const scene = new THREE.Scene();

  // camera
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  const camera = new THREE.PerspectiveCamera(
    15,
    size.width / size.height,
    0.1,
    10000
  );
  camera.position.set(0, 2.15, 4.5);
  scene.add(camera);

  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(size.pixelRatio);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // texture
  const TL = new THREE.TextureLoader();
  const dayTexture = TL.load("/earth/day.jpg");
  const nightTexture = TL.load("/earth/night.jpg");
  const specularCloudsTexture = TL.load("/earth/specularClouds.jpg");

  dayTexture.colorSpace = THREE.SRGBColorSpace;
  nightTexture.colorSpace = THREE.SRGBColorSpace;

  const baseAnisotropy = renderer.capabilities.getMaxAnisotropy();
  dayTexture.anisotropy = baseAnisotropy;
  nightTexture.anisotropy = baseAnisotropy;
  specularCloudsTexture.anisotropy = baseAnisotropy;

  // geometry
  const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
  const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);

  const atmosphereDayColor = "#4a96e8";
  const atmosphereTwilightColor = "#1950E5";

  // materials (نفسهم)
  const earthMaterial = new THREE.ShaderMaterial({
    vertexShader: earthVertex,
    fragmentShader: earthFragment,
    uniforms: {
      uDayTexture: new THREE.Uniform(dayTexture),
      uNightTexture: new THREE.Uniform(nightTexture),
      uSpecularCloudsTexture: new THREE.Uniform(specularCloudsTexture),
      uSunDirection: new THREE.Uniform(new THREE.Vector3(-1, 0, 0)),
      uAtmosphereDayColor: new THREE.Uniform(
        new THREE.Color(atmosphereDayColor)
      ),
      uAtmosphereTwilightColor: new THREE.Uniform(
        new THREE.Color(atmosphereTwilightColor)
      ),
    },
    transparent: true,
  });

  const atmosphereMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.BackSide,
    vertexShader: atmosphereVertex,
    fragmentShader: atmosphereFragment,
    uniforms: {
      uOpacity: { value: 1 },
      uSunDirection: new THREE.Uniform(new THREE.Vector3(-1, 0, 0)),
      uAtmosphereDayColor: new THREE.Uniform(
        new THREE.Color(atmosphereDayColor)
      ),
      uAtmosphereTwilightColor: new THREE.Uniform(
        new THREE.Color(atmosphereTwilightColor)
      ),
    },
    depthWrite: false,
  });

  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  atmosphere.scale.set(1.13, 1.13, 1.13);

  const earthGroup = new THREE.Group();
  earthGroup.add(earth, atmosphere);
  scene.add(earthGroup);

  // sun
  const sunSpherical = new THREE.Spherical(1, Math.PI * 0.48, -1.8);
  const sunDirection = new THREE.Vector3().setFromSpherical(sunSpherical);
  earthMaterial.uniforms.uSunDirection.value.copy(sunDirection);
  atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection);

  // gsap
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_main",
      start: "top top",
      scrub: 3,
      pin: true,
    },
  })
    .to(".hero_main .content", {
      filter: "blur(40px)",
      autoAlpha: 0,
      scale: 0.5,
      duration: 2,
    })
    .to(
      camera.position,
      {
        y: 0.1,
        z: window.innerWidth > 768 ? 19 : 30,
        x: window.innerWidth > 768 ? 0 : 0.1,
        duration: 2,
      },
      "<"
    );

  // animation
  const tick = (time: number) => {
    earth.rotation.y = time * 0.2;
    renderer.render(scene, camera);
  };

  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  // resize
  const onResize = () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    size.pixelRatio = Math.min(window.devicePixelRatio, 2);

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(size.pixelRatio);
  };

  window.addEventListener("resize", onResize);

  // cleanup
  const dispose = () => {
    gsap.ticker.remove(tick);
    ScrollTrigger.getAll().forEach((t) => t.kill());
    earthGeometry.dispose();
    atmosphereGeometry.dispose();
    earthMaterial.dispose();
    atmosphereMaterial.dispose();
    renderer.dispose();
    window.removeEventListener("resize", onResize);
  };

  return { scene, renderer, dispose };
};

export default initPlanet;
