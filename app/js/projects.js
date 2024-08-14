$(document).ready(function() {
  function hideAllSections() {
      $('.inner').removeClass('active animate-in');
  }

  $('a[id^="link-to-section"]').on('click', function(event) {
      event.preventDefault();

      var linkId = $(this).attr('id');
      var sectionNumber = linkId.split('-').pop();
      var sectionId = '#section' + sectionNumber;
  
      // Si el ID es correcto, mostrar la sección
      if ($(sectionId).length > 0) {
          hideAllSections();
          $(sectionId).addClass('active animate-in');
      } else {
          console.error("Sección no encontrada:", sectionId);
      }
  });


  // Handle button-back

  $('[dataref]').on('click', function(event) {
    event.preventDefault();
    var sectionID = $(this).attr('dataref'); // Obtiene el ID de la sección a mostrar
    hideAllSections(); 
    setTimeout(function(){
        $('#' + sectionID).addClass('active animate-in'); 
    }, 500);
});

});