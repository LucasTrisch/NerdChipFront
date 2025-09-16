document.addEventListener("DOMContentLoaded", () => {
    const btnAdicionar = document.getElementById("btnAdicionar");
  
    btnAdicionar.addEventListener("click", () => {
      const quantidade = document.getElementById("quantidade").value;
      alert(`✅ ${quantidade} unidade(s) adicionada(s) ao carrinho!`);
      // Aqui você pode implementar lógica de salvar no carrinho (localStorage ou API)
    });
  });
  