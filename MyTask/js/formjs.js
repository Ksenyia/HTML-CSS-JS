
var x = 0;
function validateForm() {
	var result = true; // результат, используем, чтобы проверять сразу все поля ввода
// Константы
	var FILL_FIELD = "*заполните поле",
		PWD_NOT_EQUAL = "*не совпадают значения паролей",
		BAD_FIRST_SYMBOL = "*некорректный первый символ(A-z)";
		BAD_USERNAME = "*некорректное значкние поля(A-z,0-9,_)";
		BAD_USERNAME_LENGTH = "*не менее 5 символов";
		BAD_PWD = "*некорректное значкние поля(не менее одной буквы в каждом регистре и не менее одной цифры)";
		BAD_PWD_LENGTH = "*не менее 6 символов";
		BAD_EMAIL='*email введен не верно(без @ и .)';
// Находим ссылки на элементы сообщений об ошибках
	var errUname = document.getElementById("err-uname"),
		erEmail = document.getElementById('emailf');
		erEmail1 = document.getElementById('emailf1');
		errPwd1 =  document.getElementById("err-pwd1"),
		errPwd2 =  document.getElementById("err-pwd2");
	var erEmails = [];
	var i = x;
	var j = 0;
	while(i>0){
		var id = 'emailf'+x;
		erEmails.push(document.getElementById(id));
		i=i-1;
		j = j+1;
	}
// Предварительно очищаем сообщения об ошибках
	errUname.innerHTML = "";
	errPwd1.innerHTML = "";
	errPwd2.innerHTML = "";
	erEmail.innerHTML= "";
	erEmail1.innerHTML= "";
	var j = 0;
	while(i>0){
		erEmails[j].innerHTML= "";
		j = j+1;
	}
// Читаем значения из полей формы
	var usr = document.forms[0]["usrname"].value,
		email = document.forms[0]['email'].value;		// или document.testForm.usrname.value
		email1 = document.forms[0]['email1'].value;
		pwd1 = document.forms[0]["pwd1"].value,      // или document.testForm.pwd1.value
		pwd2 = document.forms[0]["pwd2"].value; 				// или document.testForm.pwd2.value
	var emails = [];
	var i = x;
	var j = 0;
	while(i>0){
		var id = 'email'+i;
		emails.push(document.forms[0][id].value);
		i=i-1;
		j = j+1;
	}
// Проверка поля "Пользователь"
	if (!usr) {
		errUname.innerHTML = FILL_FIELD;
		result = false;
	}  // обязательное заполнение
	if(usr.length<5){
		errUname.innerHTML = BAD_USERNAME_LENGTH;
		result = false;
	}
	if (usr && usr.search(/[a-z]/i) !== 0) {
		errUname.innerHTML = BAD_FIRST_SYMBOL;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	badSymbol=usr.search(/\W/);
	if (badSymbol>0){
		errUname.innerHTML = BAD_USERNAME;
		result = false;
	}
//Проверим содержит ли значение введенное в поле email символы @ и .
	at=email.indexOf("@");
	dot=email.indexOf(".");
//Если поле не содержит эти символы знач email введен не верно
	if (at<1 || dot<1){
	erEmail.innerHTML=BAD_EMAIL;
	result = false;
	}
	at=email1.indexOf("@");
	dot=email1.indexOf(".");
	//Если поле не содержит эти символы знач email введен не верно
	if (at<1 || dot<1){
	  erEmail1.innerHTML=BAD_EMAIL;
	  result = false;
	}
	var j = 0;
	while(i>0){
		at=emails[i].indexOf("@");
		dot=emails[i].indexOf(".");
	   //Если поле не содержит эти символы знач email введен не верно
	   if (at<1 || dot<1){
		  erEmails[i].innerHTML=BAD_EMAIL;
		  result = false;
	   }
		i=i-1;
	}  
// Проверка паролей
	if (!pwd1) {
		errPwd1.innerHTML = FILL_FIELD; 
		result = false;
	}  // обязательное заполнение 
	if (!pwd2) {
		errPwd2.innerHTML = FILL_FIELD; 
		result = false;
	} // обязательное заполнение
	if (pwd1.length<6) {
		errPwd1.innerHTML = BAD_PWD_LENGTH; 
		result = false;
	}  // обязательное заполнение 
	if (pwd2.length<6) {
		errPwd2.innerHTML = BAD_PWD_LENGTH; 
		result = false;
	}
	if (pwd1 && pwd1.search(/[a-z]/) < 0) {
		errPwd1.innerHTML = BAD_PWD;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	if (pwd1 && pwd1.search(/[A-Z]/) < 0) {
		errPwd1.innerHTML = BAD_PWD;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	if (pwd1 && pwd1.search(/[1-9]/) < 0) {
		errPwd1.innerHTML = BAD_PWD;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	if (pwd2 && pwd2.search(/[1-9]/) < 0) {
		errPwd2.innerHTML = BAD_PWD;
		result = false;
	}
	if (pwd2 && pwd2.search(/[a-z]/) < 0) {
		errPwd2.innerHTML = BAD_PWD;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	if (pwd2 && pwd2.search(/[A-Z]/) < 0) {
		errPwd2.innerHTML = BAD_PWD;
		result = false;
	}  // Первый символ - латинская буква в любом регистре
	if (pwd1 && pwd2 && pwd1 !== pwd2) {
		errPwd1.innerHTML = PWD_NOT_EQUAL; 
		errPwd2.innerHTML = PWD_NOT_EQUAL;
		document.forms[0]["pwd1"].value = "";   // сброс 
		document.forms[0]["pwd2"].value = "";   // сброс
		result = false;
	}   // должны совпадать
// возвращаем итог проверки		
	return result;
}
function Add() {
	x = x+1;
	var idSpan = "emailf" + x;
	var idInput = "email" + x;
	var newInput = document.createElement("INPUT");
	var newP = document.createElement("P");
	var newSpan = document.createElement("SPAN");
	var emails = document.getElementById("emails");
	newInput.setAttribute("type", "email");
	newInput.setAttribute("id", idInput);
	newInput.setAttribute("autocomplete", "off");
	newSpan.setAttribute("class", "err");
	newSpan.setAttribute("id", idSpan);
	newP.setAttribute("id", x);
	emails.appendChild(newInput);
	emails.appendChild(newSpan);
	emails.appendChild(newP);
	if(x==1){
		var newButton = document.createElement("BUTTON");
		newButton.setAttribute("onclick", "Delete()");
		newButton.innerHTML =  "Delete";
		emails.appendChild(newButton);
	}
}
function Delete() {
	var idSpan = "emailf" + x;
	var idInput = "email" + x;
	var newInput = document.getElementById(idInput);
	var newSpan = document.getElementById(idSpan);
	var newP = document.getElementById(x);
	var emails = document.getElementById("emails");
	if (newInput.parentNode) {
		emails.removeChild(newInput);
	}
	if (newSpan.parentNode) {
		emails.removeChild(newSpan);
	}
	if (newP.parentNode) {
		emails.removeChild(newP);
	}
	x = x-1;
}