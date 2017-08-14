$(document).ready(
    function(){
        $('#button').click(
            function(){
                var Add = $('input[name=listitem]').val();
                 $('ul').append('<li>' + Add + '</li>');
            });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('normal');    
      });
     
    }
);