/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (parametro) => { return parametro ? true : false};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(undefined);
isTruthy(null);
isTruthy(false);


// Invoque a função criada acima passando como parâmetro 10 valores `truthy`.

isTruthy("Guilherme");
isTruthy(22);
isTruthy(1.60);
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy("Moura");
isTruthy(1);
isTruthy(true);
isTruthy({});

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: 'BMW',
    modelo: 'Série 3',
    placa: 'XXX-0123',
    ano: 2020,
    cor: 'Azul',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoa: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (corPassada) => { carro.cor = corPassada };


// Crie um método chamado `obterCor`, que retorne a cor do carro.
carro.obterCor = () => { return carro.cor };


// Crie um método chamado `obterModelo` que retorne o modelo do carro.
carro.obterModelo = () => { return carro.modelo };


// Crie um método chamado `obterMarca` que retorne a marca do carro.
carro.obterMarca = () => { return carro.marca };

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => { return `Esse carro é um ${carro.marca} ${carro.modelo}` };

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = (addPessoasNoCarro) => {
    
    let totalPessoas = carro.quantidadePessoa + addPessoasNoCarro;
    if (carro.quantidadePessoa === carro.assentos) { return "O carro está lotado!"; }

    if (addPessoasNoCarro > carro.assentos) {
        let quantasCabem = carro.assentos - carro.quantidadePessoa;
        let verificaPlural = quantasCabem === 1 ? 'pessoa' : 'pessoas';
        return `Só cabem mais ${quantasCabem} ${verificaPlural}`
    }
    carro.quantidadePessoa += addPessoasNoCarro;
    return `Já temos ${carro.quantidadePessoa} pessoas no carro`;

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // Azul

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarca(); // BMW
carro.obterModelo(); // Série 3

// Adicione 2 pessoas no carro.
carro.addPessoas(2);

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4);

// Faça o carro encher.
carro.addPessoas(3);

// Tire 4 pessoas do carro.
carro.addPessoas(-4);

// Adicione 10 pessoas no carro.
carro.addPessoas(10);

// Quantas pessoas temos no carro?
carro.quantidadePessoa; // 2
