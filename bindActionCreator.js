import { createStore, bindActionCreators } from "redux";

const ADD_TODO= 'add_todo';
const DEL_TODO= 'delete_todo';
const UPD_TODO= 'edit_todo';

function todoReducer(state, action){
    if(action.type == ADD_TODO){
        const todoText= action.payload.todoText;
        return [
            ...state,
            {text: todoText, isFinished: false, id:(state.length == 0) ? 1 : state[state.length-1].id + 1}
        ]
    }
    else if(action.type == DEL_TODO){
        const todoId= action.payload.todoId;
        return state.filter(t => t.id != todoId)
    }
    else if(action.type == UPD_TODO){
        const todo= action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if(t.id == todo.id){
                t.text = todoText;
            }
            return t;
        })
    }
    return state;
}

//action objects -> action methods (action creator)
const addTodo= (todoText) => ({type: ADD_TODO , payload:{todoText}}); //we can send value in payload in this two way either this way
const deleteTodo= (id) => ({type: DEL_TODO , payload:{todoId: id}}); //or this way

const {dispatch, subscribe, getState, replaceReducer} = createStore(todoReducer,[]);

subscribe(()=> console.log(getState()))

const actions= bindActionCreators({addTodo, deleteTodo}, dispatch);

actions.addTodo('todo 1')

actions.addTodo('todo 2')

actions.deleteTodo(1)