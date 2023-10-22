document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", function () {
      var searchTerm = searchInput.value.toLowerCase().trim();
      performSearch(searchTerm);
    });

    // Função para executar a pesquisa
    function performSearch(term) {
      if (term === "") {
        alert("Digite algo na barra de pesquisa.");
        return;
      }

      var products = {

        /*Palavras chaves para busca de maquineta*/
        "maquineta": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquineta de cartão offline": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquineta de cartão desligada": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquineta desligada": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquineta offline": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquininha": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquininha offline": "Navigation/Cards/Maquineta/Maquineta.html",
        "maquininha desligada": "Navigation/Cards/Maquineta/Maquineta.html",
        "cartão": "Navigation/Cards/Maquineta/Maquineta.html",
        "debito": "Navigation/Cards/Maquineta/Maquineta.html",
        "credito": "Navigation/Cards/Maquineta/Maquineta.html",
        "crédito": "Navigation/Cards/Maquineta/Maquineta.html",
        "pagamentos em cartão": "Navigation/Cards/Maquineta/Maquineta.html",
        "pagamento em cartão": "Navigation/Cards/Maquineta/Maquineta.html",
        "estorno": "Navigation/Cards/Maquineta/Maquineta.html",
        "extorno": "Navigation/Cards/Maquineta/Maquineta.html",

        /*Palavras chaves para busca do ar-condicionado*/
        "ar-condicionado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "ar": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "condicionado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "arcondicionado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "sensor": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "sensor offline": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "sensor desligado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "comandos para o ar-condicionado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "comandos para o ar": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "comandos para ar-condicionado": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "airon1": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "airon2": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",
        "airon3": "Navigation/Cards/Ar-condicionado/Ar-condicionado.html",

        /*Palavras chaves para busca de lavadoras e secadoras*/
        "lavadora": "Navigation/Cards/Lavadoras/Lavadoras.html",
        "tabela de códigos de erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela de código de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela de código de erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela códigos de erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela código de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela códigos de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela de códigos": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela de código": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela código": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela códigos": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "códigos tabela": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "códigos tabelas": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "código tabelas": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "códigos de erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "código de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "códigos de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabela de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabelas de erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabelas de erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabelas erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "tabelas erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "erros": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "erro": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "códigos": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "codigos": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "codigo": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "painel": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "visor": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "de1": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "de2": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "ie": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "oe": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "ue": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "fe": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "le": "Navigation/Cards/Lavadoras/Sub-cards/Tabela-códigos-erros.html",
        "432": "Navigation/Cards/Lavadoras/lavadoras.html",
        "543": "Navigation/Cards/Lavadoras/lavadoras.html",
        "654": "Navigation/Cards/Lavadoras/lavadoras.html",
        "765": "Navigation/Cards/Lavadoras/lavadoras.html",
        "876": "Navigation/Cards/Lavadoras/lavadoras.html",
        "987": "Navigation/Cards/Lavadoras/lavadoras.html",
        "lavadora 432": "Navigation/Cards/Lavadoras/lavadoras.html",
        "lavadora 543": "Navigation/Cards/Lavadoras/lavadoras.html",
        "lavadora 654": "Navigation/Cards/Lavadoras/lavadoras.html",
        "lavadoura": "Navigation/Cards/Lavadoras/lavadoras.html",
        "maquina 432": "Navigation/Cards/Lavadoras/lavadoras.html",
        "maquina 543": "Navigation/Cards/Lavadoras/lavadoras.html",
        "maquina 654": "Navigation/Cards/Lavadoras/lavadoras.html",
        "maquinas": "Navigation/Cards/Lavadoras/lavadoras.html",
        "lavadoras": "Navigation/Cards/Lavadoras/lavadoras.html",
        "secadora": "Navigation/Cards/Lavadoras/lavadoras.html",
        "secadoras": "Navigation/Cards/Lavadoras/lavadoras.html",
        "secadora 765": "Navigation/Cards/Lavadoras/lavadoras.html",
        "secadora 876": "Navigation/Cards/Lavadoras/lavadoras.html",
        "secadora 987": "Navigation/Cards/Lavadoras/lavadoras.html",

        /*Palavras chaves para busca do totem*/

        "totem": "Navigation/Cards/Totem/Totem.html",
        "notebook": "Navigation/Cards/Totem/Totem.html",
        "totem desligado": "Navigation/Cards/Totem/Totem.html",
        "toques fantasmas": "Navigation/Cards/Totem/Totem.html",
        "toque fantasma": "Navigation/Cards/Totem/Totem.html",
        "toques fantasma": "Navigation/Cards/Totem/Totem.html",
        "toque fantasmas": "Navigation/Cards/Totem/Totem.html",
        "totem com toques fantasmas": "Navigation/Cards/Totem/Totem.html",
        "totem com toque fantasma": "Navigation/Cards/Totem/Totem.html",
        "notebook com toques fantasmas": "Navigation/Cards/Totem/Totem.html",
        "get": "Navigation/Cards/Totem/Totem.html",
        "reset": "Navigation/Cards/Totem/Totem.html",
        "ativação": "Navigation/Cards/Totem/Totem.html",
        "ativação de loja": "Navigation/Cards/Totem/Totem.html",
        "ativações de lojas": "Navigation/Cards/Totem/Totem.html",
        "ativações das lojas": "Navigation/Cards/Totem/Totem.html",
        "configuração": "Navigation/Cards/Totem/Totem.html",
        "configuração do totem": "Navigation/Cards/Totem/Totem.html",
        "configuração do notebook": "Navigation/Cards/Totem/Totem.html",

        /*Palavras chaves para busca do noteiro*/

        "noteiro": "Navigation/Cards/Noteiro/Noteiro.html",
        "noteiro offline": "Navigation/Cards/Noteiro/Noteiro.html",
        "noteiro desligado": "Navigation/Cards/Noteiro/Noteiro.html",
        "dinheiro": "Navigation/Cards/Noteiro/Noteiro.html",
        "pagamento em dinheiro": "Navigation/Cards/Noteiro/Noteiro.html",
        "nt": "Navigation/Cards/Noteiro/Noteiro.html",
        "ntr": "Navigation/Cards/Noteiro/Noteiro.html",

        /*Palavras chaves para busca do modem*/

        "modem": "Navigation/Cards/Modem/Modem.html",
        "mikrotik": "Navigation/Cards/Modem/Modem.html",
        "roteador": "Navigation/Cards/Modem/Modem.html",
        
        /*Palavras chaves para busca do helpdesk*/

        "roupas sem cheiro": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "roupas sairam sem cheiro": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "roupas saíram sem cheiro": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "roupas saíram manchadas": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "roupas sairam manchadas": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "roupas": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "cliente esqueceu as roupas na loja": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "cliente esqueceu as roupas na lavanderia": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "cliente esqueceu as roupas": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "esqueceu as roupas": "Navigation/helpdesk/Cards-SAC/Problemas-Roupas/Roupas.html",
        "loja fisica": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "loja física": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problemas com o pagamento em loja fisica": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problemas com o pagamento em loja física": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problema com o pagamento em loja física": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problema com o pagamento em loja fisica": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problema com o pagamento na loja fisica": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problema com o pagamento na loja física": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problemas com o pagamento na loja física": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problemas com o pagamento na loja fisica": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-física/Loja-fisica.html",
        "problemas com o pagamento em loja online": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-online/Loja-online.html",
        "problema com o pagamento em loja online": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-online/Loja-online.html",
        "problemas com o pagamento na loja online": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-online/Loja-online.html",
        "problema com o pagamento na loja online": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-online/Loja-online.html",
        "loja online": "Navigation/helpdesk/Cards-SAC/Problemas-pagamentos/Loja-online/Loja-online.html",
    
      };

      var pageURL = products[term];
      if (pageURL) {
        window.location.href = pageURL;
      } else {
        alert("Problema não encontrado. Pesquise pelo nome do produto!");
      }
    }

    // Limpar campo de busca ao clicar fora dele
    document.addEventListener("click", function (event) {
      var isSearchInput = searchInput.contains(event.target);
      if (!isSearchInput) {
        searchInput.value = "";
      }
    });

    // Pesquisar ao pressionar a tecla Enter
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        var searchTerm = searchInput.value.toLowerCase().trim();
        performSearch(searchTerm);
      }
    });
  });