//stores our survey answer in this array
var surveyArray = []

//submits the form onclick
function submitForm() {
	var form = document.getElementById('form')
	console.log(form)
	var selected = document.getElementById('select').value
	var checkboxes = form.elements.checkboxes
	var radios = form.elements.radio
	var checkboxesArray = []
	
	for(i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked)
			checkboxesArray.push(checkboxes[i].value)
	}

		for(i = 0; i < radios.length; i++) {
		if(radios[i].checked)
			var radioValue = radios[i].value
	}

	var newSurvey = {
		selected: selected,
		check: checkboxesArray,
		radiod: radioValue,

	}

	console.log(selected)
	// console.log(checkboxesArray)
	// console.log(radioValue)

	surveyArray.push(newSurvey)

	console.log(surveyArray)
}
var display = document.getElementById('submitButton')
display.addEventListener('click', submitForm, false)	
