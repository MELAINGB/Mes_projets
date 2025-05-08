import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e){
		setInputValue(e.target.value)
	}

	function handleblur(){
		if(!inputValue.includes('@')){
			alert("il n'y pas de @, ceci n'est pas une adresse valide")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				value={inputValue}
				onChange={handleInput}
				onBlur={handleblur}
			/>
		</footer>
	)
}

export default Footer