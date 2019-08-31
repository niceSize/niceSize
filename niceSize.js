/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/
window.onresize = function() {niceSize();};
window.onload = function() {initializeNiceSize();niceSize();};

function initializeNiceSize() {
	document.querySelector('body').appendChild(document.createElement('span')).setAttribute('id', 'niceSize');
  document.getElementById('niceSize').style.setProperty('position', 'absolute');
	document.getElementById('niceSize').style.setProperty('visibility', 'hidden');
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('width')))){
    document.getElementById('niceSize').style.setProperty('width', '1%');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('max-width')))){
    document.getElementById('niceSize').style.setProperty('max-width', '1rem');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')))){
    document.getElementById('niceSize').style.setProperty('height', '100vh');
  }
  if(Number.isNaN(parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite')))){
    document.getElementById('niceSize').style.setProperty('--maxWidthMobileSite', '637px');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio')))){
    document.getElementById('niceSize').style.setProperty('--mobileSiteScalingRatio', '2');
  }
}

function niceSize(){
	document.getElementById('niceSize').style.setProperty('display', 'flex');
	document.querySelector('body').style.setProperty('--nSMaxWidth', parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('width')) + 'px');
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite')) && window.innerWidth <= window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', document.documentElement.getBoundingClientRect().width * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio')) + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite')) && window.innerWidth > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', 'calc(var(--nSHeight) *' + document.documentElement.getBoundingClientRect().width * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio')) + ')');
	}
	document.querySelector('body').style.setProperty('--nSWidth', document.documentElement.getBoundingClientRect().width * 0.01 + 'px');
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
	}
	else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
	}
	document.getElementById('niceSize').style.setProperty('display', 'none');
}
