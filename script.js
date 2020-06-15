var number = document.getElementsByClassName('num')
var input = document.getElementById('inputwindow')
for(i=0; i<number.length; i++){
    number[i].addEventListener('click', function(e){
        var numb = event.target.value;
        fcal.txt.value += numb
       
    })
}
function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}
function calculateclear() {
    //alert('')
    var clear = document.getElementsByClassName('clear').value = " ";
    document.getElementById('inputwindow').value = clear
	
}