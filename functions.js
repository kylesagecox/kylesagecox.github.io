function scroll(target) {
	if (target.href) {
		let targetOffset = target.href.offsetTop;
		console.log(targetOffset);
		window.scrollTo({top: targetOffset, behavior: 'smooth'});
	}
	return false;
}
