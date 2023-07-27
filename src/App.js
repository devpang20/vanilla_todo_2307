export default function App($target) {
    const $item = document.createElement('div');
    $item.innerHTML = `<ul> 
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                       </ul>`
    // DOM 출력 예시
    $target.innerHTML = `<h1>DOM 출력</h1>`;
    $target.appendChild($item)
}
