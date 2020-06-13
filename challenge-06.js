/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
let championship = 'Premier League';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
let teams = ['Manchester city', 'Machester United', 'Liverpool', 'Chelsea', 'Arsenal'];
console.log('Times que estão participando do campeonato', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
const showTeamPosition = (posicao) => {
    posicao >= 1 && posicao <= 5
    ? console.log(`O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}.`)
    : console.log("Não temos a informação do time que está nessa posição")
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(6));
console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(5));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let vinte = 20
while ( vinte <= 30) {
    console.log(vinte ++)
    // vinte++
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
const convertToHex = (cor) => {
    let hexaColor;
    switch (cor) {
        case 'black':
            hexaColor = '#000000';
            break;
        case 'gray':
            hexaColor = '#808080';
            break;
        case 'blue':
            hexaColor = '#0000FF';
            break;
        case 'green':
            hexaColor = '#008000';
            break;
        case 'red':
            hexaColor = '#FF0000';
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`
    }
    return `O hexadecimal para a cor ${cor} é ${hexaColor}.`;
}


// Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
console.log(convertToHex('black'));
console.log(convertToHex('gray'));
console.log(convertToHex('blue'));
console.log(convertToHex('green'));
console.log(convertToHex('red'));

console.log(convertToHex('white'));
console.log(convertToHex('whitesmoke'));
console.log(convertToHex('lightblue'));



