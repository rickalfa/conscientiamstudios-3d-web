

import * as THREE from 'three'

console.log(' file mainthree.js')

const scene = new THREE.Scene();
/**Scne Background Color */
scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01, THREE.SRGBColorSpace );
/** Ccene Fog add */
// scene.fog = new THREE.Fog( 0x000000, 250, 800 );

/**modulo LENSFLARE luces  */
/**three/addons/objects/Lensflare.js */
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

//* GLTFLoader cargador de archivos .gltf, .glb */
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

/** MODULO para cargar OBJ */
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

/**Control de camara */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { roughness } from 'three/tsl';


//** CLOCK OBJECT  */ */

const clock = new THREE.Clock();

/** 
 * variable movimiento camara
*/
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.useLegacyLights = false;
    renderer.shadowMap.enabled = true;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping; //Tono de mappeo 
    renderer.toneMappingExposure = 0.8;

    renderer.setSize( window.innerWidth, window.innerHeight );
    const canvas = document.getElementById("back3d");
    canvas.appendChild( renderer.domElement );

    let mixer;
    let mixer01;
    let mixer02;



     init();
    animate();


function onError() {
              console.log('error load model');
  
            };

       
function onProgress( xhr ) {

    if ( xhr.lengthComputable ) {
    
      const percentComplete = xhr.loaded / xhr.total * 100;
      console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
    
    }
    
  }


function init(){

      /**creacion de figura geometrica
      * 
      */
      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

       /**Creacion de ambientlight
       
       const light = new THREE.AmbientLight( 0x404040, 0.4); // soft white light
       scene.add( light );
       */

       /** Creacion de DirectionalLuminacion */
        const dirLight = new THREE.DirectionalLight( 0xffffff, 0.15 );
				dirLight.position.set( 0, 100, 10 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 180;
				dirLight.shadow.camera.bottom = - 100;
				dirLight.shadow.camera.left = - 120;
				dirLight.shadow.camera.right = 120;
				scene.add( dirLight );

        /** Control Orbital de camara */

        const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 0, 0 );
				controls.update();

  
       /**CREACION DE GROUND */

       const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshBasicMaterial( { color: 0xd0e0e3, opacity: 0.5, transparent: true } ) );
       mesh.rotation.x = - Math.PI / 2;
       mesh.position.set(0, -20, 0 );
       mesh.receiveShadow = true;
      // scene.add( mesh );

      /**CREACION SKYBOX */

      let SkyBox = new THREE.CubeTextureLoader().load(
        [
          
        ]
      )



       /**CREACION LENSFLARES TEXTURES */

       const textureLoader = new THREE.TextureLoader();

				const textureFlare0 = textureLoader.load( 'src/js/models3d/textures/lensflare0.png' );
				const textureFlare3 = textureLoader.load( 'src/js/models3d/textures/lensflare3.png' );

				addLight( 0.55, 0.9, 0.5, 5000, 0, - 1000 );
				addLight( 0.08, 0.8, 0.5, -3, 2, 3 );


        function addLight( h, s, l, x, y, z ) {

					const light = new THREE.PointLight( 0xffffff, 1.5, 2000, 0 );
					light.color.setHSL( h, s, l );
					light.position.set( x, y, z );
					scene.add( light );

					const lensflare = new Lensflare();
					lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
					lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
					light.add( lensflare );

				}

    

       /**CARGAMOS ARCHIVO FBX*/
       const loadFbx = new FBXLoader();

       loadFbx.load( 'src/js/models3d/artifact_ring_large/artifact_ALL_ring_02.fbx', function ( object ) {

            
              mixer = new THREE.AnimationMixer( object );
   
              object.position.set(-3, 1, 3);

              const action = mixer.clipAction( object.animations[ 0 ] );
              action.play();
   
              object.traverse( function ( child ) {


                   // --- DEPURACIÓN Y SOLUCIÓN DE MATERIALES Y NORMALES ---
                 console.log('Inspeccionando malla:', child.name);

                  if (child.material) {
                    console.log('Tipo de material original:', child.material.constructor.name);


                            if (!(child.material instanceof THREE.MeshStandardMaterial) && !(child.material instanceof THREE.MeshPhysicalMaterial)) {
                          console.warn(`Material '${child.material.constructor.name}' no es un material PBR. Convirtiendo a MeshStandardMaterial.`);
                              
                          const oldMaterial = child.material;
                          child.material = new THREE.MeshStandardMaterial({
                              map: oldMaterial.map, // Copiar textura de color si existe
                              // Puedes copiar otras propiedades como color, emissive, etc.
                              color: oldMaterial.color,
                              
                          });
                          // Si tienes un mapa normal en el material original, cópialo.
                          // Sin embargo, es más común que el FBXLoader lo adjunte automáticamente.
                          // Verifica que la textura normal exista y sea del tipo correcto.
                          if (oldMaterial.normalMap) {
                              child.material.normalMap = oldMaterial.normalMap;
                              console.log('Mapa normal copiado al nuevo material.');
                              } else {
                                  console.warn('el material antiguo no tiene un mapa normal asignado en su material.');
                              }

                              // B. Verificar y ajustar el espacio de color de la textura normal
                              // Las texturas de normales DEBEN ser interpretadas en espacio lineal (no sRGB).
                              // Por defecto, THREE.TextureLoader debería cargar las imágenes PNG/JPG sin un colorSpace definido,
                              // lo que es correcto para normales. Si lo ves como SRGBColorSpace aquí, sería un problema.
                              if (child.material.normalMap) {
                                  console.log('Normal Map ColorSpace:', child.material.normalMap.colorSpace);
                                  // No deberías tener que cambiar esto directamente a menos que algo lo esté forzando.
                                  // Si child.material.normalMap.colorSpace es THREE.SRGBColorSpace, hay un error en la carga/interpretación.
                              } else {
                                  console.warn('La malla no tiene un mapa normal asignado en su material.');
                              }


                          }
                    }else {
                      console.warn(`La malla '${child.name}' no tiene un material asignado. Asignando un MeshStandardMaterial básico.`);
                      // Asigna un material por defecto para evitar errores y hacer visible la malla
                      child.material = new THREE.MeshStandardMaterial({ color: 0x888888 });
                    }
   
                if ( child.isMesh ) {
   
                  child.castShadow = true;
                  child.receiveShadow = true;
   
                }

             
              } );

              /***************** END method traverse************************************ */
              
                
             // scene.add( object );

            } );
 
        

                /**CARGAMOS ARCHIVO FBX */
       const loadFbx01 = new FBXLoader();

       loadFbx01.load( 'src/js/models3d/artifact_ring/artifact_medium_ring_01.fbx', function ( object01 ) {

              mixer01 = new THREE.AnimationMixer( object01 );
   
              object01.position.set(-3, 2, 3);

              const action01 = mixer01.clipAction( object01.animations[ 0 ] );
              action01.play();
   
              object01.traverse( function ( child ) {
   
                if ( child.isMesh ) {
   
                  child.castShadow = true;
                  child.receiveShadow = true;
   
                }

             
              } );

          
              scene.add( object01 );

            } );


            /** Cargamos archivo FBX HOMI */
                            /**CARGAMOS ARCHIVO FBX */
       const loadFbx02 = new FBXLoader();

       loadFbx02.load( 'src/js/models3d/homi/homi_3d_02.fbx', function ( object02 ) {

              mixer02 = new THREE.AnimationMixer( object02 );
   
              object02.position.set(-3.1, 1.5, 2);

              const action02 = mixer02.clipAction( object02.animations[ 0 ] );
              action02.play();
   
              object02.traverse( function ( child ) {
   
                if ( child.isMesh ) {
   
                  child.castShadow = true;
                  child.receiveShadow = true;
   
                }

             
              } );

          
              scene.add( object02 );

            } );


            /** LOAD GLF  */

              const loader = new GLTFLoader();
              const modelPath = 'src/js/models3d/artifact_ring_anim/ring_power_conscientiamstudios.glb';

              loader.load(
                  modelPath,
                  (gltf) => {
                      // El objeto gltf contiene la escena, animaciones, cámaras, etc.
                      const model = gltf.scene;

                      // Ajusta la posición, escala o rotación del modelo si es necesario
                      model.position.set(-3.1, 1.5, 2); // O ajusta a tus necesidades
                     // model.scale.set(1, 1, 1); // Ajusta la escala si el modelo es muy grande/pequeño

                      // Habilita sombras para todas las mallas del modelo
                      model.traverse((child) => {
                          if (child instanceof THREE.Mesh) {
                              child.castShadow = true;
                              child.receiveShadow = true;
                              // Opcional: Asegúrate de que los materiales sean compatibles con PBR
                              // y que las normales se vean bien (generalmente GLTFLoader maneja esto bien)
                          }
                      });

                      // Si el modelo tiene animaciones, crea un AnimationMixer
                      if (gltf.animations.length > 0) {
                          mixer = new THREE.AnimationMixer(model);
                          gltf.animations.forEach((clip) => {
                              mixer?.clipAction(clip).play();
                          });
                          console.log('Animaciones GLB cargadas y reproduciéndose.');
                      }

                      model.scale.set(100, 100, 100);


                      scene.add(model);
                      console.log('Modelo GLB cargado exitosamente:', modelPath);
                      console.log('Modelo cargado:', gltf);
                  },
                  // Opcional: Función de progreso (para mostrar una barra de carga, etc.)
                  (xhr) => {
                      // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                  },
                  // Opcional: Función de manejo de errores
                  (error) => {
                      console.error('Error al cargar el modelo GLB:', error);
                  }
              );


            /**cambiar Posicion del cubo */
            cube.position.set(1, 2, 20);
         
          

            /** CARGAMOS ARCHIVO OBJ */

    
        
    

            
         //
         // 
          // const loader = new OBJLoader( );
         //
         // 
         //   loader.load( 'src/js/homi/homi_3d_02.fbx', function ( obj ) {

        // 
         //      scene.add(obj);

         // 
         //   }, onProgress, onError );



   }

 window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();

   renderer.setSize( window.innerWidth, window.innerHeight );


}


// Poscion de la camapra con la que iniciamos
    camera.position.set( -3, 2, 8.5 );

    

    function animate()
     {

      requestAnimationFrame( animate );

      const delta = clock.getDelta(); // Obtenemos el valor Delta del objeto CLOCK que es el avlor de la unidad de tiempo


			if ( mixer ) mixer.update( delta );

      if (mixer01) mixer01.update(delta);

      if( mixer02) mixer02.update(delta);



      renderer.render( scene, camera );

      };
 

   
 
      