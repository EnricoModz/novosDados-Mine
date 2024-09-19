function buscar() {
    //dunção para carregar o JSON para consumir a API e processa os dados JSON
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        var indentificador = document.getElementById('valor').value

        corpo.forEach(pessoa => {
            if(indentificador == pessoa.cpf) {
                //JQUERy
                var linkSite = '<a href="${pessoa.link}">Visite nosso site</a>'
                document.getElementById('img').innerHTML = pessoa.img;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('tipo').innerHTML = pessoa.tipo;
                document.getElementById('altura').innerHTML = pessoa.altura;
                document.getElementById('fraqueza').innerHTML = pessoa.fraqueza;
                document.getElementById('erro').innerHTML = ""
                encontrado = true;
            }
        })
        if(!encontrado){
            document.getElementById('erro').innerHTML = "Registro inválido"
        }
        
        console.log(corpo)
    })
}