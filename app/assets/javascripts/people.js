// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready( function() {
  $(document).on('click', '.image', function() {
    $(this).transition('tada')
  })
})

// .image {
//   padding: 50px !important;
// }