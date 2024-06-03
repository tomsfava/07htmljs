# Modulo 7 Integrando HTML com JavaScript
## Notas
### Aula 01 'Documento HTML com DOM'
#### **Sobre a aula**
* compreender o conceito e estrutura do DOM;
* entender a relação entre os diferentes níveis da estrutura do DOM;
* manipular elementos e atributos do DOM com JavaScript;
* aplicar eventos e interação no DOM.
#### **Anotações**
como selecionar elementos HTML usando o JS, recuperar e manipular atributos dos elementos.  
com o html podemos adicionar algumas validações por exemplo: campos obrigatórios, valor mínimo e máximo  
porém não temos validação complexa, por exemplo: requerer nome completo  
aprenderemos adicionar eventos, por exemplo sempre que um campo for alterado uma função JS será chamada  
**DOM** Document Object Model: representação do documento HTML, navegador da acesso ao documento através do **DOM**  
o professor realizou uma serie de comandos no console do Dev Tools, comandos de acesso ao documento HTML e comandos que modificam a estrutura HTML em si  
ainda não ficou claro pra mim o que é DOM.  
### Aula 02 'Selecione elementos com JavaScript'
#### **Sobre a aula**
* compreender os métodos de seleção de elementos do **DOM**;
* aplicar seletores complexos e encadeados;
* manipular elementos selecionados.
#### **Anotações**
diversos tipos de seletores:  
  
document.getElementByTagName ()  
document.getElementByID ()  
document.getElementByClassName ()  
document.querySelector ()  retorna o primeiro item, exemplos de seletores: ('input[type=number]') ('input#numeroDaConta')  
document.querySelectorAll ()  
### Aula 03 'Desenvolva formulários com JavaScript'
#### **Sobre a aula**
* usar o JavaScript para manipular formulários;
* implementar validações personalizadas de formulários;
* hailitar e desabilitar elementos com bbase em validações;
* recuperar valores de campos usadas para formulários.
#### **Anotações**
primeiro criamos uma variável cujo conteúdo é a tag que queremos trabalhar  
**let** nomeBeneficiario = document.getElementById ('nomeBeneficiario') 
em seguida usamos o comando nomeBeneficiario.value para verificar que o valor dentro do input é '' (ou seja, sem valor)  
em seguida podemos adicionar um valor utilizando o comando nomeBeneficiario.value = 'Tomás Fava', por exemplo  
nomeBeneficiario.type, nomeBeneficiario.id, nomeBeneficiario.required, nomeBeneficiario.placeholder; cada um desses comandos vai retornar o atributo selecionado  
agora podemos criar um sistema de validação para que o botão somente funcione se o valor de nomeBeneficiario tiver dois ou mais nomes para isso:  
usamos o recurso split para quebrar uma string em um array através de um separador no caso usamos como separador o valor ' ' (espaço)  
assim, já que o valor de nomeBeneficiário é 'Tomás Fava', utilizando nomeBeneficiario.value.split(' ') receberemos de volta uma array de 2 elementos: 'Tomás' e 'Fava'  
assim sendo, chamando nomeBeneficiario.value.split(' ').lenght receberemos de volta o valor 2  
com isso podemos definir que o botão será desabilitado se o valor de nomeBeneficiario.value.split(' ').lenght<2 fazemos isso da seguinte forma:  
getElementById('btnDepositar').disabled = nomeBeneficiario.value.split(' ').lenght<2 (se lenght <2 o valor da expressão é true e assim disabled também é true)
### Aula 04 'Adicione eventos a elementos HTML'
#### **Sobre a aula**
* compreender a necessidade e a importância de adicionar eventos a elementos HTML usando JavaScript;
* criar funções de manipulação de eventos em elementos HTML;
* implementar interatividade dinâmica em páginas da web através da manipulação de eventos.
#### **Anotações**
criamos o arquivo main.js, anexamos esse arquivo ao documento HTML através da tag script  
js é um código bloqueante, por isso colocamos a tag script no final da tag body  
no arquivo main.js criamos uma **const** de nome form cujo conteúdo é toda a tag form, a qual demos o Id='formDeposito'  
queremos alterar o evento de submissão do formulário, para isso chamamos a **const** form e adicionamos a função .addEventListener com os parametros ('submit'(nome do evento), e function (e){}(o que vai acontecer))  
dentro da function (e){
    e.preventDefault();
}  
isso irá evitar que o comportamento default do evento seja iniciado  
em seguida vamos criar o sistema de validação, primeiro criamos a função validaNome que retorna true se nomeComoArray.length for >=2 e false se não for, o parametro dessa função é nomeCompleto, criamos **const** nomeComoArray como sendo nomeCompleto.split(' ')  
próximo, dentro da function parametro de form.addEventListener criamos **let** formEValido e declaramos seu valor como false, na próxima linha declaramos que **let** formEValido = validaNome(nomeBeneficiario.value) sendo que **const** nomeBeneficiario corresponde a document.getElementById('nomeBeneficiario'), assim, se a função retorna true formEValido, e uma mensagem com os valores todos (nome, numero da conta e valor do deposito) confirma o sucesso do pagamento, senão, uma mensagem anuncia que o nome não está completo  
por fim simplesmente resetamos o formulário declarando dentro do if que todas as const.value referentes aos inputs do formulário possuem '' como valor.
### Aula 05 'Estilize elementos com JavaScript'
#### **Sobre a aula**
* aplicar estilos dinamicamente a elementos HTML usando JavaScript;
* usar classes CSS em conjunto com JavaScript para adicionar e remover estilos de elementos;
* criar e adicionar classes personalizadas para modificar o estilo dos elementos;
* usar estilos para realçar ou destacar elementos inválidos para facilitar o feedback visual ao usuário.
#### **Anotações**
Nessa aula vamos alterar boa parte do código para incluir dinâmicas dentro da página substituindo os alertas do navegador.  
Primeiro, no documento HTML, criamos um paragrafo com a mensagem de sucesso, abaixo do formulário (dentro da div) e acima do script.  
Através do código document.querySelector('.mensagem-de-sucesso') criamos a **const** containerMensagemSucesso, chamando a função innerHTML adicionamos o conteúdo de mensagemDeSucesso ao paragrafo cuja classe é mensagem-de-sucesso  
Esse processo somente ocorre se formEValido
Para ocultar o padding colorido do paragrafo vazio que será preenchido caso formEValido configuramos o display: none;  
Esse valor será alterado se formEValido através do código containerMensagemSucesso.style.display = 'block';  
Agora para adicionar uma mensagem na tela debaixo do primeiro campo do formulário (avisando que o nome precisa ser completo), repetimos o procedimento de criar um paragrafo com display:none;  que terá display:block; através do script.  
Para isso adicionamos o script que altera o display para block dentro do else da função addEventListener, substituindo a função alert anterior.  
Em seguida, para tornar ainda mais dinâmico, adicionamos um novo addEventListener dessa vez com o parametro keyup e definimos dentro da função parametro que através da função validaNome com (e.target.value) como parametro, if !formEValido display block e borda vermelha para nomeBeneficiario, else nomeBeneficiario.style = '' e display none para o paragrafo de erro.  
Depois resolvemos a mesma questão de outra forma, ao invés de alterar o style diretamente no elemento através do JS, nós criamos uma classe CSS e através do JS adicionamos ela if !formEValido  
Esse segundo metodo é mais recomendado por ser mais reutilizável.  
### **PRATIQUE**
Na atividade prática deste módulo, você irá praticar todos os conceitos aprendidos.  
  
1. Crie um formulário HTML que possua dois campos numéricos:  
* campo A
* campo B
2. Insira um botão para submeter o formulário. 
3. Cria uma validação no JavaScript na qual o formulário será válido caso o número B seja **maior** que o número A.
4. Exiba uma mensagem positiva para o usuário quando o formulário for válido e uma mensagem negativa quando for inválido.
5. Suba no Github no repositório do curso em uma branch chamada exercicio_html_js.