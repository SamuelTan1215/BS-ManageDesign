$(document).ready(function() {
    $('#toggle-btn').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('sidebar-toggled');
   });
 });