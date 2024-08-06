
    // Ocultar todas las secciones
$(document).ready(function() {
    function hideAllSections() {
      $('.inner').removeClass('active animate-in');
    }
  
    // Handle open section
    $('#link-to-section2').on('click', function(event) {
      event.preventDefault();
      hideAllSections(); 
      setTimeout(function(){
        $('#section2').addClass('active animate-in'); // Mostrar la sección
      }, 500);
    });
  
    // Manejar el clic en otros enlaces si es necesario
    // $('#link-to-sectionX').on('click', function(event) {
    //   event.preventDefault();
    //   hideAllSections();
    //   setTimeout(function(){
    //     $('#sectionX').addClass('active animate-in');
    //   }, 500);
    // });



// Handle button-back

    $('#back-to-works').on('click', function(event) {
      event.preventDefault();
      hideAllSections(); 
      setTimeout(function(){
          $('#works').addClass('active animate-in'); 
      }, 500);
  });
  

  });


