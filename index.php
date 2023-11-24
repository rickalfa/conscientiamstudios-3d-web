<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conscientiamstudios</title>


    <link rel="icon" type="image/x-icon" href="resources/imgs/logo_ccts_02_FAVICON.png">

<!-- #region FONTAWESOME-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- #endregion FONTAWESOME-- -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 

<link  href="styles/mybootssaas.css" rel="stylesheet" >

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">

  <script src="resources/js/bootstrap.js"></script>
  <script src="styles/boots.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>






  
</head>


    
<body>
  <!-- #region 3D-->
 <div id="back3d">
 
</div>

 <!-- #region VIZUALIZACION-->
  <div  id="vizual">

<!--------- #region MAIN CONTAINER-->
   <div class="container-fluid">

<!-- #region  COllapse Navbar-->

      <div class="collapse " id="navbarToggleExternalContent" data-bs-theme="dark">
         <div class="nacontent " >

             <div class="p-2 bg-dark border border-info rounded-left mx-4" style="--bs-bg-opacity: 0.8;">
              <h5 class="text-info h4">Conscientiamstudios dev. indie videogame</h5>
              
              <span class="text-info">dev. assets- unreal engine  app webs.</span>
              
              <button id="btnenvio" class="btn btn-danger">Press the button to interact with the environment</button>

              </div>
       
          </div>
      </div>

 <!-- #region NAVBAR-->
       <nav id="navbar-example2" class="navbar navbar-dark bg-dark rounded-pill">
         <div class="container-fluid">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>

           <img src="resources/imgs/logo_ccts_favicon.png" width="35" height="35" class="img-rounded" alt="Cinque Terre"> 

           <a class="navbar-brand text-light" href="#">Conscientiamstudios</a>
               <ul class="nav nav-pills">
                 <li class="nav-item">
                   <a class="nav-link" href="#scrollspyHeading1">Home</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#scrollspyHeading2">games</a>
                 </li>
           
            
                <li class="nav-item"><a class="nav-link" href="#scrollspyHeading3">Members</a></li>
                <li class="nav-item"><a class="nav-link" href="#scrollspyHeading4">Galery</a></li>
        
                <li class="nav-item"><a class="nav-link" href="#scrollspyHeading5">Contanct</a></li>
                     
               </ul>  


         </div>
       </nav>
 <!-- #endregion COLLAPSE navbar -->


        <!-- #region 1to RAW -->
          <div class="row">

          <div class=" col-lg-12" 
              style="background-image: url('resources/imgs/frame_gui_scifi_03.png');
               background-size: 65% 58px;
               background-repeat: no-repeat;">
               
               <h2 class="text-info px-4">Conscientiamstudios </h2>

          </div>

      

          <div class="col-lg">
          <!-- #region BG GREEN-->
          <div class="bg-dark rounded-4" style="--bs-bg-opacity: 0.6;"> 
            
                  <div class="boxsc text-white rounded-3" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary  rounded-2" tabindex="0">
              
                       <!-- #region HOME SUBSECCION-->
                      <div id="scrollspyHeading1" class="subbox "> 
                          <h4 >ABOUT US</h4>
                           <p class="">Conscientiamstudios is an independent desktop and web application video game development studio.
                             Our goal is to develop quality, stable software that is healthy for humanity.
                             What does healthy software mean for humanity? software that is not intended to generate addiction and / or completely find out your actions and even what you think.
                              I believe that technology should be used for mental and spiritual growth for a good social coexistence on the planet.
                           </p>
                      </div>
                      <!-- #endregion SUBSECCIOPN -->     
          
                   <!-- #region SUBSECCION-->
                      <div id="scrollspyHeading2" class="subbox"> 
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
                   <!-- #region SUBSECCION MEMBERS-->
                       <div id="scrollspyHeading3" class="subbox "> 
                          <h4 >Members</h4>
                          <div class="row bg-warning">
                               <div class="col col-lg-2 bg-dark">
                                  avatar
                                 <img src="resources/imgs/foto_perfil.jpeg"  class="rounded-circle" width="256" height="256"> 
                             
                               </div>
                               <div class="col-md-auto text-black">
                                nombre : Ricardo Betancourt
                              
                               </div>
                               <!-- #region ACCORDION MEMBERS-->
                               <div class="col col-lg-4 bg-success">
                              

                                 <div id="accordion">
                                      <div class="card bg-dark">
                                        <div class="card-header">
                                          <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                              Occupation
                                          </a>
                                        </div>
                                        <div id="collapseOne" class="collapse" data-parent="#accordion">
                                          <div class="card-body text-light">
                                            creador de Conscientiamstudios desarrollador de app-web, diseñador de modelos 3D y animaciones
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card bg-dark">
                                        <div class="card-header">
                                          <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                          Social Links
                                        </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                          <div class="card-body">
                                             <li><a href="https://www.artstation.com/shamael6"><i class="bi bi-badge-3d-fill">3D works</i></a></li>
                                             <li><a href="https://github.com/rickalfa"><i class="bi bi-github"> github</i></a></li>
                                             <li><a href="https://linkedin.com/in/ricardo-betancourt-076920148"><i class="bi bi-linkedin"> linkedin</i></a></li>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="card bg-dark">
                                        <div class="card-header">
                                          <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                             About me
                                          </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                                          <div class="card-body text-light">
                                              soy analista programador, y me gusta mucho crear cosas desde 0, cosas que salgan de mi mente y poder trabajarlas.
                                              la programacion me da la oportunidad de darle vida a todos esos sueños
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              <!-- #endregion ACCORDION-->
                                </div>

                               </div>
                             </div>
                   
                      <!-- #endregion SUBSECCIOPN -->
          
                           <!-- #region SUBSECCION-->
                       <div id="scrollspyHeading4" class="subbox"> 
                          <h4 >First heading</h4>
                           <p class="">... mucho texto mucho texto mucho textomucho textomucho textomucho
                           mucho textomucho textomucho textomucho textomucho texto mucho texto mucho texto mucho textomucho textomucho textomucho
                           mucho textomucho textomucho textomucho textomucho texto
                           </p>
                      </div>
          
                         <!-- #endregion SUBSECCIOPN -->

                         <!-- #region SUBSECCION-CONTACT-->
                        <div id="scrollspyHeading5" class="subbox">

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
          <!-- #endregion BG GREEN -->
          
          </div>     
          
          
          </div>
        <!-- ROW END -->
       
</div>  


<!-- #region  2to CONTAINER -->
<div class="container">
        <!-- #region ROW  SOCIAL MEDIA-->

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 mt-1">

           <div class="col mb-3"> </div>
           <div class="col mb-3"> </div>

            <div class="col-6 mb-0">
              <div class="d-flex justify-content-center">
                <a href="#" class="bi bi-twitter fa border border-bottom-0 rounded-top p-1" style="font-size: 2rem; color: #e664ed;"></a>
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


        <!-- #region 2to ROW-->
        
        <div class="row">

        <!-- #region SOCIAL - Media-->
        
   

          <div class="col-lg-12 ">
          
                 <!-- #region FOOTER-->         

                 <footer>
                   <div class="mt-0 p-2 border-logo rounded-pill  bg-dark text-white text-center" style="--bs-border-opacity: 0.2;">
                              

                     <!-- Copyright -->
                       <div class="footer-copyright text-center ">© 2023 Copyright:
                        <a href="/"> Conscientiamstudios.com</a>
                      </div>
                      <!-- Copyright -->


                    </div>
                 </footer>
                  <!-- #endregion FOOTER -->

                

           </div>
          <!-- #endregion SOCIAL MEDIA -->


        </div>
        <!-- #endregion 2to ROW-->
  </div>
    
       
    
   
  </div>
  <!-- #endregion VIZUALIZACION-- -->


   <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

    <script type="importmap">
     {
      "imports": {
        "three": "https://unpkg.com/three@0.149.0/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@0.149.0/examples/jsm/"
      }
    } 
    </script>
   
   <script type="module" src="resources/js/mainthree.js"></script>

   <script type="module" src="resources/js/animdom.js"></script>

</body>
</html>