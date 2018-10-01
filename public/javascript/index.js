document.addEventListener("DOMContentLoaded", function(){

	var load = document.querySelector('body');
	var btn = document.querySelector(".add-word");
	var subMenu = document.querySelector(".sub-menu");
	
	btn.addEventListener('click', function() {
		subMenu.classList.toggle('active');
	});

}, false);