import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({$target}) {
    const intialState = getItem('todos', [
        {
            id: 1,
            text: "공부하기"
        },
        {
            id: 2,
            text: "공부하기"
        }
    ]);

    // 할일 등록 메서드
    const onSubmit = (text) => {
        const nextState = [...todoList.state, text];
        todoList.setState(nextState);

        setItem('todos', JSON.stringify(nextState));
    }

    const onDelete = (id) => {
        const nextState = todoList.state.filter(todo => todo.id !== id);
        todoList.setState(nextState);
      
    }
    
    new Header({$target});

    new TodoForm({
        $target,
        onSubmit
    })

    const todoList = new TodoList({
        $target, 
        intialState,
        onDelete
    })

}
