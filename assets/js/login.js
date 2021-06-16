function initJsLogin(){

	function closeModal(event){
		if(event.target.getAttribute('id')=='modal-criar-conta' || event.target.getAttribute('id')=='closeModal' || event.target.getAttribute('id')=='closeIcons'){
			event.currentTarget.classList.remove('active')
		}
	}
	function openModal(event) {
		const modal = document.getElementById('modal-criar-conta')
		modal.classList.add('active')
		modal.addEventListener('click',closeModal)
		const closeModalBtn = document.getElementById('closeModal')
		console.log(closeModalBtn)
		closeModalBtn.addEventListener('click',closeModal)
	}
	const estados = document.querySelectorAll('.estadoCidadao')
	
	document.getElementById('criarNovaConta').addEventListener('click',openModal) 
	
}

window.load = initJsLogin()