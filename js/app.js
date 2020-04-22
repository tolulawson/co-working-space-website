let visible = 0;
let next = 1;
let previous = 3;
const slideForward = (event) => {


  event.target.setAttribute('disabled', true);

  document.querySelectorAll('.image-section > img')[visible].classList.add('slide-back');

  document.querySelectorAll('.heading-fragment')[visible].classList.remove('open-frag');

  if (visible < 3) {
    visible++;
  }

  else {
    visible -= 3;
  }

  if (visible < 3) {
    next = visible + 1;
  }

  else {
    next -= 3;
  }

  if (visible > 0) {
    previous = visible - 1;
  }

  else {
    previous = 3;
  }

document.querySelectorAll('.image-section > img')[visible].classList.add('img-opened');

  function resetPrevious() {

    document.querySelectorAll('.image-section > img')[previous].classList.remove('img-opened');

    document.querySelectorAll('.image-section > img')[previous].classList.remove('slide-back');

    event.target.removeAttribute('disabled');

  }

  setTimeout(resetPrevious, 500);

  document.querySelectorAll('.heading-fragment')[visible].classList.add('open-frag');
  document.querySelectorAll('.image-section > img')[visible].classList.add('img-opened');



}


const slideBack = (event) => {

  event.target.setAttribute('disabled', true);

  document.querySelectorAll('.image-section > img')[visible].classList.add('slide-forward');

  document.querySelectorAll('.heading-fragment')[visible].classList.remove('open-frag');

  if (visible > 0) {
    visible--;
  }

  else {
    visible += 3;
  }

  if (visible < 3) {
    next = visible + 1;
  }

  else {
    next = 0;
  }

  if (visible > 0) {
    previous = visible - 1;
  }

  else {
    previous = 3;
  }

  console.log(previous,visible,next);

document.querySelectorAll('.image-section > img')[visible].classList.add('img-opened');

  function resetPrevious() {

    document.querySelectorAll('.image-section > img')[next].classList.remove('img-opened');

    document.querySelectorAll('.image-section > img')[next].classList.remove('slide-forward');

    event.target.removeAttribute('disabled');

  }

  setTimeout(resetPrevious, 500);

  document.querySelectorAll('.heading-fragment')[visible].classList.add('open-frag');
  document.querySelectorAll('.image-section > img')[visible].classList.add('img-opened');



}




document.querySelector('#forward-button').addEventListener('click', slideForward);

document.querySelector('#back-button').addEventListener('click', slideBack);
