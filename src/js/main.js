
//= ../libs/jquery/jquery-2.2.0.min.js
//= ../libs/bootstrap/js/bootstrap.min.js
//= ../libs/fancybox/source/jquery.fancybox.pack.js
//= ../libs/masonry/dist/masonry.pkgd.min.js
//= ../libs/slick/slick/slick.js

$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	/*$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	*/
	$('.videocarousel').slick({
		slidesToShow: 6,
		infinite: false,
	});
	$(".fancybox").fancybox();
	$('.articles__wrapper').masonry({
  		itemSelector: '.miniarticle',
  		columnWidth: '.miniarticle',
	});
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('#maincarousel').on('slide.bs.carousel', function (ev) {
  		var id = ev.relatedTarget.id;
  		switch (id) {
    		case "1":
      			// do something the id is 1
      			$('body').css('background', '#def1ed');

      		break;
    		case "2":
    			$('body').css('background', '#e8d4c8');
      			// do something the id is 2
      		break;
    		case "3":
    			$('body').css('background', '#d4e8ed');
      			// do something the id is 3
      		break;
      		case "4":
    			$('body').css('background', '#f5f6fb');
      			// do something the id is 3
      		break;
      		case "5":
    			$('body').css('background', '#f9f1f2');
    		break;
      			// do something the id is 3
    		default:
    			
      		//the id is none of the above
  		}
	});

	$('#clinic').on('slide.bs.carousel', function (ev) {
  		var id = ev.relatedTarget.id;
  		switch (id) {
    		case "1":
      			$('#clinic .carousel-control .glyphicon-chevron-left').css('color', '#eaba9a');
      		break;
      		case "5":
    			$('#clinic .carousel-control .glyphicon-chevron-right').css('color', '#eaba9a');
    		break;
    		default:
    			$('#clinic .carousel-control .glyphicon-chevron-left').css('color', '#25b087');
    			$('#clinic .carousel-control .glyphicon-chevron-right').css('color', '#25b087');
      		//the id is none of the above
  		}
	});

	//Дополнительные телефоны

	$(".header__phone span").on("click", (function() {
		$('.header__newphone').slideToggle("fast", function () {
                if ($(this).css('display') == 'none') {
                	$('.header__phone span').css('background', 'inherit');
                    $('.header__phone span').css('color', '#25b087');
                } else {
                    $('.header__phone span').css('background', 'white');
                    $('.header__phone span').css('color', 'black');
                };
            });
	}));

	$(".socials").on("click", (function() {
		$('.footer__socialicons').animate(
			{width:'toggle'}, 100
			);
	}));

	$(".services li").on("click", (function() {
		$(this).find('.services__text').slideToggle("fast", function (){
			if ($(this).css('display') == 'none') {
             $(this).parent().find('a').css('color', '#bb815b');
             $(this).parent().find('span').css('color', '#bb815b');
             $(this).parent().find('span').css('border', '1px solid #bb815b');   	
         	} else {
         	$(this).parent().find('a').css('color', '#25b087');
             $(this).parent().find('span').css('color', '#25b087');
             $(this).parent().find('span').css('border', '1px solid #25b087');   
            };
		});
        
            
	}));

	//

	$('.geography__point span').on("click", (function() {
		$(this).parent().find('.descriptionPoint').css('display','block');
	}));
	$('.descriptionPoint__close').on("click", (function() {
		$(this).parent().css('display','none');
	}));





	
	
});

