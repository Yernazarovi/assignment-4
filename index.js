let education = document.getElementById("education");
let cash = document.getElementById("cash");

let btn = document.querySelector(".submit");

let name = document.getElementById("BrideName");

let skills = document.getElementsByClassName("skills");

let age = document.getElementsByClassName("age");

let gossips = document.getElementsByClassName("gossips");

let love_letter = document.getElementById("loveletter");

let resultname = document.getElementById("resultName");
let resultprice = document.getElementById("resultPrice");
let resultloveletter = document.getElementById("resultloveletter");

btn.addEventListener('click', calculate);

const filteration = (item) => {
	return item.checked;
}

function calculate(){
	let price = parseInt(document.getElementById("StartingPrice").value, 10);
	if(name.value == "" || price == NaN){
		alert("Incorrect Input!");
		return;
	}
	price *= education.value * cash.value;
	var list = Array.from(skills).filter(filteration);
	var result = list.reduce((price, item) => {
		return price + Number(item.value);
	}, price);
	var got = new Boolean(false);
	price = Number(result);
	list = Array.from(age).filter(filteration);
	result = list.forEach(item => {
		price *= Number(item.value);
	})
	list = Array.from(gossips);
	for(var i = 0; i < 3; ++i){
		if(list[i].checked == true){
			if(i != 2){
				price *= list[i].value;
			}
			else{
				price -= list[i].value;
			}
		}
	}
	var person = new Object();
	person.bride_name = name.value;
	person.bride_price = price;
	person.love_letter = love_letter.value;
	resultname.textContent = person.bride_name;
	resultprice.textContent = person.bride_price;
	resultloveletter.textContent = "Love Letter: " + person.love_letter;
}
