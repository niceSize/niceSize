/*Quite a simple way to enable for complete scalable websites, that scale with the viewport width until the from the user set root em, which should ideally represent the ideal (text-)size for somebody, is reached.
It also enables simple mobile sites and a solution for the well known viewport height problem on mobile devices without adding unnecessary lag[always running javascript may be slow, so it's deactivated when not needed].*/
window.onresize = function() {niceSize();};
window.onload = function() {initializeNiceSize();niceSize(); setTimeout(function(){document.getElementById('loadingScreen').classList.add('hide');}, 525);};

function initializeNiceSize() {
	document.querySelector('body').appendChild(document.createElement("span"));
	document.createElement("span").setAttribute("id", "niceSize");
	var test = parseInt(window.getComputedStyle(document.getElementById('refNSHeight')).getPropertyValue('--my-variable-name');
	if(Number.isNaN(test)){alert('Nan detected');document.getElementById('refNSHeight').style.setProperty('--nSMaxWidth', '1rem');}
}

function niceSize(){
	var maxNSMaxWidth = parseFloat(window.getComputedStyle(document.getElementById('maxNSMaxWidth')).width);
	var refNSMaxWidth = parseFloat(window.getComputedStyle(document.getElementById('refNSMaxWidth')).width);
	var refNSHeight = parseFloat(window.getComputedStyle(document.getElementById('refNSHeight')).height);
	var nSWidth = document.documentElement.clientWidth * 0.01;
	var nSHeight = window.innerHeight * 0.01;
	if(/*document.documentElement.clientWidth * 0.01*/ refNSMaxWidth > maxNSMaxWidth){
		document.querySelector('body').style.setProperty('--nSMaxWidth', '1rem');
	}
	else{
		document.querySelector('body').style.setProperty('--nSMaxWidth', nSWidth + 'px');
	}
	if(window.innerWidth <= 638 && window.innerWidth <= window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', nSWidth + 'px');
	}
	if(window.innerWidth <= 638 && window.innerWidth > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', 'calc(var(--nSHeight) * 2.795)');
	}
	document.querySelector('body').style.setProperty('--nSWidth', nSWidth + 'px');
	if(refNSHeight > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSHeight', nSHeight + 'px');
	}
	else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
	}
}
