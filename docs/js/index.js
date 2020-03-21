function scrollAnimations() {
  let element =
  document.getElementById('headerDownload').getElementsByTagName('a')[0];
  if(window.pageYOffset > (window.innerHeight * 0.7)){
    if(!element.classList.contains('show')){
      element.classList.add('animate');
      element.classList.add('show');
      setTimeout(function() {
        element.classList.remove('animate');
      }, 500);
    }
  }else{
    if(element.classList.contains('show')){
  		element.classList.add('animate');
  		element.classList.remove('show');
      setTimeout(function() {
        element.classList.remove('animate');
      }, 500);
    }
  }
}
window.addEventListener('load', function() {
  if (window.location.hash) {
    let element =
    document.getElementById(window.location.hash.replace('#', ''));
    if (element) {
      document.body.scrollTop = element.offsetTop;
      document.documentElement.scrollTop = element.offsetTop;
    }
    window.history.pushState(null, '',
    window.location.href.replace(window.location.hash, ''));
  }

  for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
    let element = document.getElementsByTagName('a')[i];
    if (element.getAttribute('href') &&
    element.getAttribute('href').charAt(0) == '#') {
      element.addEventListener('click', function(event) {
        if(this.getAttribute('href') === '#top' ||
        this.getAttribute('href') === '#'){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        } else if
        (document.getElementById(this.getAttribute('href').replace('#', ''))) {
          let element =
          document.getElementById(this.getAttribute('href').replace('#', ''));
          document.body.scrollTop = element.offsetTop;
          document.documentElement.scrollTop = element.offsetTop;
        }
        event.preventDefault();
      });
    }
  }
  window.addEventListener('hashchange', function() {
    window.history.pushState(null, '',
    window.location.href.replace(window.location.hash, ''));
  });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js');
  }
  setTimeout(function() {
    scrollAnimations();
    window.addEventListener('scroll', function(){
      scrollAnimations();
    });
  }, 500);
});
