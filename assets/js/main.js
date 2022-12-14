
$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.main-header').addClass('scroll');
	}
	else {
		$('.main-header').removeClass('scroll');

	}
})

const navShow = () => {
	const navBar = document.querySelector('.nav-bar');
	const menuList = document.querySelector('.menu-list');

	navBar.addEventListener('click', () => {
		menuList.classList.toggle('nav-active');

		navBar.classList.toggle('close')
	});
}

navShow();


$('.fruits-isotope-menu ul li a').click(function () {
	$('.fruits-isotope-menu ul li a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');

	$('.isotope-item').isotope({
		filter: selector,
		itemSelector: '.filter',
		layoutMode: 'fitRows'
	});
	return false;
});

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 40,
	nav: false,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		991: {
			items: 2,
		},
		1024: {
			items: 3,
		},
		1200: {
			items: 3
		},
		1920: {
			items: 3
		},

	}
})

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#topbtn').fadeIn();
		} else {
			$('#topbtn').fadeOut();
		}
	})
	$('#topbtn').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 800)
	})
})


let menuPopup = document.querySelector(".menu-popup");
let previewBox = menuPopup.querySelectorAll(".modal");

document.querySelectorAll(".products-container .product").forEach(product => {
	product.onclick = () => {
		menuPopup.style.display = "flex";
		let name = product.getAttribute("data-name");
		previewBox.forEach(modal => {
			let target = modal.getAttribute("data-target");
			if (name == target) {
				modal.classList.add('active');
			}
		});
	};
});

previewBox.forEach(close => {
	close.querySelector('.fa-times').onclick = () => {
		close.classList.remove('active')
		menuPopup.style.display = "none";

	}
})



