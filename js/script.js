// DOMContentLoaded degani browserimizda domida HTML CSS karimiz yuklanb bolgandan keyn
//call backdagi javascriptdagi codlarimiz ishga tushadi
document.addEventListener('DOMContentLoaded', () => {
	const advs = document.querySelectorAll('.promo__adv img'),
		seriesList = document.querySelector('.promo__interactive-list'),
		textChange = document.querySelector('.promo__genre'),
		getImage = document.querySelector('.promo__bg'),
		muvies = document.querySelector('promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = document.querySelector('.adding__input'),
		checkbox = addForm.querySelector("[type = 'checkbox']")

	const seriesDB = {
		series: [
			'Omar',
			'The Final Legacy',
			'Ertugrul',
			'Magnificent Century',
			'The Great Seljuks: Guardians...',
		],
	}

	addForm.addEventListener('submit', event => {
		event.preventDefault()
		// checkboxdan qiymat olmoqchibolsak checked deb olamiz
		const getCheckBox = checkbox.checked
		console.log(getCheckBox)
		if (getCheckBox) {
			console.log('Added Sevimli serilal ')
		}
		let newValue = input.value
		if (newValue) {
			if (newValue.length > 18) {
				newValue = `${newValue.slice(0, 18)}...`
			}
			// console.log(check)
			seriesDB.series.push(newValue)

			// console.log(seriesDB)
			addSort()
			setList()
			event.target.reset()
		}
	})
	function addSort() {
		seriesDB.series.sort()
	}
	advs.forEach(item => {
		item.remove()
	})

	getImage.style.backgroundImage = 'url(./img/Earth1.png)'
	textChange.textContent = 'Films'

	function setList() {
		addSort()
		seriesList.innerHTML = ''
		seriesDB.series.forEach((item, index) => {
			seriesList.innerHTML += `<li class='promo__interactive-item'>
			${index + 1} ${item}
			<div class='delete'></div>
		</li>`
		})

		document.querySelectorAll('.delete').forEach((trash, index) => {
			trash.addEventListener('click', () => {
				trash.parentElement.remove()
				seriesDB.series.splice(index, 1)
				setList()
			})
		})
	}

	addSort()
	setList()
})
