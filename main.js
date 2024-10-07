function criacartao(categoria, pergunta, resposta){
    let container = document.getElementById('conteiner');
    let cartao = document.getElementById('article')
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="conteudo-cartao">
        <p>pergunta</p>
    </div>
    <div class="resposta-cartao">
        <p>resposta</p>
    </div>
`
container.appendChild(cartao);
}