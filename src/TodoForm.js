export default function TodoForm({$target}) {
    const $form = document.createElement('h1');
    $form.textContent = 'form';
    $target.appendChild($form);
}
