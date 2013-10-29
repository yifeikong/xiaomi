(function () {
	var click_num = 0;
	var super_click = function () {
		if (CONFIG.count == 0){
			$('#reback').click();
			$('.reback_btn').click();
			$('.reback_btn_next').click();
			click_num++;
			$('#counter').text(click_num);
			console.log('clicked' + click_num);
		}
	};
	var main = function () {
		if (!window.jQuery) {
	　　　　var script=document.createElement('script');
	　　　　script.src='http://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js';
	　　　　document.body.appendChild(script);
　　    }
		CONFIG.count = 0;
		CONFIG.clickCount = 1000000000;
		Util.reload = function () {};
		$('<p id="counter" style="background:red">0</p>').prependTo('body');
		window.setInterval(super_click, 200);
	};
	main();
})();