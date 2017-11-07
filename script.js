var controls = document.querySelectorAll('.toggle-controls li');
var photo = document.querySelector('.photo');

for (var i = 0; i < controls.length; i++) {
    controls[i].innerHTML = controls[i].dataset.filter;
    clickControl(controls[i]);
}

function toggleFilter(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
        photo.classList.remove(controls[i].dataset.filter);
    }

    control.classList.add('active');

    if (photo) {
        photo.classList.add(control.dataset.filter);
    }
}

function clickControl(control) {
    control.addEventListener('click', function() {
        toggleFilter(control);
    });
}

var defaultFilter = document.querySelector('li.walden');
toggleFilter(defaultFilter);

var separator = document.querySelector('.separator');
var originalPhoto = document.querySelector('.photo-original');
var filteredPhoto = document.querySelector('.photo');
var photoContainer = document.querySelector('.photos');
var flag = false;

separator.addEventListener('mousedown', function(event) {
  event.preventDefault();
  flag = true;
}, false);

document.addEventListener('mouseup', function(event) {
  flag = false;
}, false);

photoContainer.addEventListener('mousemove', function(event) {
  var res = event.pageX - this.offsetLeft;

  if (flag && (res > 0) && (res < filteredPhoto.offsetWidth)) {
    separator.style.left = res + 'px';
    originalPhoto.style.width = res + 'px';
  }

}, false);