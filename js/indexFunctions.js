$(function(){
	if(Modernizr.history){
		var newHash = "",
			$mainContent = $('#content-panel');
		$('nav').delegate('a', 'click', function(){
			link = $(this).attr('href');
			showContentId = $(this).attr('data');
			 history.pushState(null, null, link);
			 loadContent(link, showContentId);
			console.log(this);
		});

		// $(window).bind('popstate', function(){
	 //        _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
	 //        debugger;	        
  //       	loadContent(_link);
  //   	});

		function loadContent(link, id){
			debugger;
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