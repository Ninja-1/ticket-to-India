"use strict"

let randomWordsA = [
  "Сегодня ",
  "На данный момент ",
  "В этом сезоне ",
  "Как нам только что стало известно, ",
  "Прямо сейчас ",
  "Представляете,  ",  
];
let randomWordsB = [
  "туда ",
  "в Индию ",
  "в жаркие страны ",
  "в командировку от завода ",
  "в такую даль ",    
];
let random = [
  "билетов не подвезли.",
  "желающих хоть отбавляй.",
  "конструкторов не пускают.",
  "поедете сами, Галина Николаевна.",
  "только на оленях.",
  "на такси дорого.",  
  "разве что пешком.",  
  "было бы неплохо съездить.",  
];

//Рабочая ф-ция Алерта
function myBtn() {
 
    let randomIndexA = Math.floor(Math.random() * 6);
    let randomIndexB = Math.floor(Math.random() * 5);
    let randomIndexC = Math.floor(Math.random() * 8);
    let res = randomWordsA[randomIndexA] + randomWordsB[randomIndexB] + random[randomIndexC];
    alert(res);
    if (confirm ("Еще сыграем?")) {      
      return;
    } else { alert("Ля ты и Бука!");}
};

let randomWordsD = [
  "Вот тебе, бабушка, и Юрьев день",
  "А не пора ли нам подкрепиться?",
  "Лиш бы ото на все кнопки понажимать!",
  "Любопытство не порок а источник знаний",
  "Здесь вам не тут",  
  "Лучше водки хуже нет.",
  "Мы выполнили все пункты: от А до Б.",
  "Хотели как лучше, а получилось как всегда.",  
  "Мы надеемся, что у нас не будет запоров на границе.",
  "Я бы не стал увязывать эти вопросы так перпендикулярно.",
];

function circl() {
  let randomIndexD = Math.floor(Math.random() * 10);
  let res1 = randomWordsD[randomIndexD];
  alert(res1);  
}






