// $(document).ready(function(){

// 	(function($) {

// 		$('#header__icon').click(function(e){
// 			e.preventDefault();
// 			$('body').toggleClass('with--sidebar');
// 		});
    
//     $('#site-cache').click(function(e){
//       $('body').removeClass('with--sidebar');
//     });

// 	})(jQuery);

// });

function onMenu(){
	document.body.classList.add("with--sidebar");
}
function offMenu() {
	document.body.classList.remove("with--sidebar");
}
