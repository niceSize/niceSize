/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/
window.addEventListener('load',() => {initializeNiceSize();niceSize();});
window.addEventListener('resize', niceSize);
window.addEventListener('scroll', scrollNiceSize);

function initializeNiceSize() {
	document.querySelector('body').appendChild(document.createElement('span')).setAttribute('id', 'niceSize');
  document.getElementById('niceSize').style.setProperty('position', 'absolute');
	document.getElementById('niceSize').style.setProperty('display', 'none');
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')))){
    document.getElementById('niceSize').style.setProperty('--vwMultiplier', '1%');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--remMultiplier')))){
    document.getElementById('niceSize').style.setProperty('--remMultiplier', '1');
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
	if(document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) > parseFloat(getComputedStyle(document.documentElement).fontSize) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--remMultiplier'))){
		document.querySelector('body').style.setProperty('--nSMaxWidth', parseFloat(getComputedStyle(document.documentElement).fontSize) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--remMultiplier')) + 'px');
	} else {
		document.querySelector('body').style.setProperty('--nSMaxWidth', document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite')) && window.innerWidth <= window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio')) + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite')) && window.innerWidth > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSMaxWidth', 'calc(var(--nSHeight) * ' + parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--mobileSiteScalingRatio')) + ')');
	}
	document.querySelector('body').style.setProperty('--nSWidth', document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) + 'px');
	document.getElementById('niceSize').style.setProperty('display', 'flex');
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
	}
	else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
	}
	document.getElementById('niceSize').style.setProperty('display', 'none');
}

function scrollNiceSize(){
	document.getElementById('niceSize').style.setProperty('display', 'flex');
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) > window.innerHeight){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
	}
	else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
	}
	document.getElementById('niceSize').style.setProperty('display', 'none');
}
