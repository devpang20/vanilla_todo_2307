export default function Header({$target}) {
    const $header = document.createElement('h1');
    $target.appendChild($header);

    this.render = () => {
        $header.textContent = 'TODO APP 만들기';
    }

    this.render();
}
