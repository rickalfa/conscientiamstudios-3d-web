// src/utils/LoadContent.ts

/**
 * Clase base abstracta para cargar e insertar contenido HTML desde un archivo.
 */
export abstract class LoadContent {
    protected _htmlContent: string | null = null; // Almacena el contenido HTML una vez cargado
    protected abstract htmlFilePath: string; // Cada clase hija DEBE definir esta ruta

    constructor() {
        console.log(`Clase base LoadContent inicializada.`);
    }

    /**
     * Carga el contenido HTML del archivo especificado por `htmlFilePath` de forma asíncrona.
     * @returns {Promise<string>} Una promesa que resuelve con el contenido HTML.
     */
    public async loadHtmlContent(): Promise<string> {
        if (this._htmlContent) {
            return this._htmlContent; // Si ya está cargado, lo devuelve
        }

        if (!this.htmlFilePath) {
            throw new Error("htmlFilePath no está definido en la clase hija.");
        }

        try {
            const response = await fetch(this.htmlFilePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} al cargar '${this.htmlFilePath}'`);
            }
            this._htmlContent = await response.text();
            console.log(`Contenido de '${this.htmlFilePath}' cargado exitosamente.`);
            return this._htmlContent;
        } catch (error) {
            console.error(`Error al cargar el contenido HTML de '${this.htmlFilePath}':`, error);
            this._htmlContent = ''; // Establece a vacío en caso de error
            return '';
        }
    }

    /**
     * Inserta el contenido HTML cargado en un elemento del DOM especificado por su ID.
     * Si el contenido aún no está cargado, lo cargará primero.
     * @param {string} targetElementId El ID del elemento donde se insertará el contenido.
     */
    public async insertContent(targetElementId: string): Promise<void> {
        const targetElement = document.getElementById(targetElementId);

        if (!targetElement) {
            console.error(`Elemento con ID '${targetElementId}' no encontrado para insertar contenido.`);
            return;
        }

        if (!this._htmlContent) {
            // Si el contenido no está cargado, lo carga
            await this.loadHtmlContent();
        }

        if (this._htmlContent) { // Vuelve a verificar después de la carga asíncrona
            targetElement.innerHTML = this._htmlContent;
            console.log(`Contenido insertado en #${targetElementId} desde '${this.htmlFilePath}'.`);
        }
    }

    /**
     * Obtiene el contenido HTML cargado.
     * @returns {string | null} El contenido HTML o null si aún no se ha cargado.
     */
    public get htmlContent(): string | null {
        return this._htmlContent;
    }
}