var cel = document.getElementById('celsius');
var far = document.getElementById('fahrenheit');

function c2f()
{
  far.value= (1.8 * cel.value) + 32;
  alert(cel.value + ' celsius is equal to ' + far.value +'fahrenheit');
}
