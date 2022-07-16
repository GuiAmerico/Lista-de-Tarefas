let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add');
let tarefa = document.getElementById('areaLista')
let contador = 0
function addTarefa(){

    let valorInput = input.value;
    
    if ( (valorInput !== "") && (valorInput !== undefined) && (valorInput !== null) ){

        contador++

        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcado(${contador})">
            <i id="icone_${contador}" class="bi bi-circle"></i>
        </div>
        <div class="item-nome" onclick="marcado()">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button  onclick="deletar(${contador})" class="deletar"><i class="bi bi-trash"></i> Deletar</button>
        </div>
    </div>`;

    tarefa.innerHTML += novoItem

    input.value = "";
    input.focus();

    
    }

}

function marcado(id){
    var feito = document.getElementById(id)
    var classe = feito.getAttribute('class')
    

    if (classe == "item"){
        feito.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
    

        icone.classList.remove('bi')           
        icone.classList.remove('bi-circle')
        icone.classList.add('bi')
        icone.classList.add('bi-check-circle')
        icone.classList.add('green')
        
        feito.parentNode.appendChild(feito)
    
    }else{
        feito.classList.remove('clicado')
        var icone = document.getElementById('icone_' + id)

        icone.classList.remove('bi')
        icone.classList.remove('bi-check-circle')
        icone.classList.remove('green')
        icone.classList.add('bi')           
        icone.classList.add('bi-circle')

    }
}

function deletar(id){
    let apagar = document.getElementById(id).remove()
    
    
    
}

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

