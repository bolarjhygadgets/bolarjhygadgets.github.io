if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('[ServiceWorker] Registered');
    }).catch((err) => {
      console.error('[ServiceWorker] failed: ', err)
    });
}
/*
            document.body.style.background = "url('./backgrounds/a" + (Math.floor(Math.random() * (12 - 1) ) + 1) + ".jpg') no-repeat fixed center";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease";
*/
            function showErr(err) {
                let bsAlert = new  bootstrap.Toast(document.getElementById("error-toast"));
                bsAlert.show();
                document.getElementById("error").innerText = err;
            }

            document.addEventListener("DOMContentLoaded", function(){
  el_autohide = document.querySelector('.autohide');
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if (scroll_top == 0) {
          el_autohide.classList.add('scrolled-up-tr');
         } else {
          el_autohide.classList.remove('scrolled-up-tr');
         }
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
  }
}); 
let isShowingO = false;
window.onclick = function(e) {
  el_autohide = document.querySelector('.autohide');
if (!document.getElementById('navbarText').classList.contains('collapsed')) {

   if (!isShowingO) {
    isShowingO = true;
    el_autohide.classList.remove('scrolled-up-tr');
   } else {
    isShowingO = false;
    el_autohide.classList.add('scrolled-up-tr');
   }
}
};
