$(function() {
<<<<<<< HEAD
      var $progress = $('progress'),    // 下载进度条控件
        timer     = 0,                // 定时器对象
        i         = 0;                // 进度数值
  
$('#start-button').click(function() {
        if(timer !== 0) return;
              
        timer = window.setInterval(function() {
                  $progress.attr('value', i++);
                        
        }, 100);
            
});
  
$('#stop-button').click(function() {
        window.clearInterval(timer);
              timer = 0;
                  
});
    
$('#reset-button').click(function() {
        $progress.attr('value', i = 0);
            
});
  
});
=======
    var $progress = $('progress'),    // 下载进度条控件
        timer     = 0,                // 定时器对象
        i         = 0;                // 进度数值
  
    $('#start-button').click(function() {
      if(timer !== 0) return;
      
      timer = window.setInterval(function() {
        $progress.attr('value', i++);
      }, 100);
    });
  
    $('#stop-button').click(function() {
      window.clearInterval(timer);
      timer = 0;
    });
    
    $('#reset-button').click(function() {
      $progress.attr('value', i = 0);
    });
  });
  
>>>>>>> 462b44b55fa10c56e59d73e87f066da20af1044a
