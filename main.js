const form = document.getElementById('form-atividade');
const contato = [];
const número = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {
    const inputContatosCadastrados = document.getElementById('nome-cadastrados');
    const inputNumeroCadastrados = document.getElementById('numero-cadastrados');
    
    if (contato.includes(inputContatosCadastrados.value)) {
        alert(`O número: ${inputContatosCadastrados.value} Já foi inserido`);
    } else {
        contato.push(inputContatosCadastrados.value);
        número.push(inputNumeroCadastrados.value)

        let linha = '<tr>';
        linha += `<td>${inputContatosCadastrados.value}</td>`;
        linha += `<td>${inputNumeroCadastrados.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputContatosCadastrados.value = '';
    inputNumeroCadastrados.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}