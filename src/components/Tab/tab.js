//==================  Табы (вкладки)  =========================

console.log( 'test' );

const tabs = document.querySelectorAll( '.tab' );
const flotations = document.querySelectorAll( '.attachment' );

for( let i=0; i < tabs.length; i++ ) {
	tabs[i].addEventListener( 'click', ( event ) => {
		
		// Удаляем класс
		let tabsCurrent = event.target.parentElement.children;
		for( let t=0; t < tabsCurrent.length; t++ ) {
			tabsCurrent[t].classList.remove( 'tab__active' );
		}

		// Добавляем класс текущий
		event.target.classList.add( 'tab__active' );

		// Удаляем класс
		let flotationsCurrent = event.target.parentElement.nextElementSibling.children;
		for( let c=0; c < flotationsCurrent.length; c++ ) {
			flotationsCurrent[c].classList.remove( 'attachment__active' );
		}
		
		// Добавляем класс текущий
		flotations[i].classList.add( 'attachment__active' );
	});
}