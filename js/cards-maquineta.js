// Quando a página é carregada, exibe o modal geral com animação
window.addEventListener("load", function() {
  const modalGeral = document.getElementById("myModalGeral");
  modalGeral.classList.add("show"); // Adicione a classe 'show' para exibir com animação
});

function closePopupGeral() {
  const modalGeral = document.getElementById("myModalGeral");
  modalGeral.style.display = "none";
}

function openPopup(popupNumber) {
  document.getElementById("popup" + popupNumber).style.display = "block";
}

function closePopup(popupNumber) {
  document.getElementById("popup" + popupNumber).style.display = "none";
}
