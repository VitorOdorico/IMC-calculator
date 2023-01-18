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
    
    const nivelImc = getNivelImc(imc);

    console.log(imc, nivelImc )
    const msg = `seu IMC: ${imc} nivel: (${nivelImc})`
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if(imc >= 39.9){
        return nivel[5]
    }
    if(imc >= 34.9){
        return nivel[4]
    }
    if(imc >=29.9){
        return nivel[3]
    }
    if(imc >= 24.9){
        return nivel[2]
    }
    if(imc >= 18.5){
        return nivel[1]
    }
    if(imc < 18.5){
        return nivel[0]
    }

}


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

    if(isValid){
        p.classList.add('paragrafo-resultado')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
    
};
