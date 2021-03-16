document.querySelector('#width').addEventListener('keyup', function(e) {
    var rule = /^\d+px;?$/;
    var input = e.currentTarget;

    input.style.backgroundColor = rule.test(input.value) ? '#FFF' : 'red';
})

