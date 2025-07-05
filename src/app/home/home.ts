
import { LoadContent } from '../utils/LoadContent';
import {MemberSectionManager} from './members/member';



export class HomeSectionManager extends LoadContent
{

  protected htmlFilePath: string = 'src/app/home/home.html';
    // La propiedad para almacenar el contenido HTML ya está llena gracias a la importación
   

    constructor() {
        super();
        console.log('HomeSectionManager inicializado.');
    }



}


export async function insertarContenido() {

   

     const vizualElement = document.getElementById('vizual'); // Obtenemos el elemento con id="vizual"

        const buttonToHide = document.getElementById('btncontenido'); // Obtenemos el botón por su ID

        const homeContent = new HomeSectionManager();
  
        
       // esperamos a que el contenido se carge en la ID seccionmain para luego cargar el resto de componentes
       await homeContent.insertContent('seccionmain');



    
          if (vizualElement != null) {
        // Cambiar la propiedad 'position' de 'fixed' a 'relative'
        vizualElement.style.position = 'absolute';
        console.log('La posición del elemento #vizual ha cambiado a relative.');
    }

      // 3. Ocultar el botón
    if (buttonToHide != null) {
        buttonToHide.style.display = 'none';
        console.log(`El botón con ID '${buttonToHide.id}' ha sido ocultado.`);
    }

        // 4. Scroll suave a la sección objetivo
    const targetElement = document.getElementById('seccionmain');
    if (targetElement != null) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Hace el efecto de scroll suave
            block: 'start'      // Alinea el inicio del elemento con el inicio del viewport
        });
        console.log(`Scroll suave a la sección con ID seccionmain.`);
    }

  

      const memberContainerId = 'membercontentid'; 

    // Crea una instancia de MemberSectionManager
    const memberManager = new MemberSectionManager();

    // Ahora puedes llamar a los métodos heredados
   memberManager.insertContent(memberContainerId); 

     
    


    }

export const contenidoHTML = `
            <div >
              <!-- #region NAVBAR-->
                    <nav id="mainnavbar" class="navbar navbar-dark bg-dark rounded-pill sticky-top">
                      <div class="container-fluid">
                      

                        <img src="/resources/imgs/logo_ccts_favicon.png" width="35" height="35" class="img-rounded" alt="Cinque Terre"> 

                        <a class="navbar-brand text-light" href="#">Conscientiamstudios</a>
                            <ul class="nav nav-pills">
                              <li class="nav-item">
                                <a class="nav-link" href="#homeid">Home</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#gamesid">games</a>
                              </li>
                        
                          
                              <li class="nav-item"><a class="nav-link" href="#membersid">Members</a></li>
                              <li class="nav-item"><a class="nav-link" href="#galleryid">Gallery</a></li>
                      
                              <li class="nav-item"><a class="nav-link" href="#contactid">Contanct</a></li>
                                  
                            </ul>  


                      </div>
                    </nav>
              <!-- #endregion NAVBAR -->

              <!------- #region 1to ROW ------------->
                        <div class="row">

                        <div class=" col-lg-12" 
                            style="background-image: url('../resources/imgs/frame_gui_scifi_03.png');
                            background-size: 65% 58px;
                            background-repeat: no-repeat;">
                            
                            <h2 class="text-info px-4">Conscientiamstudios </h2>

                        </div>

                    

                        <div class="col-lg">
                        <!-- #region BG GREEN-->
                        <div class="bg-dark rounded-4" style="--bs-bg-opacity: 0.99;"> 
                          
                                <div class="boxsc text-white rounded-3" data-bs-spy="scroll" data-bs-target="#mainnavbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary  rounded-2" tabindex="0">
                            
                                    <!-- #region HOME SUBSECCION-->
                                    <div id="homeid" class="subbox "> 
                                        <h4 >ABOUT US</h4>
                                        <div class="container-fluid ">
                                            <div class="row">
                                                <div class="col-sm-6 col-lg-12">
                                                  <p class="subboxtext">Conscientiamstudios: un estudio independiente de desarrollo de videojuegos,
                                                    tambien aplicaciones de escritorio y web. Nuestra misión es crear software de calidad, estable y
                                                      beneficioso para la humanidad. ¿Qué significa software saludable para la humanidad? 
                                                      Desarrollar programas que no buscan generar adicción ni rastrear 
                                                      completamente tus acciones o pensamientos.
                                                      Creemos que la tecnología debe ser una herramienta para el 
                                                      crecimiento mental y espiritual, promoviendo una buena convivencia social en el planeta
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- #endregion SUBSECCIOPN -->     
                        
                                <!-- #region SUBSECCION-->
                                    <div id="gamesid" class="subbox"> 
                                        <h4 >Games </h4>
                                        <div class="row justify-content-md-center">
                                            <div class="col-lg-2">
                                                <div class="card" style="width:500px">
                                                  <img class="card-img-top" src="resources/imgs/wound_insilence_portada_02.jpg" alt="Card image">
                                                  <div class="card-img-overlay">
                                                    <h4 class="card-title text-light">WOUND In Silence</h4>
                                                    <p class="card-text text-info"> Horror Pc-Game.</p>
                                                    <a href="http://woundinsilence.com/" class="btn btn-primary" target="_blank"> Link access</a>
                                                  </div>
                                                </div>

                                                <p class=""> Pc - Game </p>

                                            </div>
                                        </div>

                                    </div>
                                    <!-- #endregion SUBSECCIOPN -->


                                    <!-- PERFILES INTEGRANTES --->
                                <!-- #region SUBSECCION MEMBERS-->
                                    <div id='membersid' class="subbox "> 
                                      <h4 >Members</h4>
                                          <div class="row">

                                             <div class="col-lg-12">
    
                                              <div id='membercontentid'></div>
                                            
                        
                                             </div>


                                          </div>
                                     </div>
                                
                                    <!-- #endregion SUBSECCIOPN -->
                        
                                        <!-- #region SUBSECCION-->
                                    <div id="galleryid" class="subbox"> 
                                        <h4 >First heading</h4>
                                        <p class="">... mucho texto mucho texto mucho textomucho textomucho textomucho
                                        mucho textomucho textomucho textomucho textomucho texto mucho texto mucho texto mucho textomucho textomucho textomucho
                                        mucho textomucho textomucho textomucho textomucho texto
                                        </p>
                                    </div>
                        
                                      <!-- #endregion SUBSECCIOPN -->

                                      <!-- #region SUBSECCION-CONTACT-->
                                      <div id="contactid" class="subbox">

                                      <h5>Contact form</h5>
                                
                                        <p class="">formulario contacto
                                    </p>
                                    <form action="/action_contact">
                                            <div class="form-group">
                                              <label for="email">Email contant:</label>
                                              <input type="email" class="form-control" placeholder="Enter email" id="email">
                                            </div>
                                            <div class="form-group">
                                            <div class="mb-3">
                                              <label for="exampleFormControlTextarea1" class="form-label">messege</label>
                                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                              </div>
                                          </div>
                                            <div class="form-group form-check">
                                              <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox"> Remember me
                                              </label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                    </form> 

                                        <!-- Contact 1 - Bootstrap Brain Component -->
                        

                                      </div>


                        
                          
                            <!-- #endregion CONTENT SUBSECCION -->
                        </div>
                        
                        
                          </div>

                               <!-- #region  2to CONTAINER -->
                                <div class="container">
                                        <!-- #region ROW  SOCIAL MEDIA-->

                                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 mt-1">

                                        <div class="col mb-3"> </div>
                                        <div class="col mb-3"> </div>

                                            <div class="col-6 mb-0">
                                            <div class="d-flex justify-content-center">
                                                <a href="#" class="bi bi-twitter-x fa border border-bottom-0 rounded-top p-1" style="font-size: 2rem; color: #e664ed;"></a>
                                                <a href="#" class="bi bi-facebook fa border border-bottom-1  rounded-top p-1" style="font-size: 2rem; color: white;"></a>
                                                <a href="#" class="bi bi-discord bg-dark fa rounded-top p-1" style="font-size: 2rem; color:#0a65c5;"></a>
                                                <a href="#" class="bi bi-twitch fa  rounded-top p-1" style="font-size: 2rem; color:#0a65c5;; " ></a>
                                            </div>
                                
                                            </div>

                                        <div class="col mb-0"> 
                                        
                                        </div>

                                        <div class="col mb-3"> </div>
                                        



                                        </div>

        <!-- #endregion ROW SOCIAL MEDIA-->


               <!-- ROW END -->  
               </div>
    `;

