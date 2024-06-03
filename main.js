const form = document.getElementById('formDeposito')
const nomeBeneficiario = document.getElementById('nomeBeneficiario');
let formEValido = false;

function validaNome (nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numeroDaConta');
    const valorDeposito = document.getElementById('valorDeposito');
    const mensagemDeSucesso = `Montante de: R$ <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-de-sucesso')
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''

    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.mensagem-de-erro').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido) {
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.mensagem-de-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        //nomeBeneficiario.style = ''
        document.querySelector('.mensagem-de-erro').style.display = 'none';        
    }
})