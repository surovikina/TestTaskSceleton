(function(){

var loadImages = function () {
    var imageList = document.getElementsByClassName('articles-img');
    var mobileImageList = document.getElementsByClassName('articles-img--mobile');
  if (window.innerWidth < 450) {

    [].forEach.call(imageList, function (el) {
      el.style.display = 'none';
    });

    [].forEach.call(mobileImageList, function (el) {
      el.style.display = 'block';
    });
  } else {
    [].forEach.call(imageList, function (el) {
      el.style.display = 'block';
    });
    [].forEach.call(mobileImageList, function (el) {
      el.style.display = 'none';
    });
  }
};

document.addEventListener('DOMContentLoaded', loadImages);
window.addEventListener('resize', loadImages);

var title = document.getElementsByClassName('accordion-title'),
  content = document.getElementsByClassName('accordion-content');

  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function(){
      if (!(this.classList.contains('active'))) {
        for (let i = 0; i < title.length; i++) {
          title[i].classList.remove('active');
        }
        this.classList.add('active');
      }
    })
  }

  var mobMenu = document.getElementById('burger');
  var accordion = document.getElementById('accordion');
  var mobMenuClickHandler = function(){
    if (!(accordion.classList.contains('hidden'))) {
      accordion.classList.add('hidden');
    } else
    accordion.classList.remove('hidden');
  };

  mobMenu.addEventListener('click', mobMenuClickHandler);

}());
