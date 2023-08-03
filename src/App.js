import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({$target}) {
    const intialState = getItem('todos', []);
    const header = new Header({$target});
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, text]
            todoList.setState(nextState)
            header.render();

            setItem('todos', JSON.stringify(nextState))
        }
    })

    const todoList = new TodoList({$target, intialState})

}
