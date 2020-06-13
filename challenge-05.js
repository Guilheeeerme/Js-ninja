// Crie uma variável qualquer, que receba um array com alguns valores aleatórios, pelo menos 5
let myArray = ['guilherme', 'Moura', 22, 1.60, 59];

// Crie uma função que receba um array como parâmetro, e retorne esse array.
const recebeArray = (arg) => { return arg };

// Imprima o segundo índice do array retornado pela função criada acima.
console.log(recebeArray(myArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const myFunction = (arrayy,indice) => {
    return arrayy[indice];
}

console.log(myFunction(['guilherme', 'Moura', 22, 1.60, 59],2));

// Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
let randomArray = [1,'Gui', true, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(randomArray,0));
console.log(myFunction(randomArray,1));
console.log(myFunction(randomArray,2));
console.log(myFunction(randomArray,3));
console.log(myFunction(randomArray,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
const book = (nomeLivro) => {

    let allLivros = {

        'Cosmos': {
            quantidadePaginas: 300,
            autor: 'Carl Sagan',
            editora: 'Companhia das letras'
        },
        'Contato': {
            quantidadePaginas: 200,
            autor: 'Carl Sagan 2',
            editora: 'Companhia das letras 2'
        },
        'O gene egoísta': {
            quantidadePaginas: 400,
            autor: 'Richard Dawkins',
            editora: 'Companhia das letras 3'
        }

    };

    // Se nenhum for passado, retorna todos. o ! ta invertendo nomeLivro para false, que é o mesmo que dizer 'se nao passar nada' porque nada é false.
    if ( !nomeLivro ) { return allLivros; }

    return allLivros[nomeLivro];
    // Os nomes dos livros não são um propriedade , não tem como chamar
    // Então chamamos o objeto mesmo assim, e o paramentro da função entre []
    // Array em JS é um objeto !!!
    
    // ESSAS DUAS PODERIA FAZER ASSIM..... EM UMA LINHA SÓ
    // return !nomeLivro ? allLivros : allLivros[nomeLivro]
};


// Usando a função criada acima, imprima o objeto com todos os livros.
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro O gene egoísta tem ' + book('O gene egoísta').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O gene egoísta é ' + book('O gene egoísta').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O autor do livro O gene egoísta foi publicado pela editora ' + book('O gene egoísta').editora);

