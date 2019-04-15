$(function(){
<<<<<<< HEAD
      var $pwd     = $('#pwd'),
        $pwdText = $('.pwd-text'),
        $eye     = $('#eye');
  
$pwd.on('input', function(){
        $pwdText.val($pwd.val());
            
});
  
$eye.mouseover(function(){
        $pwdText.css('z-index', '10');
            
});
  
$eye.mouseout(function(){
        $pwdText.css('z-index', '-10');
            
});
  
});
=======
    var $pwd     = $('#pwd'),
        $pwdText = $('.pwd-text'),
        $eye     = $('#eye');
  
    $pwd.on('input', function(){
      $pwdText.val($pwd.val());
    });
  
    $eye.mouseover(function(){
      $pwdText.css('z-index', '10');
    });
  
    $eye.mouseout(function(){
      $pwdText.css('z-index', '-10');
    });
  });
>>>>>>> 462b44b55fa10c56e59d73e87f066da20af1044a
