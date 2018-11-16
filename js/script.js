// На сайті зареєструвалися юзери в такій послідовності:
// Татарчук
// Їжачкова
// Гаврилюк
// Оберман
// SирeгНаɔkǝг
// Саксаганський
// Миловська
// Аніськов
// Єфремов
// Стробольський
// Ґрант
// Кацман
// Ступова
// Шамінська
// Вороний
// Ігнатьєва
// Сервер присилає список користувачів у вигляді масиву в порядку їх реєстрації (по ідентифікатору в базі даних).
// Відображенням результату на клієнті займається функція userTable(a), що приймає в себе масив.
// Підкогуйте масив, відсортувавши імена по алфавіту.

(function (){

	let users = ['Татарчук','Їжачкова','Гаврилюк', 'Оберман','SирeгНаɔkǝг', 'Саксаганський','Миловська',
	'Аніськов','Єфремов', 'Стробольський','Ґрант', 'Кацман','Ступова', 'Шамінська','Вороний', 'Ігнатьєва'];

console.groupCollapsed("Масив сортований по алфавіту");

	userTable(users);

console.groupEnd();

// Переберіть всіх користувачів та виводьте в консоль кожне прізвище, в якому є м'який знак.

console.groupCollapsed("Прізвища, в яких є м'який знак");

users.forEach(function(e,i){
	if(e.indexOf("ь")>=0){
		console.log(e);
	}
});

console.groupEnd();

// Знайдіть серед користувачів першу, у якої прізвище закінчується на ова, єва, ка, запишіть її прізвище у змінну, щоб роздрукувати у запиті СБУ.
// Знайдіть індекс користувача з прізвищем на букву С, сьогодні акція, йому на рахунок треба зачислити 5 уно-баксів.

console.groupCollapsed("Перша, у якої прізвище закінчується на ова, єва, ка");

let sbu;
let j = 0;

while(j<users.length){
	let res = users[j].slice(-3);
	if(res.lastIndexOf("ова")>-1||res.lastIndexOf("єва")>-1||res.lastIndexOf("ка")>-1){
		sbu = users[j];
		break;
	}
	j++;
}

console.log(sbu);

console.groupEnd();

console.groupCollapsed("Індекси користувачів з прізвищем на букву С");

let s = [];
let k = 0;

while(k<users.length){
	if(users[k].indexOf("С")===0){
		s.push(k);
	}
	k++;
}
console.log("5 уно-баксів зараховано користувачам з номерами " + s);

console.groupEnd();

// На сайті є анкета, довкола кожної літери прізвища малюються квадратики.
// Створіть масив чисел по кількості букв кожного прізвища.

console.groupCollapsed("Масив чисел по кількості букв кожного прізвища");

let lengthOfSurnames = [];

users.forEach(function(e){
	lengthOfSurnames.push(e.length);
});

console.log(lengthOfSurnames);

console.groupEnd();

function userTable(ar){

	let alph = '0123456789abcdefghijklmnopqrstuvwxyzабвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

	ar.sort(function sort(a, b){

		a = a.toLowerCase();
		b = b.toLowerCase();

		let n = Math.max(a.length, b.length);

		for (let i = 0; i < n; i++){

			let x = a[i];
			let y = b[i];
			if (!x) return -1;
			if (!y) return 1;
			x = alph.indexOf(x);
			y = alph.indexOf(y);
			if (x > y) return 1;
			if (x < y) return -1;
		}
	});

	console.log(ar);
}

})();

// Сервер надсилає на клієнт масив цін на продукцію (придумайте довільний масив чисел чи згенеруйте функцією).
// На клієнті потрібно відобразити продукти від дорогого до дешевого, зробивши 12%-у накрутку на товари.
// Якщо ціна товара починається на 2 - діє 10%-а знижка на цю одиницю товара.
// Відсортуйте масив цін по спаданню, враховуючи накрутку та знижки.
// Виведіть в <p> відсортований список цін через кому-пробіл.
// (В реальних випадках клієнт отримує масив об'єктів та знижка надається по іншим критеріям, наприклад, по дню тижня).

(function(){
	
  let prices = [25, 78, 14, 52, 23, 89, 16, 15, 154, 31, 17, 82, 56, 44, 36, 28, 142, 213, 785];
  let arrPriceUpdate = [];

  prices.sort(function(a, b){
   return b - a;
  }).forEach(function(e){
   
   e *= 1.12;

   let newPrice = +e.toFixed(2);
   
   if (newPrice.toString()[0] === '2'){

    newPrice = +(newPrice * 0.9).toFixed(2);
   }
   
   arrPriceUpdate.push(newPrice);

 });

  let p = document.querySelector('p');
  p.innerText = arrPriceUpdate.join(', ');

 })();

// Створіть функцію, що емулює запит до сервера: видає кількість лайків до 10 постів (рандомні значення 0..100)
// Користувач налаштував собі відображення 35 постів на екран.
// Ваша задача - посортувати пости по популярності (кількості лайків).

(function(){

console.groupCollapsed("Сортований масив кількості лайків");

 let numberOfPosts = 35;

 console.log(sortPosts());

 function sortPosts(){

  let likes = [];

  do{
   likes = likes.concat(getLikes());
  }
  while(likes.length<numberOfPosts);

  let result = likes.slice(0, numberOfPosts).sort(function(a,b){
   return b-a;
  }); 

  return result; 
 }

 function getLikes(){
  let arr = [];
  for (let i = 0; i < 10; i++) {
   arr.push(Math.floor(Math.random() * 101));
  }
  return arr;
 }

console.groupEnd(); 

})();


// Сервер присилає список запчастин, що є на складі.
// На клієнті потрібно перевірити, чи є дана запчастина на складі, і видати користувачу підтвердження або заперечення.
// Пошук повинен бути нечуттєвим до регістру. Регулярні вирази тут використовувати не треба.

(function(){

console.groupCollapsed("Перевірка наявності запчастини на складі");

	let spareParts = ['двигун','маховик','Шатун','поршень','турбіна','колінвал','кронштейн','рокер','балка мотора','шестерні',
	'трамблер','іммобілайзер','Акамулятор','клема','датчик кисню','тахометр','фара','сигналізація','клаксон','радіатор',
	'помпа','термостат','дифузор'];
	// for(let i = 0; i<spareParts.length; i++){
	// 	spareParts[i] = spareParts[i].toLowerCase();
	// }

	let selectedSparePart = 'АКАМУЛЯТОР';
	selectedSparePart = selectedSparePart.toLowerCase();

	let availability = spareParts.some(function(e){
		return e.toLowerCase() === selectedSparePart;
	});

	console.log( availability ? "Запчастина є на складі": "Запчастини немає на складі");

console.groupEnd(); 

// Користувачу потрібно дати посилання на сторінку замовлення запчастини виду:
// http://zapchasti.abc/z###
// створіть таку строку URL, в якій замість ### буде індекс запчастини.

console.groupCollapsed("Посилання на сторінку замовлення запчастини");

	// let index = spareParts.indexOf(selectedSparePart);

	let index = spareParts.findIndex(function(e){
		return e.toLowerCase() === selectedSparePart;
	});

	let url = 'http://zapchasti.abc/z'+index;
	console.log(url);

console.groupEnd(); 


})();


// Сервер присилає список, сортований від дешевих до дорогих ноутбуків різних марок, модель та ціну (доповніть список самі):
// Nocia, RG-17, 3600
// Samgun, KX-a56, 4500
// Nocia, RG-19, 4800
// Arec, Slim-T, 5330
// Nocia, RG-20, 5650
// Arec, Ultra-T, 6200
// ...
// Користувач шукає ноутбук фірми Nocia, потрібно відобразити рекламу найдорожчого ноутбука цієї марки.
// Передайте характеристики цього ноутбука в умовну функцію showAd(nout).

(function(){

console.groupCollapsed("Найдорожчий ноутбук фірми Nocia");

	let nouts = [['Nocia','RG-17',3600], ['Samgun','KX-a56',4500], ['Nocia','RG-19',4800], ['Arec','Slim-T',5330], ['Nocia','RG-20',5650],
	['Arec','Ultra-T',6200], ['Nocia','RG-27',8600], ['Samgun','KX-a56',9400], ['Arec','Slim',9600]];

	let res;
	for(let i = nouts.length-1; i>0; i--){
		
		if(nouts[i][0]==='Nocia'){
			res = nouts[i];
			break;
		};
	}

	showAd(res);

	function showAd(nout){
		console.log(nout);
	}

console.groupEnd();

})();

// Створіть масив з 26 літер 'a' (англійська).
// Циклом замініть елементи з 2 по 26-й, щоб утворився масив з алфавітом.
// Спробуйте зробити те саме зі строками.

(function(){

console.groupCollapsed("Масив з алфавітом");

	let arr = [];
	arr.length = 26;
	arr.fill('a');
	// let count = arr[0].charCodeAt();

	for(let i = 1; i<arr.length;i++){
		
		// count++;
		arr[i]=String.fromCharCode(arr[0].charCodeAt()+i);

	}

	console.log(arr);

console.groupEnd();

console.groupCollapsed("Строка з алфавітом");

let str = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
let res = '';
let count2 = str[0].charCodeAt();

for(let i = 0; i<str.length;i++){

	res+=String.fromCharCode(count2);
	count2++;
}

str = res;
console.log(str);

console.groupEnd();
	
})();

// Сервер прислав дані про ціни 50 товарів.
// Користувач проглядає третю сторінку, де відображено 10 товарів.
// Потрібно створити масив цін товарів для цієї сторінки і передати в функцію showTovars(a);

(function(){

console.groupCollapsed("Масив цін товарів для третьої сторінки");

	let prices = [];

	for (let i = 0; i < 50; i++){
		prices.push(+(Math.random() * 900 + 10).toFixed(2));
	}

	console.log(prices);

	let res = prices.slice(20, 30);

	showTovars(res);

	function showTovars(a){

		console.log(a);

	}

console.groupEnd();
	
})();

// Є у нас картярська гра, на столі ряд карт:
// 4ч
// 7х
// 8б
// Вх
// Дп
// 10х
// Тп
// 2ч
// Користувач забрав 7 хрестову і поклав на її місце 10 бубну та 6 пікову.
// Користувач забрав 10 хреству та туз піковий.
// Користувач перед валетом поклав 2 і 3 червові.
// Виведіть в консоль остаточний результат.

(function(){

console.groupCollapsed("Картярська гра");

	let card = ['4ч','7х','8б','Вх','Дп','10х','Тп','2ч'];
	card.splice(card.indexOf('7х'),1, '10б', '6п');
	card.splice(card.indexOf('10х'),1);
	card.splice(card.indexOf('Тп'),1);
	card.splice(card.indexOf('Вх'),0,'2ч','3ч');
	console.log(card);

console.groupEnd();
	
})();


// Створіть функцію, що повертає діаметр заготовки (болванки) в межах 49,5..51,5 мм.
// На складі є 52 заготовки.
// Поступило 4 заготовки.
// 7 заготовок відправилися на обробку (станку потрібно знати їх діаметр).
// Прийшов підприємець Василь, приніс 6 заготовок і два по півлітра, попросив обробити якнайшвидше, але не світити перед начальством, поставити десь їх в глибині склада.
// На склад привезли 3 заготовки з паладія і наказ - їх обробити в першу чергу!
// Прийшов токар Вася з візком на 6 деталей, йому кладовщик Грыша розказав про наказ і 
// про півлітри. Вася за півлітри погодився поточити деталі, але спершу все ж таки взяв паладієві заготовки і ті, що лежали поруч.
// Через пару годин Вася знову зайшов за заготовками, отримавши у нагороду півлітри.

(function(){

// На складі є 52 заготовки.

	let workpiece = [];

	for(let i = 0; i<52; i++){
		workpiece[i] = getWorkpiece();
	}

// Поступило 4 заготовки.

	for(let i = 0; i<4; i++){
		workpiece.push(getWorkpiece());
	}

// 7 заготовок відправилися на обробку (станку потрібно знати їх діаметр).

console.groupCollapsed("7 заготовок, які відправили на обробку");

	let det = [];

	for(let i = 0; i<7; i++){
		det[i] = workpiece.shift();
	};

	console.log(det);	

console.groupEnd();

// Прийшов підприємець Василь, приніс 6 заготовок і два по півлітра,
// попросив обробити якнайшвидше, але не світити перед начальством, поставити десь їх в глибині склада.

	for(let i = 0; i<6; i++){
		workpiece.push(getWorkpiece());
	}

// На склад привезли 3 заготовки з паладія і наказ - їх обробити в першу чергу!

	for(let i = 0; i<3; i++){
		workpiece.unshift(getWorkpiece());
	}

// Прийшов токар Вася з візком на 6 деталей, йому кладовщик Грыша розказав про наказ і 
// про півлітри. Вася за півлітри погодився поточити деталі, але спершу все ж таки взяв паладієві заготовки і ті, що лежали поруч.

	for(let i = 0; i<6; i++){
		workpiece.shift(getWorkpiece());
	}

// Через пару годин Вася знову зайшов за заготовками, отримавши у нагороду півлітри.

   for(let i = 0; i<6; i++){
		workpiece.pop(getWorkpiece());
	}
   

// Що залишилося на складі?

console.groupCollapsed("Що залишилося на складі?");

	console.log(workpiece);

console.groupEnd();

// Добавте в попередню задачу функцію, що відбраковує заготовки: ті, що менше 50 мм. - потрібно перевезти на інший склад.

console.groupCollapsed("Масив без відбракованих заготовок");

	let filter = workpiece.filter(function(e){
		return e>50;
	});

	console.log(filter);

console.groupEnd();

	function getWorkpiece(){
		return +(Math.random() * (51.5-49.5) + 49.5).toFixed(1);
	}

})();

// Поштове відділення. Дано шафу з полицями: 5 полиць в ряд і 8 рядів. На кожній полиці - від 0 до 50 конвертів.
// Потрібно отримати масив про наявніст вільних місць на полицях, якщо на одну полицю поміщається 50 конвертів.
// Чи є хоч одна полиця порожня?
// Чи на всіх полицях не менше двох листів?

(function(){

console.groupCollapsed("Масив з кількістю конвертів на полицях");

	let a = [];
	for (let i = 0; i<8; i++){
		a[i] = [];
		for(let j = 0; j<5; j++){
			a[i][j] = Math.floor(Math.random() * 50);
		}
	}
	console.log(a);

console.groupEnd();

console.groupCollapsed("Масив з кількістю вільних місць на полицях");

	let free = [];
	free = a.map(function(e){
		return e.map(function(n){
			return 50-n;
		})
	});
	// for (let i = 0; i<a.length; i++){
	// 	free[i] = a[i].map(function(e){
	// 		return 50-e;

	// 	});
	// }
	console.log(free);

console.groupEnd();

console.groupCollapsed("Чи є порожні полиці?");

	let empty = a.some(function(e){
		return e.some(function(n){
			return n===0;
		})
	});

	console.log( empty ? 'Є порожні полиці': 'Немає порожніх полиць');


	// for (let i = 0; i<a.length; i++){
	// 	let res = a[i].includes(0);

	// 	if(res){
	// 		console.log('Є порожні полиці');
	// 		break;
	// 	}
	// 	if(i===a.length-1&&!res){
	// 		console.log('Немає порожніх полиць');
	// 	}
	// }

console.groupEnd();

console.groupCollapsed("Чи на всіх полицях не менше двох листів?");

	let evr = a.every(function(e){
		return e.every(function(s){
			return s>=2;
		});
	});

	console.log( evr ? 'На всіх полицях не менше двох листів': 'Є полиці де менше 2 листів');

console.groupEnd();
	
})();

