import './styles.css';


import { Todo, TodoList} from './classes';     //BUSCA POR DEFECTO EN INDEX.JS DE CLASSES
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';          LAS IMPORTAMOS DESDE EL INDEX.JS DE CLASSES PARA MAS PROLIJIDAD
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach( todo =>  crearTodoHtml( todo ));




//localStorage.setItem('mi-key', 'ABC123') //(KEY, VALOR)se ve en herramientas de desarrollador, application, local storage 