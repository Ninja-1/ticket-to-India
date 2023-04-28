"use strict"

let randomWordsA = [
  "Сегодня ",
  "На данный момент ",
  "Только сегодня ",
  "Как нам стало известно, ",
  "Прямо сейчас ",
  "Представляете,  ",  
];
let randomWordsB = [
  "туда ",
  "в Индию ",
  "в жаркие страны ",
  "в командировку от завода ",
  "в такую даль  ",    
];
let random = [
  "билетов не подвезли.",
  "очень большая очередь.",
  "конструкторов не пускают.",
  "поедете сами, Галина Николаевна.",
  "только на оленях.",
  "на такси дорого.",  
  "разве что пешком.",  
  "было бы неплохо съездить.",  
];



/*function myBtn() {
  let num = prompt ("Ведите желаемую дату выеда (любое число)", 0);
  if (num == null) {
    alert("Ваш выбор очень важен для нас!");
  } else { 
    let randomIndexA = Math.floor(Math.random() * 6);
    let randomIndexB = Math.floor(Math.random() * 5);
    let randomIndexC = Math.floor(Math.random() * 8);
    let res = randomWordsA[randomIndexA] + randomWordsB[randomIndexB] + random[randomIndexC];
    alert(res);
    if (confirm ("Еще сыграем?")) {
      alert("Жми тогда на кнопку")      
    } else { alert("Ля ты и Бука!");}
    };  
}*/

function myBtn() {
 
    let randomIndexA = Math.floor(Math.random() * 6);
    let randomIndexB = Math.floor(Math.random() * 5);
    let randomIndexC = Math.floor(Math.random() * 8);
    let res = randomWordsA[randomIndexA] + randomWordsB[randomIndexB] + random[randomIndexC];
    alert(res);
    if (confirm ("Еще сыграем?")) {
      /*alert("Жми тогда на кнопку")*/  
      return;
    } else { alert("Ля ты и Бука!");}
      
}


