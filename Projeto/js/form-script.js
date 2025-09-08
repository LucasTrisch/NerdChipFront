document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário pelo seu ID
    const form = document.querySelector('form');

    // Adiciona um "ouvinte de evento" para o envio do formulário
    form.addEventListener('submit', async (event) => {
        // Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Coleta os dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value,
            telefone: document.getElementById('telefone').value,
            endereco: document.getElementById('endereco').value
        };

        // URL do seu endpoint de cadastro na API Spring Boot
        const apiUrl = 'http://localhost:8080/api/cadastro';

        try {
            // Envia a requisição POST para a API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                form.reset(); // Limpa o formulário
            } else {
                // Se a API retornar um erro
                const errorData = await response.json();
                alert(`Erro ao cadastrar: ${errorData.message || 'Verifique se a API está funcionando.'}`);
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Não foi possível se conectar com o servidor. Tente novamente mais tarde.');
        }
    });
});