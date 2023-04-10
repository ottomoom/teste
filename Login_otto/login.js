//Seleciona o formulario "id = form"
const form = document.querySelector('form');
//escuta oque acontece dentro de um evento("Ação", consequencia)
form.addEventListener('submit', function(event) {
    //Evita que a pagina de reload, e perca as informações do formulario
    event.preventDefault();
    //pega os valores
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    //Abre uma nova guia, onde serão exibidas as informações digitadas pelo usário
    window.open('resultado.html?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password), '_blank');
});
