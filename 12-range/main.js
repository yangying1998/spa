$(function() {
    var $range = $('#range'),   // range 控件
      $age   = $('#age');     // 年龄文本

  $age.html($range.val());
    
  $range.change(function() {
        $age.html($range.val());
          
  });

});
    var $range = $('input[type="range]'),   // range 控件
        $txtAge   = $('#age');     // 年龄文本
  
    $txtAge.html($range.val());
    
    $range.change(function() {
      $txtAge.html($range.val());
    });
  });
