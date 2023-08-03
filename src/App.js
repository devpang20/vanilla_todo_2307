import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
    const intialState = ['item1', 'item2', 'test3']

    new Header({$target})
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, text]
            todoList.setState(nextState)
        }
    })
    const todoList = new TodoList({$target, intialState})

}
