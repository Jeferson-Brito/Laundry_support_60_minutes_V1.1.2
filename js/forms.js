        // Função para exibir o formulário de sugestão
        function exibirFormulario() {
            var formPopup = document.getElementById("form-popup");
            var overlay = document.getElementById("overlay");
            formPopup.style.display = "block";
            overlay.style.display = "block";
            limparCampos(); // Limpa os campos ao exibir o formulário
        }

        // Função para fechar o formulário de sugestão
        function fecharFormulario() {
            var formPopup = document.getElementById("form-popup");
            var overlay = document.getElementById("overlay");
            formPopup.style.display = "none";
            overlay.style.display = "none";
        }

        // Função para exibir a confirmação simulada
        function exibirConfirmacao() {
            var confirmationPopup = document.getElementById("confirmation-popup");
            confirmationPopup.style.display = "block";

            // Fecha o pop-up de confirmação após 5 segundos
            setTimeout(function() {
                confirmationPopup.style.animation = "fadeOut 1s";
                setTimeout(function() {
                    confirmationPopup.style.display = "none";
                }, 1000);
            }, 3000);
        }

        // Função para enviar o formulário
        function enviarFormulario() {
            // Validação dos campos
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var sugestao = document.getElementById("sugestao").value;

            if (nome && email && sugestao) {
                // Simulando o envio do formulário
                exibirConfirmacao();
                fecharFormulario();
                limparCampos(); // Limpa os campos após o envio
            } else {
                // Se algum campo estiver em branco, exibe mensagens de aviso
                if (!nome) {
                    document.getElementById("aviso-nome").textContent = "Campo obrigatório";
                }
                if (!email) {
                    document.getElementById("aviso-email").textContent = "Campo obrigatório";
                }
                if (!sugestao) {
                    document.getElementById("aviso-sugestao").textContent = "Campo obrigatório";
                }
            }
        }

        // Habilita o botão "Enviar" apenas quando todos os campos estiverem preenchidos
        document.getElementById("suggestion-form").addEventListener("input", function() {
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var sugestao = document.getElementById("sugestao").value;
            var enviarButton = document.getElementById("enviar-button");
            enviarButton.disabled = !(nome && email && sugestao);
        });

        // Limpa os campos do formulário e as mensagens de aviso
        function limparCampos() {
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("sugestao").value = "";
            document.getElementById("aviso-nome").textContent = "";
            document.getElementById("aviso-email").textContent = "";
            document.getElementById("aviso-sugestao").textContent = "";
            var enviarButton = document.getElementById("enviar-button");
            enviarButton.disabled = true;
        }

        function validarEmail() {
            var emailInput = document.getElementById("email");
            var emailValue = emailInput.value;
            var emailAviso = document.getElementById("email-aviso");
          
            if (emailValue.indexOf("@") === -1) {
              emailAviso.textContent = "O campo de e-mail deve conter um '@'.";
              emailInput.focus();
              return false;
            } else {
              emailAviso.textContent = ""; // Limpa o aviso se o e-mail for válido
            }
          
            return true;
          }
          
          document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("suggestion-form").addEventListener("submit", function(event) {
              const emailInput = document.getElementById("email");
              if (!emailInput.value.includes("@")) {
                // Campo de e-mail não contém o "@" - impede o envio e mostra uma mensagem de erro
                event.preventDefault(); // Impede o envio do formulário
              }
            });
          });
          