export default function TodoForm({$target, onSubmit}) {
    const $form = document.createElement('form');
    $target.appendChild($form);

    this.render = () => {
        $form.innerHTML = `
            <input type='text' name='todo'>
            <button>입력</button>
        `

        $form.addEventListener('submit', e => {
            e.preventDefault();

            const $input = $form.querySelector('input');
            const text = $input.value;

            console.log(text)

            if (text.length > 1) {
                $input.value = '';
                onSubmit(text);
            }

        })
    }

    this.render();

}
