/*
	 ============================
	        	niceSize
   github.com/niceSize/niceSize
	 ============================
*/



/*Quite a simple way to enable for complete scalable websites, that scale with the viewport width until the from the user set root em, which should ideally represent the ideal (text-)size for somebody, is reached.
It also enables simple mobile sites and a solution for the well known viewport height problem on mobile devices without adding unnecessary lag[always running javascript may be slow, so it's deactivated when not needed].*/
window.onresize = function() {niceSize();};
window.onload = function() {initializeNiceSize();niceSize();};

function initializeNiceSize() {
	document.querySelector('body').appendChild(document.createElement("span"));
	document.createElement("span").setAttribute("id", "niceSize");
  document.getElementById('niceSize').style.setProperty('positon', 'absolute');
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--refSizeMaxWidth');)){
    document.getElementById('niceSize').style.setProperty('--refSizeMaxWidth', '1%');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxSizeMaxWidth');)){
    document.getElementById('niceSize').style.setProperty('--maxSizeMaxWidth', '1rem');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--refSizeHeight');)){
    document.getElementById('niceSize').style.setProperty('--refSizeHeight', '100vh');
  }
  if(Number.isNaN(parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite');)){
    document.getElementById('niceSize').style.setProperty('--maxWidthMobileSite', '637px');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio');)){
    document.getElementById('niceSize').style.setProperty('--mobileSiteScalingRatio', '2');
  }
}

function niceSize(){
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--refSizeMaxWidth')) > parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxSizeMaxWidth'))){
		document.querySelector('body').style.setProperty('--nSMaxWidth', '1rem');
	}
	else{
		document.querySelector('body').style.setProperty('--nSMaxWidth', document.documentElement.clientWidth * 0.01 + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite') && window.innerWidth <= window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio') + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite') && window.innerWidth > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', 'calc(var(--nSHeight) *' + parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio') + ')');
	}
	document.querySelector('body').style.setProperty('--nSWidth', document.documentElement.clientWidth * 0.01 + 'px');
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--refSizeHeight') > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSHeight',window.innerHeight * 0.01 + 'px');
	}
	else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
	}
}
