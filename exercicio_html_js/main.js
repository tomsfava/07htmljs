const numeroA = document.getElementById('A');
const numeroB = document.getElementById('B');
const form = document.getElementById('formulario');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');

form.addEventListener('submit', function (e){
    e.preventDefault();
   
    const mensagemErro = document.getElementById('mensagemErro')
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    const tabela = document.getElementById('tabela');
    if ((numeroB.value)>(numeroA.value)){
        console.log(numeroB.value);
        mensagemSucesso.style.display = 'block';
        a1.innerHTML = `número B: ${numeroB.value}`;
        b1.innerHTML = `número A: ${numeroA.value}`;
        a2.innerHTML = `${numeroB.value}-${numeroA.value}`;
        a3.innerHTML = `${numeroA.value}*${numeroB.value}`;
        a4.innerHTML = `${numeroB.value}/${numeroA.value}`;
        a5.innerHTML = `${numeroA.value}+${numeroB.value}`;
        b2.innerHTML = `${(numeroB.value)-(numeroA.value)}`;
        b3.innerHTML = `${(numeroA.value)*(numeroB.value)}`;
        b4.innerHTML = `${(numeroB.value)/(numeroA.value)}`;
        b5.innerHTML = `${(numeroA.value)+(numeroB.value)}`;
    
        tabela.style.display = 'block'
        mensagemErro.style.display = 'none'
        numeroA.value=''
        numeroB.value=''

    } else {


        mensagemErro.style.display = 'block'
        mensagemSucesso.style.display = 'none'
        tabela.style.display = 'none'
        numeroA.value = ''
        numeroB.value = ''
    }
})
 
