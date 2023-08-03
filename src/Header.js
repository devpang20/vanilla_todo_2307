export default function Header({$target}) {
    const $header = document.createElement('h1');
    $header.textContent = 'header';
    $target.appendChild($header);
}
