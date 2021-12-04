
let secret = getRandomInt(8);
let attempts = 3;

document.querySelector(".check").onclick=function(){
	let user =document.querySelector(".namber").value;
	if (user==secret) {
		console.log("Вы угодаали!");
        document.querySelector(".hint").innerHTML = "Вы угодаали!";
        document.querySelector(".namber").disabled = true;
        document.querySelector(".check").disabled = true;
	}

	if (secret>user) {
		document.querySelector(".hint").innerHTML = "Секретное число больше";
	}

	if (secret<user) {
		document.querySelector(".hint").innerHTML = "Секретное число меньше";
	}
    
    attempts = attempts - 1;
    document.querySelector(".attempts").innerHTML = attempts;

    if (attempts == 0) {
    	document.querySelector(".namber").disabled = true;
    	document.querySelector(".check").disabled = true;
    }
};


document.querySelector(".start").onclick = function(){
	namber = getRandomInt( 8);
	attempts = 3;
	document.querySelector(".attempts").innerHTML = attempts;
	document.querySelector(".hint").innerHTML = "Я буду подсказывать";
	document.querySelector(".namber").disabled = false;
	document.querySelector(".check").disabled = false;
	document.querySelector(".namber").value = "";
	document.querySelector(".namber").focus();
}


function getRandomInt( max) {
	return Math.floor(Math.random() * max);
}





















