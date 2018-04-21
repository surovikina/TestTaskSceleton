var title = document.getElementsByClassName('accordion-title'),
  content = document.getElementsByClassName('accordion-content');

  for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function(){
      if (!(this.classList.contains('active'))) {
        for (var i = 0; i < title.length; i++) {
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
