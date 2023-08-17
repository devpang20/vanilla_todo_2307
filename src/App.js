import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({$target}) {
    const intialState = getItem('todos', [
        {
            id: 1,
            text: "할일1",
            checked: false
        }, 
        {
            id: 2,
            text: "할일2",
            checked: false
        }, 
        {
            id: 3,
            text: "할일3",
            checked: false
        }
    ]);

    let currentId = intialState[intialState.length - 1].id;

    new Header({$target});

    const onSubmit = (text) => {
        const nextState = todoList.state.concat([
            {
                id: currentId + 1,
                text,
                checked: false
            }
        ])
        currentId++;
        todoList.setState(nextState)
        setItem('todos', JSON.stringify(nextState))
    }

    const onDelete = (id) => {
        const nextState = todoList.state.filter(todo => todo.id !== id)
        todoList.setState(nextState)
    }

    const onToggle = (id) => {
        const nextState = todoList.state.map(todo => 
            todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
        todoList.setState(nextState)    
    }

    new TodoForm({
        $target,
        onSubmit
    })

    const todoList = new TodoList({
        $target, 
        intialState, 
        onDelete,
        onToggle
    })

}
