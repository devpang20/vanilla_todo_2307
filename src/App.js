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

    let lastId = intialState[intialState.length - 1].id;

    // 할일 등록 메서드
    const onSubmit = (text) => {
        const nextState = todoList.state.concat([
            {
                id: lastId + 1,
                text,
            }
        ])
        lastId++;
        todoList.setState(nextState);
        setItem('todos', JSON.stringify(nextState));
    }

    // 할일 삭제 메서드
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
