const advs = document.querySelectorAll('.promo__adv img'),
	seriesList = document.querySelector('.promo__interactive-list'),
	textChange = document.querySelector('.promo__genre'),
	getImage = document.querySelector('.promo__bg')
muvies = document.querySelector('promo__interactive-list')

const seriesDB = {
	series: [
		'Omar',
		'The Final Legacy',
		'Ertugrul',
		'Magnificent Century',
		'The Great Seljuks: Guardians...',
	],
}

advs.forEach(item => {
	item.remove()
})

getImage.style.backgroundImage = 'url(./img/Earth1.png)'
textChange.textContent = 'Comedy'

seriesList.innerHTML = ''

seriesDB.series.forEach((item, index) => {
	seriesList.innerHTML += `<li class='promo__interactive-item'>
		${index + 1} ${item}
		<div class='delete'></div>
	</li>`
})
