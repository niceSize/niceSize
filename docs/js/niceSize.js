/*
============================
          niceSize
github.com/niceSize/niceSize
============================
*/
function initializeNiceSize() {
	document.body.appendChild(document.createElement('span')).setAttribute('id', 'niceSize');
	let element = document.getElementById('niceSize');
  element.style.setProperty('position', 'absolute');
  if(Number.isNaN(parseFloat(window.getComputedStyle(element).getPropertyValue('--vwMultiplier')))){
    element.style.setProperty('--vwMultiplier', '1');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(element).getPropertyValue('--remMultiplier')))){
    element.style.setProperty('--remMultiplier', '1');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(element).getPropertyValue('height')))){
    element.style.setProperty('height', '100vh');
  }
  if(Number.isNaN(parseInt(window.getComputedStyle(element).getPropertyValue('--maxWidthMobileSite')))){
    element.style.setProperty('--maxWidthMobileSite', '637px');
  }
  if(Number.isNaN(parseFloat(window.getComputedStyle(element).getPropertyValue('--mobileSiteScalingRatio')))){
    element.style.setProperty('--mobileSiteScalingRatio', '2');
  }
	if(parseFloat(window.getComputedStyle(element).getPropertyValue('height')) > window.innerHeight && typeof window.orientation !== "undefined" && document.documentElement.clientWidth === window.innerWidth){
		let element = document.body;
		element.style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		element.style.setProperty('--nSHeightMFF', '1vh');
		widthRef = window.innerWidth;
		widthLoad = window.innerWidth;
		heightLoad = window.innerHeight;
	}else{
		let element = document.body;
		element.style.setProperty('--nSHeight', '1vh');
		element.style.setProperty('--nSHeightMFF', '1vh');
		if(document.documentElement.clientWidth === window.innerWidth && typeof window.orientation !== "undefined"){
			element.style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
			element.style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
			widthRef = window.innerWidth;
			widthLoad = window.innerWidth;
			heightRef = window.innerHeight;
			heightLoad = window.innerHeight;
		}
	}
	element.style.setProperty('display', 'none');
}

function niceSize(){
	// #niceSize, document.documentElement and document.body
	let element = document.documentElement;
	let element1 = document.body;
	let element2 = document.getElementById('niceSize');
	if(element.clientWidth * 0.01 * parseFloat(window.getComputedStyle(element2).getPropertyValue('--vwMultiplier')) > parseFloat(getComputedStyle(element).fontSize) * parseFloat(window.getComputedStyle(element2).getPropertyValue('--remMultiplier'))){
		element1.style.setProperty('--nSMaxWidth', parseFloat(getComputedStyle(element).fontSize) * parseFloat(window.getComputedStyle(element2).getPropertyValue('--remMultiplier')) + 'px');
	}else{
		element1.style.setProperty('--nSMaxWidth', element.clientWidth * 0.01 * parseFloat(window.getComputedStyle(element2).getPropertyValue('--vwMultiplier')) + 'px');
	}
	if(window.innerWidth <= parseInt(window.getComputedStyle(element2).getPropertyValue('--maxWidthMobileSite'))){
		element1.style.setProperty('--nSMaxWidth', element.clientWidth * 0.01 * parseFloat(window.getComputedStyle(element2).getPropertyValue('--vwMultiplier')) * parseFloat(window.getComputedStyle(element2).getPropertyValue('--mobileSiteScalingRatio')) + 'px');
	}
	element1.style.setProperty('--nSWidth', element.clientWidth * 0.01 * parseFloat(window.getComputedStyle(element2).getPropertyValue('--vwMultiplier')) + 'px');
	element2.style.setProperty('display', 'flex');
	if(parseFloat(window.getComputedStyle(element2).getPropertyValue('height')) > window.innerHeight && typeof window.orientation !== "undefined" && element.clientWidth === window.innerWidth && window.innerWidth !== widthRef){
		element1.style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		widthRef = window.innerWidth;
		if(widthRef === widthLoad){element1.style.setProperty('--nSHeight', heightLoad * 0.01 + 'px');}
	}
	if(parseFloat(window.getComputedStyle(element2).getPropertyValue('height')) <= window.innerHeight && typeof window.orientation !== "undefined" && element.clientWidth === window.innerWidth && window.innerWidth !== widthRef){
		element1.style.setProperty('--nSHeight', window.innerHeight * 0.01 + 'px');
		element1.style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
		widthRef = window.innerWidth;
		if(widthRef === widthLoad){element1.style.setProperty('--nSHeight', heightLoad * 0.01 + 'px');}
		heightRef = window.innerHeight;
	}
	if(element.clientWidth === window.innerWidth && typeof window.orientation !== "undefined" && window.innerHeight > heightRef){
		element1.style.setProperty('--nSHeightMFF', window.innerHeight * 0.01 + 'px');
		heightRef = window.innerHeight;
	}
	element2.style.setProperty('display', 'none');
}

window.addEventListener('load', function() {
	initializeNiceSize();
	niceSize();
});

window.addEventListener('resize', niceSize);
