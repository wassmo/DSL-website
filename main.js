
let currentNumber = 1;

document.querySelector( '#pin' + currentNumber ).classList.add ('selected');

function showSlide (newNumber){
  document.querySelector( '.show' ).classList.remove( 'show' );
  document.querySelector( '#slide' + newNumber ).classList.add( 'show' );
  currentNumber = newNumber;
  selectPin(newNumber)
    }

function selectPin(newNumber){
  document.querySelector( '.selected' ).classList.remove( 'selected' );
  document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
    }

for (let pinNumber = 1; pinNumber <= 3; pinNumber++) {
  document
    .querySelector( '#pin' + pinNumber )
    .addEventListener( 'click', function () {
      showSlide(pinNumber);
    });
}

function showNextSlide(){
  let newNumber = currentNumber + 1;
  if (newNumber > 3){
    newNumber = 1;
  }
    showSlide(newNumber);
    }
document.querySelector( '#next' ).addEventListener('click', showNextSlide)

function showPreviousSlide(){
  let newNumber = currentNumber - 1;
  if (newNumber < 1){
    newNumber = 3;
  }
  showSlide(newNumber);
    }
document.querySelector( '#prev' ).addEventListener('click', showPreviousSlide)
