
import { LoadContent } from "../../utils/LoadContent";

/**
 * Clase para gestionar la sección de Miembros.
 */
export class MemberSectionManager extends LoadContent {
    protected htmlFilePath: string = 'src/app/home/members/member.html';
    // La propiedad para almacenar el contenido HTML ya está llena gracias a la importación
   

    constructor() {
        super();
        console.log('MemberSectionManager inicializado.');
    }

  


}