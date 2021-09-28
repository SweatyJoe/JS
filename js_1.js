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
//работа с датой и временем (9 задание) первые 2 поприколу
function date_time(){
    let date = new Date();
    document.getElementById('date_now').innerHTML = date.getHours()+':'+date.getMinutes();
    document.getElementById('')
}
document.addEventListener("DOMContentLoaded", all_date); //типо кастомный ивент при загрузке страницы
function all_date(){
    let date = new Date();
    document.getElementById('date').innerHTML = date;
}
//на серьёзных щах
function hour(hour_now){
    hour_now1 = Number(hour_now);
    switch (hour_now1){
        //отдельно трапезу и остальное
        case (hour_now1>=7)&&(hour_now1<=8): 'время завтрака'; break;
        case (hour_now1>=13)&&(hour_now1<=14): 'время завтрака'; break;
        case (hour_now1>=19)&&(hour_now1<=20): 'время завтрака'; break;
        case (hour_now1>=7)&&(hour_now1<=8): 'время завтрака'; break;
        case
    }
}

