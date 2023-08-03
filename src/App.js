import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({$target}) {
    new Header({$target})
    new TodoForm({$target})
    new TodoList({$target})
}
