javascript: (function () {
  let color = prompt('Background Color? Hex or name will do', 'blue');
  document.body.style.backgroundColor = color;
  let divElements = document.querySelectorAll('div');
  for (elements of divElements) {
	   elements.style.backgroundColor = color;
