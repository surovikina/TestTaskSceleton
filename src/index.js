function component() {
  var element = document.createElement('p');

  element.innerHTML = ['This', 'is', 'generated', 'by', 'js!'].join(' ');

  return element;
}

document.body.appendChild(component());
