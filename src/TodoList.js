export default function TodoList({$target}) {
    const $list = document.createElement('div');
    $target.appendChild($list);

    $list.innerHTML = `
        <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
        </ul>
    `
}
