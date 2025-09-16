const userId = 1; // ⚡ aqui você coloca o ID do usuário logado (pode vir do login)

// Elementos da tela
const nomeEl = document.querySelector('.perfil-dados h2');
const emailEl = document.querySelector('.perfil-dados p:nth-of-type(1)');
const telefoneEl = document.querySelector('.perfil-dados p:nth-of-type(2)');
const enderecoEl = document.querySelector('.perfil-dados p:nth-of-type(3)');

// ---- 1. Buscar dados do usuário ao carregar ----
window.addEventListener("load", () => {
  fetch(`http://localhost:8080/api/usuarios/${userId}`)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao buscar usuário");
      return res.json();
    })
    .then(usuario => {
      nomeEl.innerText = usuario.nome;
      emailEl.innerHTML = `<strong>Email:</strong> ${usuario.email}`;
      telefoneEl.innerHTML = `<strong>Telefone:</strong> ${usuario.telefone}`;
      enderecoEl.innerHTML = `<strong>Endereço:</strong> ${usuario.endereco}`;
    })
    .catch(err => console.error(err));
});

// ---- 2. Salvar alterações no backend ----
const salvarBtn = modal.querySelector('#salvar');

salvarBtn.addEventListener('click', () => {
  const nome = modal.querySelector('input[type="text"]').value;
  const email = modal.querySelector('input[type="email"]').value;
  const telefone = modal.querySelector('input[type="tel"]').value;
  const endereco = modal.querySelector('input[type="text"]:last-of-type').value;

  const usuario = { nome, email, telefone, endereco };

  fetch(`http://localhost:8080/api/nerdchip/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao salvar");
      return res.json();
    })
    .then(data => {
      alert("Perfil atualizado!");
      nomeEl.innerText = data.nome;
      emailEl.innerHTML = `<strong>Email:</strong> ${data.email}`;
      telefoneEl.innerHTML = `<strong>Telefone:</strong> ${data.telefone}`;
      enderecoEl.innerHTML = `<strong>Endereço:</strong> ${data.endereco}`;
      modal.style.display = 'none';
    })
    .catch(err => alert(err));
});
