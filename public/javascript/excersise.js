document.addEventListener("DOMContentLoaded", function(){

	var load = document.querySelector('body');
	var btn = document.querySelector(".add-word");
	var subMenu = document.querySelector(".sub-menu");
	var result = document.querySelector('#result');
	var userInput = document.querySelector("#user-input");
	var right = document.querySelector('.right');
	var wrong = document.querySelector('.wrong');
	
	btn.addEventListener('click', function() {
		subMenu.classList.toggle('active');
	});
	
	

//result.textContent.toLowerCase() === userInput.value.toLowerCase()
	userInput.addEventListener('keyup', function(event) {
		event.preventDefault();
		var arrResult = result.textContent.toLowerCase().split(', ');
		var arrInput = userInput.value.toLowerCase();
		if (event.keyCode === 13){
			if (arrResult.indexOf(arrInput) != -1){
				right.style.transform= 'scale(1)';
				wrong.style.transform= 'scale(0)';
				window.location.reload();
			}
			else{
				right.style.transform= 'scale(0)';
				wrong.style.transform= 'scale(1)';
				setTimeout(function(){
					wrong.style.transform= 'scale(0)';
				},800);	
			}
		}
	});
}, false);