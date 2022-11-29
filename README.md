# Frontend Mentor - FAQ accordion card solution

Esta é uma solução para o desafio do componente do [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Os desafios do Fronted Mentor ajudam você a melhorar suas habilidades de codificacão criando projetos realistas. 

## Sumário

- [Resumo](#Resumo)
  - [Desafio](#Desafio)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [Processo](#Processo)
  - [Construido com](#construido-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Recursos útei](#recursos-úteis)
- [Autor](#autor)

## Resumo

O desafio é construir o projeto e deixá-lo o mais próximo possível do design. Podendo usar qualquer ferramenta para ajudar a concluir o desafio. 

### Desafio

Os usuários devem ser capazes de:

- Visualize o layout ideal dependendo do tamanho da tela do dispositivo;
- Veja os estados de foco para todos os elementos interativos na página;
- Ocultar/Mostrar a resposta a uma pergunta quando a pergunta é clicada.

### Screenshot

<p align="center">
    <img width="375px" src="/presentation/mobile.png"></img>
</p>

------

<p align="center">
    <img width="768px" src="/presentation/tablet.png"></img>
</p>

------

<p align="center">
    <img width="1024px" src="/presentation/desktop.png"></img>
</p>

### Link: https://mathmattar.github.io/FAQ-accordion-card/

## Processo

### Construido com

- Marcação semântica HTML5;
- Propriedades personalizadas CSS;
- Flexbox;
- CSS Grid;
- JavaScript

### O que eu aprendi

Mais funcionalidades do backgound, como:

```css
    background-image: url(/images/bg-pattern-mobile.svg);
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: 24rem;
    background-position-x: center;
    background-position-y: 0rem;
```



Utilizar o JS para exibir as respostas:

```js
    const activeBtns = document.querySelectorAll('.question');
    for (activeBtn of activeBtns) {
        activeBtn.onclick = exibirResposta;
    }
    function exibirResposta(e) {
        let resposta = e.target.parentNode.nextElementSibling;
        resposta.classList.toggle('show');

    }
```



### Useful resources

- [Dropdown](https://www.w3schools.com/howto/howto_js_dropdown.asp) 
- [Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp)
- [Background](https://www.w3schools.com/css/css_background.asp)
- [Picture](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_picture)

## Author

-  Site pessoal - [Mathews Mattar](https://www.linkedin.com/in/mathewsmattar/)

  
