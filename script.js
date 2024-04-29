const mode = document.getElementById('moon_icone');
mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    // se refera a troca de icone da lua
    if(mode.classList.contains('fa-moon')){
        // remove o icone
        mode.classList.remove('fa-moon');
        // adiciona um icone de sol
        mode.classList.add('fa-sun');

        form.classList.add('dark');

        return;
    }
        // retorna a forma light do projeto
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        form.classList.remove('dark');
});