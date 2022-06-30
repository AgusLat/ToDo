import { Todo } from "./todo.class";


export class TodoList {

    constructor() {

        //this.todos = [];  no es necesario por que cargarLocalStorage() lo crea si no existe.
        this.cargarLocalStorage();

    };

    nuevoTodo( todo ) {                 //crea un Todo con el argumento y lo manda al array del cosntructor

        this.todos.push( todo );
        this.guardarLocalStorage();
    };

    eliminarTodo( id ){             //elimina un todo mediante id

        this.todos = this.todos.filter( todo => todo.id != id)
        this.guardarLocalStorage();
    };

    marcarCompletado( id ){

        for ( const todo of this.todos){

            if ( todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }


    };


    eliminarCompletados (){

        this.todos = this.todos.filter( todo => !todo.completado)  
        this.guardarLocalStorage();
    };

    guardarLocalStorage(){ //esto lo aplico en los metodos que quiero que guarde modificaciones 

        localStorage.setItem('todo', JSON.stringify(this.todos));
         //con JSON puedo convertir el objeto
        // a STRING para que el localstorage lo lea bien y no como [object, Object]
    };

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                   ? JSON.parse( localStorage.getItem('todo') ) 
                   : [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

    };

}