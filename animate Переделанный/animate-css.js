//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru

		// ПЛАГИНЫ ДЛЯ JQ на animate.css
		//1.Подключаем animate.css
		//2.Подключаем скрипт
		//3. $(".element").animated("zoomInUp"); - реализация в нашем главном коде
// Срабатывает Сразу для всех элементов
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);

		
// Срабатывает По очереди для всех элементов
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function(index) {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				setTimeout(function() {
					if (dir === "down") {
						ths.addClass(inEffect).css("opacity", "1");
					};
				},400*index);
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);



						// Реализация на waypoint c использованием CSS классов
						// 1. Добавляем стили для .on 
						// 2. Подключаем вейпоинт
						// 3. Прописуем в common.js этот скрипт
//Поочередная Анимация с добавлением классов
	$(".section_2").waypoint(function() {
		$(".s2-item").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	// Добовляет и уберает при скроле класс
	$("#about").waypoint(function() {
		$(".about-img").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				ths.addClass("on");
				setTimeout(function(){
					ths.removeClass("on")
				},400*(index + 1))
			}, 500*(index + 1));
		});
	}, {
		offset : "30%"
	});
