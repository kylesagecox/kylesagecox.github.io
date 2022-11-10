var hashLinks = document.querySelectorAll('a[href^="#"]');
for (let item of hashLinks) {
	item.addEventListener('click', (e)=> {
		let hash = item.getAttribute('href');
		let target = document.querySelector(hash)
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	//	history.pushState(null, null, hash);
		e.preventDefault();
	})
}
