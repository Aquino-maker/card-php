const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
option.addEventListener('click', () => {
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
});
});

document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.event-theme-button');
    const form = document.querySelector('form');

    let selectedTheme = null; // Armazena o tema selecionado

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'selected' de todos os botões
            themeButtons.forEach(btn => btn.classList.remove('selected'));

            // Adiciona a classe 'selected' ao botão clicado
            this.classList.add('selected');

            // Atualiza o tema selecionado
            selectedTheme = this.dataset.theme;

            // Cria um campo oculto para armazenar o tema selecionado
            let themeInput = document.getElementById('selected-theme');
            if (!themeInput) {
                themeInput = document.createElement('input');
                themeInput.type = 'hidden';
                themeInput.name = 'theme';
                themeInput.id = 'selected-theme';
                form.appendChild(themeInput);
            }
            themeInput.value = selectedTheme;
        });
    });

    // Adiciona um ouvinte de evento para o envio do formulário (opcional)
    form.addEventListener('submit', function(event) {
        if (!selectedTheme) {
            alert('Por favor, selecione um tema para o evento.');
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});

const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});

const coverImageInput = document.getElementById('cover-image');
const fileNameSpan = document.querySelector('.file-name');

coverImageInput.addEventListener('change', () => {
    if (coverImageInput.files.length > 0) {
        fileNameSpan.textContent = coverImageInput.files[0].name;
    } else {
        fileNameSpan.textContent = 'Nenhum arquivo selecionado';
    }
});