function toggleSenha(idCampo){
    const campo = document.getElementById(idCampo);
    campo.type = campo.type === "password" ? "text" : "password";
}

document.getElementById("cadastroForm").addEventListener("submit", function(event)
{
    event.preventDefault(); //Impede o envio padrão do formulário

    //Pega os valores dos campos e remove os espaços em branco
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let senha = document.getElementById("senha").value.trim();

    //Seleciona as áreas de erro e a mensagem de sucesso
    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroTelefone = document.getElementById("erroTelefone");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    //Limpar as mensagens gravadas anteriormente
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroTelefone.textContent = "";
    erroSenha.textContent = "";
    mensagemSucesso.textContent = "";

    let valido = true; //Flag para indicar se todos os campos foram validados
 
    if (nome === "") {
        erroNome.textContent = "O campo nome é obrigatório!";
        valido = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        erroEmail.textContent = "O campo e-mail é inválido!";
        valido = false;
    }

    if (telefone === "") {
        erroNome.textContent = "O campo telefone é obrigatório!";
        valido = false;
    }

    if (senha.length < 6) {
        erroSenha.textContent = "A senha deve ter no mínimo 6 caracteres"
        valido = false
    }

    if (valido) {
        let usuario = { nome, email, telefone, senha };

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        this.reset();

        setTimeout(() => {
        window.location.href = "login.html"; // Redirecionamento fictício
    }, 2000);
    }
});