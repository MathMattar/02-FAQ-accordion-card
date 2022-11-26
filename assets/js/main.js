    const activeBtns = document.querySelectorAll('.question');
    for (activeBtn of activeBtns) {
        activeBtn.onclick = exibirResposta;
    }
    function exibirResposta(e) {
        let resposta = e.target.parentNode.nextElementSibling;
        resposta.classList.toggle('show');
    }
