function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
    button.innerHTML = 'Щелчок'
}
function student1(button) {
    if(button.innerHTML == 'Давыдов')
        button.innerHTML = 'Дмитрий';
    else
    button.innerHTML = 'Давыдов'
}
function student2(button) {
    if(button.innerHTML == 'Бекетов')
        button.innerHTML = 'Иван';
    else
    button.innerHTML = 'Бекетов'
}
function knopka(button) {
    if(button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'red';
    }
        
    else if(button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';  
        button.style.color = 'green';
    }
         
    else if(button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';   
        button.style.color = 'blue';
    }
        
    else {
        button.innerHTML = 'Нажми меня' 
        button.style.color = 'gray'; 
    }
}