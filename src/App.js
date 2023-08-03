import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
    const intialState = [];
    const header = new Header({$target});
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, text]
            todoList.setState(nextState)
            header.render();
        }
    })
    const todoList = new TodoList({$target, intialState})

}
