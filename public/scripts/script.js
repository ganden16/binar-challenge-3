function openNav() {
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("focus-sidenav").style.display = "block";
}
function closeNav() {
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("focus-sidenav").style.display = "none";
}

const inputs = document.querySelectorAll('.input')
const focusForm = document.getElementById('focus-form')

inputs[3].addEventListener('keypress',(e) => {
	if(e.code == "Enter" || e.keyCode == 13){
		inputs[3].blur()
	}
})

inputs.forEach(input => {
	input.addEventListener('focusin', (e) => {
		setTimeout(() => {
			focusForm.style.display = 'block'
		}, 200)
	})
	input.addEventListener('focusout', (e) => {
		setTimeout(() => {
			focusForm.style.display = 'none'
		}, 200)
	})
})