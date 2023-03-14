$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        loop: true,
        autoplay: true,
   
    });
   
  });

  //accordion

  const accordion = document.getElementsByClassName('accordion');

  for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
  }

  //button

  let openBtn = document.getElementById('open-btn');
  let modalContainer = document.getElementById('modal-container');
  let closeBtn = document.getElementById('close-btn');

  openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
  })

  closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
  })

  window.addEventListener('click', function(e) {
    
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  })

//second button
  let openBtnOne = document.getElementById('open-btn-one');

  openBtnOne.addEventListener('click', function() {

    modalContainer.style.display = 'block';
  })

  closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
  })

  window.addEventListener('click', function(e) {
    
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  })

  //third button

  let openBtnTwo = document.getElementById('open-btn-two');

  openBtnTwo.addEventListener('click', function() {

    modalContainer.style.display = 'block';
  })

  closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
  })

  window.addEventListener('click', function(e) {
    
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  })