/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/
window.addEventListener('load',() => {initializeNiceSize();niceSize();});
window.addEventListener('resize', niceSize);

function initializeNiceSize() {
	document.querySelector('body').appendChild(document.createElement('span')).setAttribute('id', 'niceSize');
  document.getElementById('niceSize').style.setProperty('position', 'absolute');
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
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) > window.innerHeight && typeof window.orientation !== "undefined" && document.documentElement.clientWidth == window.innerWidth){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		document.querySelector('body').style.setProperty('--nSHeightMFF', '1vh');
		widthRef = window.innerWidth;
		widthLoad = window.innerWidth;
		heightLoad = window.innerHeight;
	}else{
		document.querySelector('body').style.setProperty('--nSHeight', '1vh');
		document.querySelector('body').style.setProperty('--nSHeightMFF', '1vh');
		if(document.documentElement.clientWidth == window.innerWidth && typeof window.orientation !== "undefined"){
			document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
			document.querySelector('body').style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
			widthRef = window.innerWidth;
			widthLoad = window.innerWidth;
			heightRef = window.innerHeight;
			heightLoad = window.innerHeight;
		}
	}
	document.getElementById('niceSize').style.setProperty('display', 'none');
}

function niceSize(){
	if(document.documentElement.clientWidth * 0.01 * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--vwMultiplier')) > parseFloat(getComputedStyle(document.documentElement).fontSize) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--remMultiplier'))){
		document.querySelector('body').style.setProperty('--nSMaxWidth', parseFloat(getComputedStyle(document.documentElement).fontSize) * parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--remMultiplier')) + 'px');
	}else{
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
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) > window.innerHeight && typeof window.orientation !== "undefined" && document.documentElement.clientWidth == window.innerWidth && window.innerWidth != widthRef){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		widthRef = window.innerWidth;
		if(widthRef == widthLoad){document.querySelector('body').style.setProperty('--nSHeight', heightLoad * 0.01 + 'px');}
	}
	if(parseFloat(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('height')) <= window.innerHeight && typeof window.orientation !== "undefined" && document.documentElement.clientWidth == window.innerWidth && window.innerWidth != widthRef){
		document.querySelector('body').style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		document.querySelector('body').style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
		widthRef = window.innerWidth;
		if(widthRef == widthLoad){document.querySelector('body').style.setProperty('--nSHeight', heightLoad * 0.01 + 'px');}
		heightRef = window.innerHeight;
	}
	if(document.documentElement.clientWidth == window.innerWidth && typeof window.orientation !== "undefined" && window.innerHeight > heightRef){
		document.querySelector('body').style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
		heightRef = window.innerHeight;
	}
	document.getElementById('niceSize').style.setProperty('display', 'none');
}
