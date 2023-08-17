import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";

export default function App({$target}) {
    // 초기화 데이터
    const intialState = getItem('todos', [
        {
            id: 1,
            text: "공부하기",
            checked: true
        },
        {
            id: 2,
            text: "공부하기",
            checked: true
        }
    ]);

    // 등록 고유 id
    let lastId = intialState[intialState.length - 1].id;

    // 할일 등록 메서드
    const onSubmit = (text) => {
        const nextState = todoList.state.concat([
            {
                id: lastId + 1,
                text,
                checked: false
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
        setItem('todos', JSON.stringify(nextState));
    }

    // 할일 체크 여부
    const onToggle = (id) => {
        const nextState = todoList.state.map(todo => 
            todo.id === id ? {...todo, checked: !todo.checked} : todo
        );
        todoList.setState(nextState);
        setItem('todos', JSON.stringify(nextState));
    }

    new Header({$target});

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
