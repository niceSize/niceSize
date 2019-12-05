window.addEventListener('load', function(){
  setTimeout(function(){
    document.getElementById('loadingScreen').classList.add('hide');
  }, 525);
});
window.addEventListener('scroll', scrollFunction);

function scrollFunction(){
  if(document.body.scrollTop > window.innerHeight * 0.7|| document.documentElement.scrollTop > window.innerHeight * 0.7){
    if(!document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.contains('show')){
    document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.add('animate');
    document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.add('show');
    setTimeout(function(){document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.remove('animate');}, 500);
      }
    }else{
      if(document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.contains('show')){
			document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.add('animate');
			document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.remove('show');
			setTimeout(function(){document.getElementById('headerDownload').getElementsByTagName('a')[0].classList.remove('animate');}, 500);
		    }
    }
}

function landingPageScroll(){
	if(window.innerWidth <= 637){
		document.body.scrollTop = window.innerHeight;
		document.documentElement.scrollTop = window.innerHeight;
	}else{
		document.body.scrollTop = window.innerHeight - parseFloat(window.getComputedStyle(document.body).getPropertyValue('--nSMaxWidth')) * 5;
		document.documentElement.scrollTop = window.innerHeight - parseFloat(window.getComputedStyle(document.body).getPropertyValue('--nSMaxWidth')) * 5;
	}
}
