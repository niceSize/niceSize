/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/

function initializeNiceSize() {
	document.body.appendChild(document.createElement('span')).setAttribute('id',
	'niceSize');
	let niceSizeElement = document.getElementById('niceSize');
  niceSizeElement.style.setProperty('position', 'absolute');
	let windowElement = window;
  if(Number.isNaN(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--vwMultiplier')))){
    niceSizeElement.style.setProperty('--vwMultiplier', '1');
  }
  if(Number.isNaN(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--remMultiplier')))){
    niceSizeElement.style.setProperty('--remMultiplier', '1');
  }
  if(Number.isNaN(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('height')))){
    niceSizeElement.style.setProperty('height', '100vh');
  }
  if(Number.isNaN(parseInt(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--maxWidthMobileSite')))){
    niceSizeElement.style.setProperty('--maxWidthMobileSite', '637px');
  }
  if(Number.isNaN(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--mobileSiteScalingRatio')))){
    niceniceSizeElementSize.style.setProperty('--mobileSiteScalingRatio', '2');
  }
	widthRef = windowElement.innerWidth;
	widthLoad = windowElement.innerWidth;
	heightLoad = windowElement.innerHeight;
	let bodyElement = document.body;
	if(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('height')) > windowElement.innerHeight &&
	typeof windowElement.orientation !== 'undefined' &&
	document.documentElement.clientWidth === windowElement.innerWidth){
		bodyElement.style.setProperty('--nSHeight',
		(windowElement.innerHeight * 0.01) + 'px');
		bodyElement.style.setProperty('--nSHeightMFF', '1vh');
	}else{
		bodyElement.style.setProperty('--nSHeight', '1vh');
		bodyElement.style.setProperty('--nSHeightMFF', '1vh');
		if(document.documentElement.clientWidth === windowElement.innerWidth &&
			typeof windowElement.orientation !== 'undefined'){
			bodyElement.style.setProperty('--nSHeight',
			(windowElement.innerHeight * 0.01) + 'px');
			bodyElement.style.setProperty('--nSHeightMFF',
			(windowElement.innerHeight * 0.01) + 'px');
			heightRef = windowElement.innerHeight;
		}
	}
	niceSizeElement.style.setProperty('display', 'none');
	if (navigator.platform.match(/iPhone|iPod|iPad|MacIntel/) &&
	document.documentElement.clientWidth === windowElement.innerWidth) {
		appleDevice = true;
	} else {
		appleDevice = false;
	}
}

function niceSize(){
	let documentElementElement = document.documentElement;
	let bodyElement = document.body;
	let windowElement = window;
	let niceSizeElement = document.getElementById('niceSize');
	if(((documentElementElement.clientWidth * 0.01) *
	parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--vwMultiplier'))) >
	(parseFloat(getComputedStyle(documentElementElement).fontSize) *
	parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--remMultiplier')))){
		bodyElement.style.setProperty('--nSMaxWidth',
		(parseFloat(getComputedStyle(documentElementElement).fontSize) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--remMultiplier'))) + 'px');
	}else{
		bodyElement.style.setProperty('--nSMaxWidth',
		((documentElementElement.clientWidth * 0.01) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--vwMultiplier'))) + 'px');
	}
	if(appleDevice === true && document.documentElement.clientWidth <=
		parseInt(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--maxWidthMobileSite'))){
		bodyElement.style.setProperty('--nSMaxWidth',
		(((documentElementElement.clientWidth * 0.01) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--vwMultiplier'))) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--mobileSiteScalingRatio'))) + 'px');
	}else if(appleDevice === false && windowElement.innerWidth <=
		parseInt(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--maxWidthMobileSite'))){
		bodyElement.style.setProperty('--nSMaxWidth',
		(((documentElementElement.clientWidth * 0.01) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--vwMultiplier'))) *
		parseFloat(windowElement.getComputedStyle(niceSizeElement).
		getPropertyValue('--mobileSiteScalingRatio'))) + 'px');
	}
	bodyElement.style.setProperty('--nSWidth',
	((documentElementElement.clientWidth * 0.01) *
	parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('--vwMultiplier'))) + 'px');
	niceSizeElement.style.setProperty('display', 'flex');
	if(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('height')) >
	windowElement.innerHeight &&
	typeof windowElement.orientation !== 'undefined' &&
	documentElementElement.clientWidth === windowElement.innerWidth &&
	windowElement.innerWidth !== widthRef){
		bodyElement.style.setProperty('--nSHeight',
		(windowElement.innerHeight * 0.01) + 'px');
		widthRef = windowElement.innerWidth;
		if(widthRef === widthLoad){bodyElement.style.setProperty('--nSHeight',
		(heightLoad * 0.01) + 'px');}
	}else if(parseFloat(windowElement.getComputedStyle(niceSizeElement).
	getPropertyValue('height')) <=
	windowElement.innerHeight &&
	typeof windowElement.orientation !== 'undefined' &&
	documentElementElement.clientWidth === windowElement.innerWidth &&
	windowElement.innerWidth !== widthRef){
		bodyElement.style.setProperty('--nSHeight',
		(windowElement.innerHeight * 0.01) + 'px');
		bodyElement.style.setProperty('--nSHeightMFF',
		(windowElement.innerHeight * 0.01) + 'px');
		widthRef = windowElement.innerWidth;
		if(widthRef === widthLoad){
			bodyElement.style.setProperty('--nSHeight', (heightLoad * 0.01) + 'px');
		}
		heightRef = windowElement.innerHeight;
	}
	if(documentElementElement.clientWidth === windowElement.innerWidth &&
		typeof windowElement.orientation !== 'undefined' &&
		windowElement.innerHeight > heightRef){
		bodyElement.style.setProperty('--nSHeightMFF',
		(windowElement.innerHeight * 0.01) + 'px');
		heightRef = windowElement.innerHeight;
	}
	niceSizeElement.style.setProperty('display', 'none');
}

window.addEventListener('load', function() {
	initializeNiceSize();
	niceSize();
});

window.addEventListener('resize', niceSize);
