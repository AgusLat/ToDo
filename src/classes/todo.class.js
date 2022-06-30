

export class Todo {

    //el metodo estatico es para que los objetos que recupera el local storage figuren como 
    //instancia de esta clase y asi puedan mantener sus metodos(sino se perderian al 
    //figurar solo como objeto y no instancia).
    static fromJson( { tarea, id, completado, creado}) { //desestructuracion del obj del localstorage

        const tempTodo = new Todo( tarea );

              tempTodo.id         = id;
              tempTodo.completado = completado;
              tempTodo.creado     = creado;
              //ASI LE DAMOS LAS PROPIEDADES DE DICHO OBJ COMO SI FUESE INSTANCIA

        return tempTodo;
    };

    constructor( tarea ){

        this.tarea = tarea;

        this.id         = new Date().getTime(); // Esto da un numero que no sirve como ID
        this.completado = false; 
        this.creado     = new Date();

    }



}