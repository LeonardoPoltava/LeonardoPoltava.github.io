(function( $ ){
	
  //// ---> Check issue element
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	}
  
	$(function() {
    
      
      if( $('.form-check').exists()){
      
        $('.form-check').each(function(){
        
          var form = $(this),
              btn = form.find('.btn_submit');
              btn.addClass('disabled');
          
          // Функция проверки полей формы      
          function checkInput(){
            
            form.find('.rfield').each(function(){
              
              if($(this).hasClass('phonefield')){
              
                var pmc = $(this);
                if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
                  pmc.addClass('empty_field');
                } else {
                  pmc.removeClass('empty_field');
                }
                
              } else if($(this).hasClass('mailfield')) {
              
                var mailfield = $(this);
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(pattern.test(mailfield.val())){
                  mailfield.removeClass('empty_field');
                } else {
                  mailfield.addClass('empty_field');
                }
              
              } else if($(this).val() != '') {
                
                $(this).removeClass('empty_field');
                
              } else {
                $(this).addClass('empty_field');
              }

            });
          }
          
          // Функция подсветки незаполненных полей
          function lightEmpty(){
            form.find('.empty_field').addClass('rf_error');
            form.find('.empty_field').parents('.rline').find('.rfield_error').css({'visibility':'visible'});
            form.find('.empty_field').parents('.rline').addClass('line-error');
            setTimeout(function(){
              form.find('.empty_field').removeClass('rf_error');
              form.find('.empty_field').parents('.rline').find('.rfield_error').css({'visibility':'hidden'});
              form.find('.empty_field').parents('.rline').removeClass('line-error');
            },2000);
          }
          
          //  Полсекундная проверка
          setInterval(function(){
            checkInput();
            var sizeEmpty = form.find('.empty_field').length;
            if(sizeEmpty > 0){
              if(btn.hasClass('disabled')){
                return false
              } else {
                btn.addClass('disabled')
              }
            } else {
              btn.removeClass('disabled')
            }
          },500);
          
          //  Клик по кнопке
          btn.click(function(){
            if($(this).hasClass('disabled')){
              lightEmpty();
              return false
            }
          });
          
        });
      
      }
    
	});

})( jQuery );