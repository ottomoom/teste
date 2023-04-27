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
    addItem()
});

//Terminal Local Storage
var arr = [];
 //adiciona um item array dentro do Local Storage
        function addItem(){
            //Caso ja exista um item dentro, salva o primeiro item no js, e em seguida salva o novo item no Local Storage
           if (localStorage.meuArr){             
              arr = JSON.parse(localStorage.getItem('meuArr')); 
           }
           //realiza o processo de salvar o item no local storage
           let novoItem = document.getElementById("username").value;
           arr.push(novoItem);
           document.getElementById("username").value = "";
           localStorage.meuArr = JSON.stringify(arr);
        }
        //A funçao JSON realiza uma transcrição de array para str e de str para array
