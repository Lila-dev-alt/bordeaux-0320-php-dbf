const initializeSelects = () => {
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
}

const lineHider = (className) => {
    const lines = document.getElementsByClassName(className);
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.add('hide');
    }
};

const btnDesactivator = (className) => {
    const buttons = document.getElementsByClassName(className);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btn-floating', 'light-blue');
    }
};

const editor = (button, url, classLine, classBtn, entity) => {
    lineHider(classLine);
    btnDesactivator(classBtn);
    button.classList.add('btn-floating', 'light-blue');
    fetch(url, {
        method: 'GET',
    }).then((response) => {
        return response.text();
    }).then((html) => {
        const cell = document.getElementById(`${entity}-td-edit-${button.dataset.target}`);
        cell.innerHTML = html;
        initializeSelects();
    });
    const editLine = document.getElementById(`${entity}-line-edit-${button.dataset.target}`);
    editLine.classList.remove('hide');
};

document.addEventListener('DOMContentLoaded',() => {
    //edition des subjects
    const editorSubjectButtons = document.getElementsByClassName('edit-subject-button');
    for (let i = 0; i < editorSubjectButtons.length; i++) {
        editorSubjectButtons[i].addEventListener('click', (event) => {
            editor(editorSubjectButtons[i], `/subject/${editorSubjectButtons[i].dataset.target}/edit`, 'editor-line', 'edit-subject-button', 'subject')
        });
    }
    // fin edition subjects
    const editorCivilityButtons = document.getElementsByClassName('edit-civility-button');
    for (let i = 0; i < editorCivilityButtons.length; i++) {
        editorCivilityButtons[i].addEventListener('click', (event) => {
            console.log(event);
            editor(editorCivilityButtons[i], `/civility/${editorCivilityButtons[i].dataset.target}/edit`, 'editor-line', 'edit-civility-button', 'civility')
        });
    }
}) //end of document
