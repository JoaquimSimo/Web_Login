function esqueciSenha(){
    let usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));
    let mensagemErro = document.getElementById("mensagemErro");

    if (!usuarioCadastrado) {
        mensagemErro.textContent = "Nenhum usuário cadastrado!";
        return;
    }

    mensagemErro.textContent = "Sua senha cadastrada é: " + usuarioCadastrado.senha;
}

function toggleSenha(idCampo){
    const campo = document.getElementById(idCampo)
    campo.type = campo.type === "password" ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function(event)
{
    event.preventDefault(); //Impede o envio padrão do formulário

    //Pega os valores dos campos e remove os espaços em branco
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    //Seleciona as áreas de erro e a mensagem de sucesso
    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");
    let mensagemErro = document.getElementById("mensagemErro");
    let mensagemSucesso = document.getElementById("mensagemSucesso");

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagemErro.textContent = "";
    mensagemSucesso.textContent = "";
    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    let usuarioEncontrado = usuarios.find(u => u.email === email);
    
    if (!usuarioEncontrado) {
        erroEmail.textContent = "E-mail não encontrado!";
        return;
    }

    if (usuarioEncontrado.senha !== senha) {
        erroSenha.textContent = "Senha incorreta!";
        return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
    
    mensagemSucesso.textContent = "Login realizado com sucesso!";
    setTimeout(() => {
        window.location.href = "principal.html";
    }, 3000);
});