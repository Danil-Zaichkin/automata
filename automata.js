let fs = require('fs')
let arg = process.argv
let t = arg[2];
let s = fs.readFileSync('input.txt').toString()
let m = t.length;
alph=new Array()
//Определяем алфавит строки t
for(let i=0;i<m;i++)
    alph[t.charAt(i)]=0;
//В двумерном массиве del храним таблицу переходов
del = new Array(m+1);
for(let j = 0; j <= m; j++)
    del[j] = new Array();
//Инициализируем таблицу переходов
for(let i in alph)
    del[0][i]=0;
//Формируем таблицу переходов
for(let j = 0; j < m; j++) {
    let prev = del[j][t.charAt(j)];
    del[j][t.charAt(j)] = j + 1;
    for (let i in alph)
        del[j + 1][i] = del[prev][i];
}
//Выводим таблицу переходов
for (let j = 0; j <= m; j++) {
    let out = '';
    for (let i in alph)
        out += del[j][i] + ' ';
    console.log(out);
}

let state = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] in alph)
        state = del[state][s[i]];
    else
        state = 0

    if (state === m)
        console.log(i - state + 1)
}