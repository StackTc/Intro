$(".nav-tabs li").click(function(){
	num = $(this).index();
	$(".tab-content .tab-pane").eq(0).removeClass("active");
	$(".tab-content .tab-pane").eq(1).removeClass("active");
	$(".tab-content .tab-pane").eq(num).addClass("active");
});
