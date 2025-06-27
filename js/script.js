function mostrarMensagem() {
  alert("Proposta de cadastro enviada, obrigado por nos ajudar, retornaremos seu contato!");
}

// Função enviarFormulario atualizada para exibir mensagem na página, sem alert
function enviarFormulario(event) {
  event.preventDefault();

  // Exibe a mensagem de confirmação na página
  const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
  if (mensagemConfirmacao) {
    mensagemConfirmacao.style.display = "block";
  }

  // Limpa o formulário
  event.target.reset();

  // Esconde a mensagem após 5 segundos
  setTimeout(() => {
    if (mensagemConfirmacao) {
      mensagemConfirmacao.style.display = "none";
    }
  }, 10000);
}

function abrirModal(imagem) {
  const modal = document.getElementById("modal");
  const imgModal = document.getElementById("imgModal");

  imgModal.src = imagem.src;
  modal.style.display = "block";
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function toggleLeiaMais() {
  const maisTexto = document.getElementById("maisTexto");
  const botao = document.getElementById("botaoLeiaMais");

  if (maisTexto.style.display === "none") {
    maisTexto.style.display = "block";
    botao.textContent = "Leia menos";
  } else {
    maisTexto.style.display = "none";
    botao.textContent = "Leia mais";
  }
}
