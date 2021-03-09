document.querySelectorAll('input[name], #formula, #condition').forEach(function (input) {
	input.addEventListener('keyup', function () {
		var data = {};

		document.querySelectorAll('input[name]').forEach(function (input) {
			data[input.name] = Number(input.value);
			//console.log(data);
		});

		var formula = document.querySelector('#formula');
		var result = document.querySelector('#result');
		var condition = document.querySelector('#condition');

		
		var calculator = new Function('cells', 'with (cells) { return ' + formula.value + ';}');

		var evaluator = new Function('cells', 'with (cells) { return ' + condition.value + ';}');
	
		if (evaluator(data) === true) {
			document.getElementById("result").style.backgroundColor = "#B6D7A8";
		} else {
			document.getElementById("result").style.backgroundColor = "#FFFFFF";
		}

		try {
			result.value = calculator(data);

		}
		catch (error) {
			result.value = '#ERROR';
			console.error(error.message);
		}


	});
});