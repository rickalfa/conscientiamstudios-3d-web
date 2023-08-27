

import * as THREE from 'three';

const scene = new THREE.Scene();
/**Scne Background Color */
scene.background = new THREE.Color().setHSL( 0.51, 0.4, 0.01, THREE.SRGBColorSpace );
/** Ccene Fog add */
// scene.fog = new THREE.Fog( 0x000000, 250, 800 );

/**modulo LENSFLARE luces  */
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';


import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

/** MODULO para cargar OBJ */
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

/**Control de camara */
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//** CLOCK OBJECT  */ */

const clock = new THREE.Clock();

/** 
 * variable movimiento camara
*/
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.useLegacyLights = false;
    renderer.shadowMap.enabled = true;
    renderer.setSize( window.innerWidth, window.innerHeight );
    const canvas = document.getElementById("back3d");
    canvas.appendChild( renderer.domElement );

    let mixer;
    let mixer01;
    let mixer02;

    init();
    animate();


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
       scene.add( mesh );


       /**CREACION LENSFLARES TEXTURES */

       const textureLoader = new THREE.TextureLoader();

				const textureFlare0 = textureLoader.load( 'resources/js/models3d/textures/lensflare0.png' );
				const textureFlare3 = textureLoader.load( 'resources/js/models3d/textures/lensflare3.png' );

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

       loadFbx.load( 'resources/js/models3d/artifact_ring_large/artifact_ALL_ring_02.fbx', function ( object ) {

            
              mixer = new THREE.AnimationMixer( object );
   
              object.position.set(-3, 1, 3);

              const action = mixer.clipAction( object.animations[ 0 ] );
              action.play();
   
              object.traverse( function ( child ) {
   
                if ( child.isMesh ) {
   
                  child.castShadow = true;
                  child.receiveShadow = true;
   
                }

             
              } );

              
                
              scene.add( object );

            } );
 
        

                /**CARGAMOS ARCHIVO FBX */
       const loadFbx01 = new FBXLoader();

       loadFbx01.load( 'resources/js/models3d/artifact_ring/artifact_medium_ring_01.fbx', function ( object01 ) {

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

       loadFbx02.load( 'resources/js/models3d/homi/homi_3d_02.fbx', function ( object02 ) {

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




            /**cambiar Posicion del cubo */
            cube.position.set(1, 2, 20);
         
          

            /** CARGAMOS ARCHIVO OBJ */

            function onProgress( xhr ) {

              if ( xhr.lengthComputable ) {
    
                const percentComplete = xhr.loaded / xhr.total * 100;
                console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
    
              }
    
            }
    
            function onError() {}
    
            const loader = new OBJLoader( );
            loader.load( 'resources/js/homi/homi_3d_02.fbx', function ( obj ) {
    
               scene.add(obj);
    
            }, onProgress, onError );



   }

 window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();

   renderer.setSize( window.innerWidth, window.innerHeight );


}


    camera.position.set( -3, 2, 10 );

    

    function animate()
     {

      requestAnimationFrame( animate );

      const delta = clock.getDelta(); // Obtenemos el valor Delta del objeto CLOCK que es el avlor de la unidad de tiempo


			if ( mixer ) mixer.update( delta );

      if (mixer01) mixer01.update(delta);

      if( mixer02) mixer02.update(delta);



      renderer.render( scene, camera );

      };
 

 
      