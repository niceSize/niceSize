window.addEventListener('load', function(){setTimeout(function(){document.getElementById('loadingScreen').classList.add('hide');}, 525);});
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
  if(document.body.scrollTop > window.innerHeight * 0.7|| document.documentElement.scrollTop > window.innerHeight * 0.7){
    if(!document.querySelector('#headerDownload a').classList.contains('show')){
    document.querySelector('#headerDownload a').classList.add('animate');
    document.querySelector('#headerDownload a').classList.add('show');
    setTimeout(function(){document.querySelector('#headerDownload a').classList.remove('animate');}, 500);
      }
    }else{
      if(document.querySelector('#headerDownload a').classList.contains('show')){
			document.querySelector('#headerDownload a').classList.add('animate');
			document.querySelector('#headerDownload a').classList.remove('show');
			setTimeout(function(){document.querySelector('#headerDownload a').classList.remove('animate');}, 500);
		    }
    }
}

function landingPageScroll(){
	if(window.innerWidth <= parseInt(window.getComputedStyle(document.getElementById('niceSize')).getPropertyValue('--maxWidthMobileSite'))){
		document.body.scrollTop = window.innerHeight;
		document.documentElement.scrollTop = window.innerHeight;
	}else{
		document.body.scrollTop = window.innerHeight - parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('--nSMaxWidth')) * 5;
		document.documentElement.scrollTop = window.innerHeight - parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('--nSMaxWidth')) * 5;
	}
}
