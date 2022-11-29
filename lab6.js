function setRussian () {
    let name = document.getElementById('student');
    name.innerHTML = 'Иван Бекетов, Дмитрий Давыдов';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-03, 3 курс, 2002';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';
    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';
    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'введите возраст';
    document.getElementById('ok-button').value = 'Ок';
    document.getElementById('reset-button').value ='Сброс';
}
function setEnglish () {
    let name = document.getElementById('student');
    name.innerHTML = 'Ivan Beketov, Dmitriy Davidov';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    let content = document.getElementById('content');
    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';
    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'Enter your surname';
    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';
    document.getElementById('ok-button').value = 'Ok';
    document.getElementById('reset-button').value ='Reset';
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    alert('Привет, '+ userName +' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255); 
    let color = 'rgb('+ r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}  

 function showAlert1() {
    alert ('Иван Бекетов, Дмитрий Давыдов')
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255); 
    let color = 'rgb('+ r + ',' + g + ',' + b + ')';
    document.getElementById('student').style.backgroundColor = color; 
 }

 
