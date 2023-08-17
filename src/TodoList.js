export default function TodoList({ $target, intialState, onDelete, onToggle }) {
    const $list = document.createElement('div');
    $target.appendChild($list);

    this.state = intialState;

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    $list.addEventListener('click', e => {
        if (e.target.classList.contains('delete-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            onDelete(id);
        } else if (e.target.classList.contains('toggle-checkbox')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            onToggle(id);
        }
    });


    this.render = () => {

        $list.innerHTML = `
            <ul>
                ${this.state.map(todo => `
                <li style="text-decoration: ${todo.checked ? 'line-through' : 'none'}">
                    <input type=checkbox ${todo.checked ? 'checked' : ''} class="toggle-checkbox" data-id="${todo.id}" />
                    ${todo.id}
                    <span>${todo.text}</span>
                    <button class="delete-btn" data-id="${todo.id}">삭제</button>
                </li>`).join('')}
            </ul>
        `
    }
    this.render()
}
