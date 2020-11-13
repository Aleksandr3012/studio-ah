$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();   
 
		$("#up").click(function(){
			$("body,html").animate({
				scrollTop:0
			}, 300);
		});
		/* $(".fancybox").fancybox({
		  autoSize:true,
		  fixed: false,
		  helpers: {
			overlay: {
			locked: false
				}	
			}
		
		}); */
	    $(".toggleshow").click(function(){
        $(this).next(".hiddenz").slideToggle();
        return false;
    });
			var winH = window.innerHeight;
			
			 $(window).scroll(function() {
			 var upPos = $('#up').offset().top;
			 //alert(upPos + " " + winH);
			 if (upPos > (winH+100)) {
				 $('#up').fadeIn();
			 }
			 else $('#up').fadeOut();
		 });
		 
});

/*
$(document).ready(function() {
		$(".fancybox").fancybox({
		  helpers: {
			overlay: {
			locked: false
				}	
			}
		
		});
		$('#carousel').carousel({
			interval: 3500
		});
 
	});
	*/
	function setEqualHeight(columns)
		{
		var tallestcolumn = 0;
		columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
			tallestcolumn = currentHeight;
			}
			}
			);
			tallestcolumn = tallestcolumn+12;
			tallestcolumn = tallestcolumn+'px';
			//columns.height(tallestcolumn+12);
			$(columns).css('min-height', tallestcolumn);
			 //alert(tallestcolumn);
		}
$(document).ready(function() {
	setEqualHeight($(".imggal"));
});