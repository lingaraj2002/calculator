let one = document.getElementById("first");
let two = document.getElementById("second");
let result = document.getElementById("result");

function add(){
	 result.value = parseInt(one.value) + parseInt(two.value);
}

function sub(){
	 result.value = parseInt(one.value) - parseInt(two.value);
}

function mul(){
	 result.value = parseInt(one.value) * parseInt(two.value);
}

function div(){
	 result.value = parseInt(one.value) / parseInt(two.value);
}