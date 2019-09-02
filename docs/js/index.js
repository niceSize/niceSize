window.onscroll = function() {scrollFunction();};

function scrollFunction(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    if(!document.getElementById('navDownload').classList.contains('show')){
    document.getElementById('navDownload').classList.add('animate');
    document.getElementById('navDownload').classList.add('show');
    setTimeout(function(){document.getElementById('navDownload').classList.remove('animate');}, 500);
  }
    }else{
      if(document.getElementById('navDownload').classList.contains('show')){
			document.getElementById('navDownload').classList.add('animate');
			document.getElementById('navDownload').classList.remove('show');
			setTimeout(function(){document.getElementById('navDownload').classList.remove('animate');}, 500);
		}
    }
}
