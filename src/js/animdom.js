


const btnenvio = document.getElementById("btnenvio");

const vizualhtml = document.getElementById("vizual");

let statepress = true;
let pos;
let id;

let position_target;


btnenvio.addEventListener("click", ()=>{


  if (statepress) {

    position_target = 80;
    id = null;
    pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);

    function frame() {
      if (pos == position_target) {
       clearInterval(id);

      } else {

          pos++; 
          vizualhtml.style.top = pos + "%"; 
     
        //elem.style.left = pos + "px"; 

      }

      statepress = false;

    }
    
  } else {

    pos = 80;
    position_target = 0;
    clearInterval(id);
    id = setInterval(frame, 1);

    function frame() {
      if (pos == position_target) {
       clearInterval(id);

      } else {

          pos--; 
          vizualhtml.style.top = pos + "%"; 
     
        //elem.style.left = pos + "px"; 

      }

      statepress = true;

    }



    
  }
   


    //vizualhtml.style.top = "70%";


});
