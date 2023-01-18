// função para ler o elemento e verificar se o botao submit foi acionado.

const form = document.querySelector("#form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // pegar o  input peso
    const inputPeso = e.target.querySelector('#peso');

    // pegar o  input altura
    const inputAltura = e.target.querySelector('#altura');

    // pegar valor do input peso
    const peso = Number(inputPeso.value);
    // pegar valor do input altura
    const altura = Number(inputAltura.value);

    //  verificar se o valor é valido
    if(!peso){
        setResultado('Peso invalido', false);
        return
    }
    if(!altura){
        setResultado('altura invalido', false);
        return
    }
    const imc = getImc(peso, altura);
    
    console.log(imc )
});



function getImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criarP(){
    // criar o paragrafo
    const p = document.createElement('p');
    return p;
};

// criar a função para mostrar o resultado(IMC)
function setResultado(msg, isValid){
    // buscar o Id
    const resultado = document.querySelector('#resultado');
    // reset da tag(cache)
    resultado.innerHTML = '';
    const p = criarP();
    p.innerHTML = msg;
    resultado.appendChild(p)
    
};
