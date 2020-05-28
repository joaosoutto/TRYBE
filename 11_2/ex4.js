// Dentro de um mesmo arquivo, crie três funções. 
// A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. 
// Faça o mock do arquivo. 
// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string. 
// A terceira deve receber três strings e concatená-las.

// Primeira função
function toUpperCase(str) {
    return str.toUpperCase();
};

// Segunda função
function firstLetter(str) {
    return str.charAt(0);
};

// Terceira função
function concatStr(a, b) {
    return `${a} ${b}`;
}

module.exports = { toUpperCase, firstLetter, concatStr };

