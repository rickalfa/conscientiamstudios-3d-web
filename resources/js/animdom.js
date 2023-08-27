





const btnenvio = document.getElementById("btnenvio");

const vizualhtml = document.getElementById("vizual");

let statepress = false;


btnenvio.addEventListener("click", ()=>{



    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
    if (pos == 80) {
      clearInterval(id);
    } else {
      pos++; 
      vizualhtml.style.top = pos + "%"; 
      //elem.style.left = pos + "px"; 
    }
  }



    //vizualhtml.style.top = "70%";



});
