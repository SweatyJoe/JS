//JS подключился с 6 задания
function resistance(){
    let volt = document.getElementById('voltage').value;
    let cur = document.getElementById('current').value;
    if((volt>=0)&&(cur>0)){
        document.getElementById('result').innerHTML = 'Сопративление равно: '+volt/cur+' Ом';
    }
    else alert('Не верные значения');
}
//7 задание
function resistanceTwo(){
    let res1 = Number(document.getElementById('resist1').value);
    let res2 = Number(document.getElementById('resist2').value);

    if((res1!==0)&&(res2!==0)) {
        document.getElementById('result_posled').innerHTML = Number(res1)+Number(res2);
        document.getElementById('result_parall').innerHTML = (res1*res2)/(res1+res2);
    }
}

//работа с датой и временем (9 задание) первые 2 func по приколу
function date_time(){
    let date = new Date();
    if(date.getMinutes()<10){
        document.getElementById('date_now').innerHTML = date.getHours()+':0'+date.getMinutes();
    }
    else document.getElementById('date_now').innerHTML = date.getHours()+':'+date.getMinutes();

    //document.getElementById('')
}

document.addEventListener("DOMContentLoaded", all_date); // при загрузке страницы
function all_date(){
    let date = new Date();
    document.getElementById('date').innerHTML = date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear();
}

//9 задание - 3 функции
function hour_cal(){
    let date = new Date();
    let timeHour = Number(date.getHours());
    let timeMin = Number(date.getMinutes());
    let output;
    let recr = time_to_chill(timeHour, timeMin);
    let food = eating_time(timeHour);
    //существование обоих
    if(recr!==0){
        if(food!==0){
            output = recr+' и '+food;
        }
        else output = recr;
    }
    else output = food;

    document.getElementById('hour_cal').innerHTML = 'Время '+output;
}

function eating_time(timeHour){
    let hour_now = timeHour;
    switch (hour_now){
        case (hour_now = 8)&&(hour_now = 7): return 'завтрака';
        case (hour_now=13)&&(hour_now=14): return 'обеда';
        case (hour_now=19)&&(hour_now=20): return 'ужина';
        default: return 0;
    }
}

function time_to_chill(timeHour, timeMin){
    if((timeHour<=23)&&(timeHour>=18)){
        return 'отдыха'
    }
    else if((timeHour>=9)&&(timeHour<=18)){
        return 'работы'
    }
    else if(((timeHour=6)||(timeMin>=30))&&(timeHour>=23)&&(timeHour>6)){
        return 'cна'
    }
    else return 0;
}

//Задание 8!

function splitter(){
    let str;
    str = document.getElementById('text').textContent;
    str = str.toLowerCase();
    let arr = str.split(' '); //разбиваем текст на слова
    for (let i=0;i<arr.length;i++){
        let arrMinimal = arr[i];
        if (arrMinimal[0] === 'a'){
            arr[i]='o';
        }
    }
    document.getElementById('final-text').innerHTML = arr.join(' ');
}

//задание 10

document.addEventListener("DOMContentLoaded", prime);
function prime(){
    let iterator = 0;
    let primeNumb = [];
    for(let i = 2;i<11;i++){
        for (let j=1;j<11;j++){
            if(i%j===0){
                iterator++;
            }
        }
        if(iterator===2){
            primeNumb.push(i);
        }
        iterator = 0;
    }
    document.getElementById('prime').innerHTML = primeNumb;
}

//Задание 11

function text(){
    let textMin = 99, textMax = 0, textSr = 0; //min и max можно было присвоить первое слово, но уже поздно
    let text = GEBI_Value('input_text');
    let arrText = [];
    let arrDelimiter = ['.','?',',','!'];
    arrText = text;
    for(let i = 0; i<arrDelimiter.length; i++){
        arrText = arrText.split(arrDelimiter[i]);
        arrText = arrText.join(' ');
    }
    arrText = arrText.split(' ');
    for (let i=0; i<arrText.length; i++){
        textSr+=arrText[i].length;
        if((arrText[i].length<textMin)&&(arrText[i].length!==0)){
            textMin = arrText[i].length;
        }
        if(arrText[i].length>textMax){
            textMax=arrText[i].length;
        }
    }
    textSr = textSr/arrText.length;
    GEBI_Html('slov',arrText.length);
    GEBI_Html('textMin',textMin);
    GEBI_Html('textMax',textMax);
    GEBI_Html('textSr',Math.round(textSr));

}

//укорачивалки по приколу
function GEBI_Value(id){
    return document.getElementById(id).value;
}
function GEBI_Html(id,value){
    document.getElementById(id).innerHTML = value;
}