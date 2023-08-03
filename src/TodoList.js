export default function TodoList({$target}) {
    const $list = document.createElement('h1');
    $list.textContent = 'list';
    $target.appendChild($list);
}
