function scroll(e) {
	if (e.href) {
		let targetOffset = e.href.offsetTop;
		console.log(targetOffset);
		window.scrollTo({top: targetOffset, behavior: 'smooth'});
	}
	e.preventDefault();
}
