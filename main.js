function criacartao(categoria, pergunta, resposta){
    let container = document.getElementById('conteiner');
    let cartao = document.getElementById('article')
    cartao.className = 'cartao';
    cartao.innerHTML =   
    <div class="conteudo-cartao">
       <h3>${categoria}</h3>
    <div class="resposta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    container.appendChild(cartao);
}