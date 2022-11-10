var hashLinks = document.querySelectorAll('a[href^="#"]');
for (let item of hashLinks) {
	item.addEventListener('click', (e)=> {
		let hash = item.getAttribute('href');
		if (hash === '#') {
			window.scrollTo({top: 0, behavior: 'smooth'});
		} else {
			let target = document.querySelector(hash);
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
		e.preventDefault();
	})
}
