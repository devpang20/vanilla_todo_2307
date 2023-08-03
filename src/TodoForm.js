export default function TodoForm({$target}) {
    const $form = document.createElement('form');
    $target.appendChild($form);

    $form.innerHTML = `
        <input type='text' name='todo'>
        <button>입력</button>
    `

}
