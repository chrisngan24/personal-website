$(document).ready(function(){
	if(Modernizr.history){		
		var newHash = "",
			$mainContent = $('#content-panel'),
			bigPanel = 'big-panel';
		//$('.title-panel').attr('height') = 200;
		$(document).ready(function(){			
			
			$('#main_content').hide().removeClass('hidden').addClass('selected');
			$('.title-panel').addClass(bigPanel);
			$('#main_content').fadeIn(500);
			$('nav').on('click', 'a', onNavClick);

			// var iframe = document.getElementById("myFrame");
			// iframe.src ="nav.html";
			

		})





		function onNavClick(a){
			$('.title-panel.big-panel').fadeOut(100, function(){				
				$('.title-panel').removeClass(bigPanel)
				$('.title-panel').fadeIn(100);
				$('#social-panel').remove();
			})
			
			
			$('nav a').removeClass('selectedNav');
			$(this).addClass('selectedNav');
			link = $(this).attr('href');
			showContentId = $(this).attr('data');
			 history.pushState(null, null, link);
			 loadContent(link, showContentId);
			
			
		}


		function loadContent(link, id){
			
			var $oldContent = $mainContent.find('.selected');
			var content = $.ajax
			if($oldContent.length){
				$oldContent.fadeOut(200, function(){
					
					$oldContent.addClass('hidden')
						.removeClass('selected');					
					
					fadeNewContent(id);
				});
			} 
			else
				fadeNewContent(id);

		}
		function fadeNewContent(id){			
			var $newContent = $mainContent.find('#' + id);
				$newContent.hide()
					.addClass('selected')
					.removeClass('hidden');
				$newContent.fadeIn(200);
		}


	} else{
		
		
	}
});