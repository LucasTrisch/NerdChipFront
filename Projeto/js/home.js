// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".product-search");
    const searchButton = document.querySelector(".busca-produtos button");
  
    // Quando clicar no botão de pesquisa
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
  
      if (query === "") {
        alert("Digite algo para pesquisar 🔎");
      } else {
        // Por enquanto só mostra um alerta (pode trocar por busca real no futuro)
        alert(`Você pesquisou por: ${query}`);
      }
    });
  
    // Se apertar Enter dentro do input, também dispara a pesquisa
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        searchButton.click();
      }
    });
  });
  