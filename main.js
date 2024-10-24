function criacartao(categoria, pergunta, resposta) {
    let container = document.getElementById('conteiner');
    let cartao = document.getElementById('article')
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <div class="conteudo-cartao" >
       <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${perguntas}</p>
    </div>
    <div class="resposta-cartao">
        <p>${respostas}</p>
    </div>
</div >
        `
    container.appendChild(cartao);
}