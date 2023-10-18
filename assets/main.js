let open = document.querySelectorAll('.head img')[1];
let close = document.querySelector('.menu img');
let overlay = document.querySelector('.overlay');
let menu = document.querySelector('.menu');
let goTop = document.getElementById('btn');

// oepn menu 
open.onclick = function() {

	overlay.classList.add('active');
	menu.classList.add('active');

}
// close menu
close.onclick = function() {

	overlay.classList.remove('active');
	menu.classList.remove('active');

}

window.onscroll = function() {

	this.scrollY >= 450 ? goTop.classList.add('active'): goTop.classList.remove('active');
	
	goTop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})

}
