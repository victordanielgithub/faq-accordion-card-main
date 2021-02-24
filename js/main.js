let item_title = document.querySelectorAll('.accordion-container .item-title');
for (let i = 0; i < item_title.length; i++) {
	item_title[i].addEventListener('click', (e) => {
		console.log(e.target);
		let item = e.target;
		if (item.className == 'item-title active') {
			item.classList.remove('active');
		} else {
			item_title.forEach((x) => {
				x.classList.remove('active');
			});
			item.classList.add('active');
		}
	});
}
